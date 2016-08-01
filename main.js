var svgParentDom = "#dbExamples";

var nodeColor = d3.scale.category10();
var linkColor = d3.scale.category10().domain([0,5]);

var width = 400;
var height = 800;


function setForceSize(parentDomNode, svgElement, colaObj){
    svgElement.width = $(parentDomNode).width(), svgElement.height = $(parentDomNode).height();
    colaObj.size([svgElement.width, svgElement.height]).resume();
}

var categoriesNav = $("#categories");
var exampleNav = $("#examples");

// "perhaps in the future, ids will be strings representing the categorization hierarchy. e.g. 1bi or 1biii"
// var categories = [
// 		{
// 			{
// 				s
// 			}
// 		}
// 		{
// 			id: 1,
// 			label:"1ai) Different Predicate"
// 		},
// 		{
// 			id:2,
// 			label: " Different Object > Different Entity"
// 		},
// 		{
// 			id:3,
// 			label: "Different Object"
// 		},
// 	];
var activeCategories = [];

function checkboxClicked(){
	var inputElem = event.target;
	if(inputElem.checked){
		activeCategories.push(Number(inputElem.value));
	} else {
		console.log(inputElem.value + " what " + activeCategories.indexOf(Number(inputElem.value)));
		activeCategories.splice(activeCategories.indexOf(Number(inputElem.value)), 1);
	}
	loadExampleList(differences, activeCategories);
}

// categories.forEach(function(curVal, idx, arr){
// 	var newCheckbox = $('<input type="checkbox" name="cat" value="'+curVal+'" />');
// 	newCheckbox.click(checkboxClicked); // can't use .onchange here because newCheckbox is jquery obj
// 	var labeledCheckbox = $('<label>'+curVal+'</label>');
// 	labeledCheckbox.append(newCheckbox).append('&nbsp;');
// 	categoriesNav.append(labeledCheckbox);
// });


function loadExampleList(differenceArr, filterArr){
	var displayArr = differenceArr.filter(function(diffElem, idx, arr){
		return filterArr.every(function(filterElem, idx, arr){
					return diffElem.diffCats.indexOf(filterElem) !== -1;
				});
	});
	exampleNav.empty();
	displayArr.forEach(function(curVal, idx, arr){
    	var difference = curVal;
    	var newBtn = $('<div class="exampleBtn">'+difference.name+'</div>');
    	newBtn.click(function(evt){
	        removeGraphs();
	        spawnGraphsAdapter(difference);
	    })
	    exampleNav.append(newBtn);
	});
}

loadExampleList(differences, activeCategories);

$('.nav-btn').click(function(evt){
	$('.active').toggleClass('active', false);
	$(evt.target).toggleClass('active', true);
	$('.view').toggle(false);
	var viewId="#"+evt.target.id+"-view";
	$(viewId).toggle(true);
})

$('#category-view button').click(function(){
	categoriesNav.toggle();
})