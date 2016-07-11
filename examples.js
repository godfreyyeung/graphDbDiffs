/**
	Difference Categories (diffCats):
		0 - Value
		1 - Structural
		2 - Extension
		3 - Contraction
**/

var differences = [
	{
		"name": "Aircraft-First flight-date",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: Factforge.net & DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://dbpedia.org/property/firstFlight 1947-11-02(xsd:date)",
					"http://dbpedia.org/property/firstFlight http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
				]
			},
			{
				"dbName": "NS: Freebase | DB: Freebase data dumps & lod.openlinksw.com",
				"triples": [
					"http://rdf.freebase.com/ns/m.0cvjtgn http://rdf.freebase.com/ns/aviation.aircraft.first_flight 1947-11-02",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/2002/07/owl#FunctionalProperty",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight https://www.w3.org/2000/01/rdf-schema#domain aviation.aircraft",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight https://www.w3.org/2000/01/rdf-schema#range http://rdf.freebase.com/ns/type.datetime",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/type.property",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.object.unique true",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.property.expected_type http://rdf.freebase.com/ns/type.datetime",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.property.schema http://rdf.freebase.com/ns/aviation.aircraft"
				],
			},
			{
				"dbName": "NS: Wikidata | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q667443 http:www.wikidata.org/wiki/Property:P606 2_November_1947",
					"http:www.wikidata.org/wiki/Property:P606 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18636219",
					"http:www.wikidata.org/wiki/Property:P606 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q23069609",
					"http:www.wikidata.org/wiki/Property:P606 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q24041613",
					"http:www.wikidata.org/wiki/Property:P606 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q1362364",
					"http:www.wikidata.org/wiki/Property:P606 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Property:P793",
					"https://www.wikidata.org/wiki/Q1362364 https://www.wikidata.org/wiki/Property:P279 https://www.wikidata.org/wiki/Q15921555",
					"https://www.wikidata.org/wiki/Property:P793 https://www.wikidata.org/wiki/Property:P1646 https://www.wikidata.org/wiki/Property:P585",
					"https://www.wikidata.org/wiki/Property:P793 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q2245405"
				],
			}
		]
	},
	{
		"name": "coordinate location",
		"diffCats": [1,2,3],
		"description": "",
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
				"dbName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.georss.org/georss/point 45.204_-123.145",
				],
			},
			{
				"dbName": "DBPedia.org",
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
					"https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q1153376 https://www.wikidata.org/wiki/Q1153376"
				]
			}
		]
	}
]

var labels = {
	// common wikidata namespace
	"https://www.wikidata.org/wiki/Property:P31": "instance of",
	"https://www.wikidata.org/wiki/Property:P279": "subclass of",
	"https://www.wikidata.org/wiki/Property:P1629": "subject item of this property",
	"https://www.wikidata.org/wiki/Q18636219": "Wikidata property with datatype ‘time’",
	"https://www.wikidata.org/wiki/Property:P1646": "mandatory qualifier",
	"https://www.wikidata.org/wiki/Property:P585": "point in time",
	"https://www.wikidata.org/wiki/Q2245405": "key event",
	// common rdf namespace
	"http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "rdf:type",
	"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property": "rdf:property",
	// common rdfs namespace
	"http://www.w3.org/2000/01/rdf-schema#label": "rdfs:label",
	"https://www.w3.org/2000/01/rdf-schema#domain": "rdfs:domain",
	"https://www.w3.org/2000/01/rdf-schema#range": "rdfs:range",
	//common owl namespace
	"http://www.w3.org/2002/07/owl#FunctionalProperty": "owl:FunctionalProperty",
	// common freebase namespace
	// last token in original url is acceptable for now
	// common movies
	"http://dbpedia.org/resource/Homegrown_(film)": "Homegrown film",
	"http://rdf.freebase.com/ns/m.02r53vq": "Homegrown film",
	"http://factforge.net/resource/fb/m.02r53vq": "Homegrown film",
	"http://www.wikidata.org/entity/Q301083": "Homegrown film",
	"http://data.linkedmdb.org/resource/film/17746": "Homegrown film",
	// common aviation
	"https://www.wikidata.org/wiki/Q667443": "Hughes H-4 Hercules",
	"http://dbpedia.org/resource/Hughes_H-4_Hercules": "Hughes H-4 Hercules",
	"http://rdf.freebase.com/ns/m.0cvjtgn": "Hughes H-4 Hercules",
	//first flight
	"http://rdf.freebase.com/ns/aviation.aircraft.first_flight":"first flight",
	"http://dbpedia.org/property/firstFlight": "first flight",
	"1947-11-02(xsd:date)": "1947-11-02 (xsd:date)",
	"http:www.wikidata.org/wiki/Property:P606": "first flight",
	"2_November_1947": "2 November 1947",
	"https://www.wikidata.org/wiki/Q24041613": "Wikidata property for aircrafts",
	"https://www.wikidata.org/wiki/Q23069609": "Wikidata property related to air transport",
	"https://www.wikidata.org/wiki/Q1362364": "maiden flight",
	"https://www.wikidata.org/wiki/Q15921555": "flight",
	"https://www.wikidata.org/wiki/Property:P1647":"subproperty of",
	"https://www.wikidata.org/wiki/Property:P793":"significant event",
	//coordinate location
	"https://www.wikidata.org/wiki/Property:P625": "coordinate location",
	"https://www.wikidata.org/wiki/Q18615777": "Wikidata property to indicate a location",
	"https://www.wikidata.org/wiki/Q22664": "geographic coordinate system",
	"https://www.wikidata.org/wiki/Property:P2667": "corresponding template",
	"https://www.wikidata.org/wiki/Q6294369": "Template: Coord",
	"https://www.wikidata.org/wiki/Q1153376":"flying boat",
	"45°12'13''N,123°8'41''W": "45°12'13''N, 123°8'41''W",
	"45.204_-123.145": "45.204, -123.145"
	// vehicle type
}