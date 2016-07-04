var svgParentDom = ".svgArea";
var width = 800,
    height = 400;

var color = d3.scale.category10();

var d3cola = cola.d3adaptor()
    .flowLayout('y', 50)
    .linkDistance(120)
    .avoidOverlaps(false)
    .size([width, height]);

var svg = d3.select(svgParentDom).append("svg")
    .attr("width", width)
    .attr("height", height);


function setForceSize(parentDomNode, svgElement){
    svgElement.width = $(parentDomNode).width(), svgElement.height = $(parentDomNode).height();
    d3cola.size([svgElement.width, svgElement.height]).resume();
}

setForceSize(svgParentDom, svg);
window.onresize = function(){setForceSize(svgParentDom, svg)};

graph1 = dbExampleToGraph(examplesNT[0].databases[0], labels);



update(graph1);


