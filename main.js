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
var description = $("#description-view");
var descriptionTitle = $("#description-title");
var descriptionText = $("#description-text");

var activeCategories = [];

function checkboxClicked(event){
	var inputElem = event.target;
	if(inputElem.checked){
		activeCategories.push(Number(inputElem.value));
	} else {
		activeCategories.splice(activeCategories.indexOf(Number(inputElem.value)), 1);
	}
	loadExampleList(differences, activeCategories);
}

function loadExampleList(differenceArr, filterArr){
	var displayArr = differenceArr.filter(function(diffElem, idx, arr){
		return filterArr.every(function(filterElem, idx, arr){
					return diffElem.diffCats.indexOf(filterElem) !== -1;
				});
	});
	exampleNav.empty();
	displayArr.forEach(function(curVal, idx, arr){
    	var difference = curVal;
    	var newBtn = $('<div class="exampleBtn">'+idx+') '+difference.name+'</div>');

    	newBtn.click(function(evt){
    		$(evt.target).toggleClass('selected', true).siblings().removeClass('selected');
	        removeGraphs();

	        spawnGraphsAdapter(difference);

	        $("#description-view li").each(function(){
	        	if(curVal.diffCats.indexOf(Number(this.dataset.value)) > -1){
	        		$(this).toggleClass('activeCat', true);
	        		$(this).parents("li, ol").toggleClass('activeCat', true);
	        	} else {
	        		$(this).toggleClass('activeCat', false);
	        	}
	        });

	        descriptionTitle.html(difference.name);
	        descriptionText.html(difference.description);

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