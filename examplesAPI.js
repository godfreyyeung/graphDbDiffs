// examplesAPI

function getLastToken(uri, delimiter){

	var lastToken;
	var tokenizedUri = uri.split("/");
	lastToken = tokenizedUri[tokenizedUri.length-1];
	return lastToken;
}

// acquire appropriate label
function getLabel(uri, labels){
	var label = "";
	//check if corresponding label is on shelf
	if(labels[uri]){
		label = labels[uri];
	}
	//else acquire characters after the last fwd slash in uri
	else {
		label = getLastToken(uri,"/");
	}
	return label;
}

function addNode(uri, posInTriple, graphNodes, labels, graphConstraints, level){
	node = {};
	var added = 0;
	var isPredicate = (posInTriple == 1) ? 1 : 0;
	graphNodes.forEach(function(curVal, idx, arr){
		if (curVal.uri == uri){
			added = 1;
			node = curVal;
		}
	});
	if(!added){

		label = getLabel(uri, labels);
		//apparently cola.js lib requires width and height properties
		//So I can't make my code cleaner elsewhere by just deriving them from isPred
		if(isPredicate){
			node = {"name": label, "uri":uri, "level": level, "isPred": 1, "width": 130, "height": 45};
		} else {
			node = {"name": label, "uri":uri, "level": level, "isPred": 0, "width": 100, "height": 70};
		}
		var nodeIdx = graphNodes.push(node) - 1;
		while(graphConstraints.length<=level){
			graphConstraints.push({
				"type":"alignment",
				"axis":"y",
				"offsets":[]
			});
		}
		graphConstraints[level].offsets.push({"node":nodeIdx.toString(), "offset":"0"});
	}
	return node;
}

// returns node if node w/ given uri found
// -1 otherwise
function getNode(uri, graphNodes){
	var node = -1;
	graphNodes.forEach(function(curVal, idx, arr){
		if(uri == curVal.uri){
			node = curVal;
		}
	});
	return node;
}

function addLinkByUris(sourceUri, targetUri, graphLinks, graphNodes, color){
	var added = 0;
	graphLinks.forEach(function(curVal, idx, arr){
		if ( (curVal.sourceUri == sourceUri) && (curVal.targetUri == targetUri)) {
			added = 1;
		}
	});
	if(!added){
		var source = getNode(sourceUri, graphNodes);
		var target = getNode(targetUri, graphNodes);
		graphLinks.push({"source": source, "target": target, "sourceUri": sourceUri, "targetUri": targetUri, "color": color});
	}
}

function addLinkByNodes(sourceNode, targetNode, graphLinks, graphNodes, color){
	var added = 0;
	graphLinks.forEach(function(curVal, idx, arr){
		if ( (curVal.source == sourceNode) && (curVal.target == targetNode)) {
			added = 1;
		}
	});
	if(!added){
		graphLinks.push({"source": sourceNode, "target": targetNode, "sourceUri": sourceUri, "targetUri": targetUri, "color": color});
	}
}

function dbExampleToGraph(dbExample, labels){
	// creates new object each call, since the function's stack is destroyed upon return.
	// However, each created graph obj is maintained on stack. Thus references towards these objects remain.
	var graph = {};
	graph.dbName = dbExample.dbName;
	graph.nsName = dbExample.nsName;
	graph.nodes = [];
	graph.links = [];
	graph.constraints = [];
	dbExample.triples.forEach(function(curVal, idx, arr){
		triple = curVal;
		entities = triple.split(" ");
		var subjectNode = {};
		if(idx == 0){
			addNode(entities[0], 0, graph.nodes, labels, graph.constraints, 0);
			addNode(entities[1], 1, graph.nodes, labels, graph.constraints, 0);
			addNode(entities[2], 2, graph.nodes, labels, graph.constraints, 0);
		} else {
			subjectNode = getNode(entities[0], graph.nodes); // assume subjects are always already added
			if(subjectNode == -1){
				alert("A triple does not connect to previous triples.");
			} else{
				predicateNode = addNode(entities[1], 1, graph.nodes, labels, graph.constraints, subjectNode.level + 1);
				objectNode = addNode(entities[2], 2, graph.nodes, labels, graph.constraints, predicateNode.level + 1); // really just subjectNode+2, but this way is more flexbile
			}
		}
		if(!(subjectNode == -1)){
			var colorBySubjectLevel = (idx) ? linkColor(subjectNode.level) : linkColor(0);
			addLinkByUris(entities[0], entities[1], graph.links, graph.nodes, colorBySubjectLevel);
			addLinkByUris(entities[1], entities[2], graph.links, graph.nodes, colorBySubjectLevel);
		}
	});

	return graph;
}