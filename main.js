var svgParentDom = "#dbExamples";

var nodeColor = d3.scale.category10();
var linkColor = d3.scale.category10().domain([0,5]);

var width = 400;
var height = 800;


function setForceSize(parentDomNode, svgElement, colaObj){
    svgElement.width = $(parentDomNode).width(), svgElement.height = $(parentDomNode).height();
    colaObj.size([svgElement.width, svgElement.height]).resume();
}

var exampleNav = $("#examples");
differences.forEach(function(curVal, idx, arr){
    var difference = curVal;
    var newBtn = $('<div class="exampleBtn">'+difference.name+'</div>');
    newBtn.click(function(evt){
        removeGraphs();
        spawnGraphsAdapter(difference);
    })
    exampleNav.append(newBtn);
});

