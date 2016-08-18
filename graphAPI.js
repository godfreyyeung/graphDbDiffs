function wrappedLabel(data){
    nodeX = data.x;
    nodeY = data.y;
    originalLabel = data.name;
    tokens = originalLabel.split(" ");
    var sum = 0; var offsetNum = 1;
    var textElement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    textElement.setAttribute("class", "label");
    var tspan =  document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
    var spaceText = document.createTextNode(" ");
    tokens.forEach(function(curVal, idx, arr){
        var textNode = document.createTextNode(curVal+" ");
        tspan.appendChild(textNode);
        sum += curVal.length;
        if(sum > 7 || idx == (arr.length-1)){
            textElement.appendChild(tspan);
            tspan = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
            tspan.setAttribute("dy", (offsetNum*1.2).toString()+"em");
            offsetNum += 1;
            sum = 0;
        }
    });
    $(textElement).click(function(e){
        window.open(data.uri, 'window name', 'window settings');
        return false;
    })
    return textElement;
}


function getAlignmentBounds(vs, c) {
    var os = c.offsets;
    if (c.axis === 'y2') {
        var y = vs[os[0].node].y;
        c.bounds = new cola.vpsc.Rectangle(Math.min.apply(Math, os.map(function (o) { return vs[o.node].bounds.x - 20; })),
            Math.max.apply(Math, os.map(function (o) { return vs[o.node].bounds.x + 20; })),y, y);
    } else {
        var y = vs[os[0].node].y;
        c.bounds = new cola.vpsc.Rectangle(
            Math.min.apply(Math, os.map(function (o) { return vs[o.node].bounds.x - 60; })),
            Math.max.apply(Math, os.map(function (o) { return vs[o.node].bounds.X + 60; })),
            y, y);
    }
    return c.bounds;
}

function update(newGraph, colaForce, newSvg){

    d3cola = colaForce;
    svg = newSvg;
    graph = newGraph;

    var graphTitle = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    graphTitle.setAttributeNS(null, "x", "10");
    graphTitle.setAttributeNS(null, "y", "20");
    graphTitle.setAttributeNS(null, "font-size", "24");
    var titleText = document.createTextNode("DB: "+graph.dbName+" | NS: "+graph.nsName);
    graphTitle.appendChild(titleText);
    // Todo: fix this hack.
    // apparently the svg parameter passed in is an array of arrays... not the svg elem itself
    svg[0][0].appendChild(graphTitle);

    graph.nodes.forEach(function (v) { v.x = 400, v.y = 50 });
    d3cola
        .nodes(graph.nodes)
        .links(graph.links)
        .constraints(graph.constraints)
        .start(2,23,2);

    var link = svg.selectAll(".link")
        .data(graph.links);
    link.enter().append("polyline")
        .attr("stroke", function(d) {return d.color})
        .attr("class", "link")
        .attr("marker-mid", "url(#end)");
    link.exit().remove();

    var guideline = svg.selectAll(".guideline")
        .data(graph.constraints.filter(function (c) { return c.type === 'alignment' }));

    var node = svg.selectAll(".node")
        .data(graph.nodes);
    node.enter().append("rect")
        .attr("class", "node")
        .attr("width", function (d) { return d.width; })
        .attr("height", function (d) { return d.height; })
        .attr("rx", 5).attr("ry", 5)
        .style("fill", function (d) { return nodeColor(d.isPred); })
        .call(d3cola.drag);
    node.exit().remove();

    var label = svg.selectAll(".label")
        .data(graph.nodes);
    label.enter().append(function(d){return wrappedLabel(d);})
        .call(d3cola.drag);
    label.exit().remove();

    node.append("title")
        .text(function (d) { return d.uri; });



    d3cola.on("tick", function () {

        link.attr("points", function(d) {
              return d.source.x + "," + d.source.y + " " + (d.source.x + d.target.x)/2 + "," + (d.source.y + d.target.y)/2 + " " + d.target.x + "," + d.target.y; });


        guideline
            .attr("x1", function (d) { return getAlignmentBounds(graph.nodes, d).x; })
            .attr("y1", function (d) {
                return d.bounds.y;
            })
            .attr("x2", function (d) { return d.bounds.X; })
            .attr("y2", function (d) {
                return d.bounds.Y;
            });

        node.attr("x", function (d) { return d.x - d.width / 2})
            .attr("y", function (d) { return d.y - d.height / 2 });

        label.attr("x", function (d) { return d.x})
             .attr("y", function (d) {
                 var h = d.height;
                 return d.y + h/4;
             });
        label.each(function(d,i){
            var children = d3.selectAll(this.childNodes);
            var node = d;
            var numChildren = children.size();
            children.each(function(d,i){this.setAttribute("x", node.x)});
            children.each(function(d,i){this.setAttribute("y", node.y - ((node.height/16)*numChildren) )});
        });
    });

}

function removeGraphs(){
    $(svgParentDom).empty();
}

function toggleAvoidOverlaps(layoutObj, trueFalse){
    layoutObj.avoidOverlaps(trueFalse);
    layoutObj.start();
}

function spawnGraphs(difference){
    difference.databases.forEach(function(curVal, idx, arr){
        var colWidth = 0;
        if(arr.length>2){
            colWidth = 6;
        } else {
            colWidth = 12/arr.length;
        }
        var newDiv = document.createElement("div");
        newDiv.className = "col-lg-"+colWidth+" nopadding dbCol";
        var newSvg = d3.select(newDiv).append("svg");
        newSvg[0][0].setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        // build the arrow.
        newSvg.append("svg:defs").selectAll("marker")
            .data(["end"])      // Different link/path types can be defined here
          .enter().append("svg:marker")    // This section adds in the arrows
            .attr("id", String)
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 0)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
          .append("svg:path")
            .attr("d", "M0,-5L10,0L0,5");
        $(svgParentDom).append(newDiv);
        var graph = dbExampleToGraph(curVal, labels);
        var newd3cola = cola.d3adaptor()
            .flowLayout('y', 50)
            .linkDistance(120)
            .avoidOverlaps(false)
            .size([width, height]);
        setForceSize(newDiv, newSvg, newd3cola);
        window.onresize = function(){setForceSize(newDiv, newSvg,newd3cola)};
        update(graph, newd3cola, newSvg);
        var overlapBtn = $('<div class="overlapBtn">Toggle Overlaps</div>');
        var overlaps = false;
        overlapBtn.click(function(evt){
            if(overlaps){
                overlaps = false;
            } else {
                overlaps = true;
            }
            toggleAvoidOverlaps(newd3cola, overlaps);
        })

        var linkDistSlider = $('<input class="linkDistSlider" type="text" data-slider-min="120" data-slider-max="250" data-slider-step="1" data-slider-value="120"/>');
        $(newDiv).append(overlapBtn).append(linkDistSlider);
        //slider initialization must be called AFTER the slider element is appended to the DOM
        linkDistSlider.slider({
            formatter: function(value) {
                return 'Link Distance: '+value;
            }
        }).on("slide", function(slideEvt){
            newd3cola.linkDistance(slideEvt.value);
            newd3cola.start();
        });

        var tripleBox = $('<div class="tripleBox"></div>');
        curVal.triples.forEach(function(curTriple, idx, arr){
            tripleBox.append("&lt;"+curTriple.replace(/\s/g,"&gt; &lt;")+"&gt;").append(' .<br>');
        });

        var tripleBtn = $('<div class="tripleBtn">Show triples</div>');
        tripleBtn.click(function(evt){
            tripleBox.toggle();
        });

        $(newDiv).append(tripleBox).append(tripleBtn);

        if(curVal.hasOwnProperty('imgPath')){
            var imgBox = $('<div class="imgBox"><a href="img/'+curVal.imgPath+'" target="_blank" ><img src="img/'+curVal.imgPath+'"/></a></div>');
            var imgBtn = $('<div class="imgBtn">Show Image</div>');
            imgBtn.click(function(evt){
                imgBox.toggle();
            });
            $(newDiv).append(imgBox).append(imgBtn);
        }
    })
}

function spawnGraphsAdapter(difference){
    spawnGraphs(difference);
}