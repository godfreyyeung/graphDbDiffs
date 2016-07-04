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

function update(newGraph){

    graph = newGraph;
    graph.nodes.forEach(function (v) { v.x = 400, v.y = 50 });
    d3cola
        .nodes(graph.nodes)
        .links(graph.links)
        .constraints(graph.constraints)
        .start(2,23,2);
/** the key to configuring the node ordering along a guideline
is in changing the "unconstrainted iterations" parameter in layout.start()**/

    var link = svg.selectAll(".link")
        .data(graph.links);
    link.enter().append("line")
        .attr("class", "link");
    link.exit().remove();

    var guideline = svg.selectAll(".guideline")
        .data(graph.constraints.filter(function (c) { return c.type === 'alignment' }));
    // guideline.enter().append("line")
    //     .attr("class", "guideline")
    //     .attr("stroke-dasharray", "5,5");
    // guideline.exit().remove();

    var node = svg.selectAll(".node")
        .data(graph.nodes);
    node.enter().append("rect")
        .attr("class", "node")
        .attr("width", function (d) { return d.width; })
        .attr("height", function (d) { return d.height; })
        .attr("rx", 5).attr("ry", 5)
        .style("fill", function (d) { return color(d.isPred); })
        .call(d3cola.drag);
    node.exit().remove();

    var label = svg.selectAll(".label")
        .data(graph.nodes);
    label.enter().append(function(d){return wrappedLabel(d);})
        .call(d3cola.drag);
    label.exit().remove();

    node.append("title")
        .text(function (d) { return d.name; });



    d3cola.on("tick", function () {
        link.attr("x1", function (d) { return d.source.x})
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x})
            .attr("y2", function (d) { return d.target.y; });


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
                 var h = this.getBBox().height;
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