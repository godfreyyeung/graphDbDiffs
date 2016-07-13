/**
	Difference Categories (diffCats):
		0 - Value
		1 - Structural
		2 - Extension
		3 - Contraction
**/

var differences =
[
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
				"dbName": "NS: DBPedia & Freebase | DB: Factforge",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://rdf.freebase.com/ns/aviation.aircraft_model.maiden_flight 1947-11-02",
				],
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
					"https://www.wikidata.org/wiki/Q1362364 https://www.wikidata.org/wiki/Property:P279 https://www.wikidata.org/wiki/Q15921555",
					"http:www.wikidata.org/wiki/Property:P606 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Property:P793",
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
				"dbName": "NS: WikiData | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q667443 https://www.wikidata.org/wiki/Property:P625 45°12'13''N,123°8'41''W",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18615777",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q22664",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P2667 https://www.wikidata.org/wiki/Q6294369"
				]
			},
			{
				"dbName": "NS: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.georss.org/georss/point 45.204_-123.145",
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.w3.org/2003/01/geo/wgs84_pos#geometry POINT(-123.14499664307_45.203998565674)",
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.w3.org/2003/01/geo/wgs84_pos#long -123.144997_(xsd:float)",
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.w3.org/2003/01/geo/wgs84_pos#lat 45.203999_(xsd:float)"
				],
			},
			{
				"dbName": "NS: Yago | Database: Max Planck",
				"triples": [
					"Hughes_H-4_Hercules hasLongitude -123.145^^<degrees>",
					"Hughes_H-4_Hercules hasLatitude 45.204^^<degrees>"
				],
			}
		]
	},
	{
		"name": "FC-home stadium-stadium",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "NS: WikiData | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q10333 https://www.wikidata.org/wiki/Property:P115 https://www.wikidata.org/wiki/Q202762",
					"https://www.wikidata.org/wiki/Property:P115 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q19829914",
					"https://www.wikidata.org/wiki/Property:P115 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q22964372",
					"https://www.wikidata.org/wiki/Property:P115 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q483110",
					"https://www.wikidata.org/wiki/Q22964372 https://www.wikidata.org/wiki/Property:P279 https://www.wikidata.org/wiki/Q21818626",
					"https://www.wikidata.org/wiki/Q22964372 https://www.wikidata.org/wiki/Property:P279 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Q22964372 https://www.wikidata.org/wiki/Property:P2302 https://www.wikidata.org/wiki/Q21503250",
					"https://www.wikidata.org/wiki/Q21503250 https://www.wikidata.org/wiki/Property:P2308 https://www.wikidata.org/wiki/Q4438121",
					"https://www.wikidata.org/wiki/Q21503250 https://www.wikidata.org/wiki/Property:P2309 https://www.wikidata.org/wiki/Q21503252"
				]
			},
			{
				"dbName": "NS: Yago | Database: Max Planck",
				"triples": [
					"Valencia_CF owns Mestalla_Stadium",
					"owns https://www.w3.org/2000/01/rdf-schema#domain yagoLegalActorGeo",
					"owns https://www.w3.org/2000/01/rdf-schema#drange https://www.w3.org/2002/07/owl#Thing",
					"owns http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
				]
			},
			{
				"dbName": "NS: Freebase->DBPedia/Freebase | Database: FactForge",
				"triples": [
					"http://rdf.freebase.com/ns/m.080_y http://rdf.freebase.com/ns/sports.sports_team.arena_stadium http://dbpedia.org/resource/Mestalla_Stadium",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/ontology/ground http://dbpedia.org/resource/Estadio_Mestalla",
					//"http://dbpedia.org/resource/Estadio_Mestalla http://dbpedia.org/ontology/wikiPageRedirects http://dbpedia.org/resource/Mestalla_Stadium",
					//"http://dbpedia.org/resource/Estadio_Mestalla http://dbpedia.org/ontology/wikiPageWikiLink http://dbpedia.org/resource/Mestalla_Stadium",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/property/ground http://dbpedia.org/resource/Valencia",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/property/ground http://dbpedia.org/resource/Mestalla_Stadium",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/property/ground http://dbpedia.org/resource/Estadio_Mestalla"
				]
			},
			{
				"dbName": "NS: DBPedia->DBPedia/Freebase | Database: FactForge",
				"triples": [
					"http://rdf.freebase.com/ns/m.080_y http://rdf.freebase.com/ns/sports.sports_team.arena_stadium http://dbpedia.org/resource/Mestalla_Stadium",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/ontology/ground http://dbpedia.org/resource/Estadio_Mestalla",
					//"http://dbpedia.org/resource/Estadio_Mestalla http://dbpedia.org/ontology/wikiPageRedirects http://dbpedia.org/resource/Mestalla_Stadium",
					//"http://dbpedia.org/resource/Estadio_Mestalla http://dbpedia.org/ontology/wikiPageWikiLink http://dbpedia.org/resource/Mestalla_Stadium",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/property/ground http://dbpedia.org/resource/Valencia",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/property/ground http://dbpedia.org/resource/Mestalla_Stadium",
					"http://rdf.freebase.com/ns/m.080_y http://dbpedia.org/property/ground http://dbpedia.org/resource/Estadio_Mestalla"
				]
			}
		]
	},
	{
		"name": "stadium-locatedIn-location",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "NS: WikiData | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q10333 https://www.wikidata.org/wiki/Property:P115 https://www.wikidata.org/wiki/Q202762"
				]
			},
			{
				"dbName": "NS: Yago | Database: Max Planck",
				"triples": [
					"Mestalla_Stadium isLocatedIn Spain",
					"Mestalla_Stadium isLocatedIn Valencia"
				]
			},
			{
				"dbName": "NS: Freebase & DBPedia | Database: FactForge",
				"triples": [
					"http://rdf.freebase.com/ns/m.080_y http://rdf.freebase.com/ns/sports.sports_team.arena_stadium http://dbpedia.org/resource/Mestalla_Stadium",
				]
			}
		]
	}
]