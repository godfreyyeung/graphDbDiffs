/**
	Difference Categories (diffCats):
		0 - Value
		1 - Structural
		2 - Extetnsion
**/

var examplesNT = [
	{
		"name": "coordinate location",
		"diffCats": [1,2,3],
		"databases": [
			{
				"dbName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q667443 https://www.wikidata.org/wiki/Property:P625 45°12'13''N,123°8'41''W",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18615777",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q22664",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P2667 https://www.wikidata.org/wiki/Q6294369"
				]
			},
			{
				"dbName": "DBPedia (FactForge)",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.georss.org/georss/point 45.204_-123.145",
				],
			}
		]
	},
	{
		"name": "vehicle type",
		"diffCats": [1],
		"databases": [
			{
				"dbName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q1153376"
				]
			}
		]
	}
]

var labels = {
	"https://www.wikidata.org/wiki/Property:P31": "instance of",
	"https://www.wikidata.org/wiki/Property:P1629": "subject item of this property",
	"https://www.wikidata.org/wiki/Q667443": "Hughes H-4 Hercules",
	"https://www.wikidata.org/wiki/Property:P625": "coordinate location",
	"https://www.wikidata.org/wiki/Q22664": "geographic coordinate system",
	"https://www.wikidata.org/wiki/Q18615777": "Wikidata property to indicate a location",
	"https://www.wikidata.org/wiki/Property:P2667": "corresponding template",
	"https://www.wikidata.org/wiki/Q6294369": "Template: Coord",
	"45°12'13''N,123°8'41''W": "45°12'13''N, 123°8'41''W",
	"https://www.wikidata.org/wiki/Q1153376":"flying boat"
}

var graph1 = {
    "nodes":[
      {"name":"a","width":60,"height":40},
      {"name":"b","width":60,"height":40},
      {"name":"c","width":60,"height":40},
      {"name":"d","width":60,"height":40},
      {"name":"e","width":60,"height":40},
      {"name":"f","width":60,"height":40}
    ],
    "links":[
      {"source":0,"target":1},
      {"source":1,"target":2},
      {"source":1,"target":3},
      {"source":1,"target":4},
      {"source":5,"target":4}
    ],
	"constraints":[
	   {"type":"alignment",
	   "axis":"y",
	   "offsets":[
	     {"node":"0", "offset":"0"},
	     {"node":"1", "offset":"0"},
	     {"node":"2", "offset":"0"}
	   ]},
	  {"type":"alignment",
	   "axis":"y",
	   "offsets":[
	     {"node":"3", "offset":"0"},
	     {"node":"4", "offset":"0"}
	   ]},
	   {"type":"alignment",
	   "axis":"y",
	   "offsets":[
	     {"node":"5", "offset":"0"}
	   ]}
	]
}

var graph2 = {
    "nodes":[
      {"name":"a","width":60,"height":40},
      {"name":"b","width":60,"height":40},
      {"name":"c","width":60,"height":40},
      {"name":"d","width":60,"height":40},
      {"name":"e","width":60,"height":40},
      {"name":"f","width":60,"height":40}
    ],
    "links":[
      {"source":0,"target":4},
      {"source":2,"target":4},
      {"source":1,"target":4},
      {"source":3,"target":4},
      {"source":5,"target":4}
    ],
	"constraints":[
	   {"type":"alignment",
	   "axis":"y",
	   "offsets":[
	     {"node":"0", "offset":"0"},
	     {"node":"1", "offset":"0"},
	     {"node":"2", "offset":"0"}
	   ]},
	   {"type":"alignment",
	   "axis":"y",
	   "offsets":[
	     {"node":"3", "offset":"0"},
	     {"node":"4", "offset":"0"},
	     {"node":"5", "offset":"0"}
	   ]}
	]
}