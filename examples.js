/**
	Difference Categories (diffCats):
		0 - Value
		1 - Structural
		2 - Extension
		3 - Contraction


// template for each difference
{
		"name": "subjectconcept-predicateconcept-objectconcept",
		"diffCats": [1,2,3],
		"description": "some description of the difference highlighted by this example",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: Factforge.net & DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://dbpedia.org/property/firstFlight 1947-11-02(xsd:date)",
					"http://dbpedia.org/property/firstFlight http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
				]
			},
		]
	},
**/

var differences =
[
	{
		"name": "film-director-person",
		"diffCats": [2,3], // not catd
		"description": "The comparison of DBPedia and Wikidata's statement for the claim highllights an extension+predicate difference.",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/director http://dbpedia.org/page/Stephen_Gyllenhaal",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/director http://dbpedia.org/page/Stephen_Gyllenhaal",
					"http://dbpedia.org/ontology/director https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Person",
					"http://dbpedia.org/property/director https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Person"
				]
			},
			{
				"dbName": "Namespace: Freebase->Freebase/DBPedia | Database: FactForge.net",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.directed_by http://dbpedia.org/resource/Stephen_Gyllenhaal",
				]
			},
			{
				"dbName": "Namespace: Linked Movie Database | Database: Linked Movie Database",
				"triples": [
					"http://data.linkedmdb.org/page/film/17746 http://data.linkedmdb.org/resource/movie/director http://data.linkedmdb.org/page/director/10534",
				]
			},
			{
				"dbName": "Namespace: Wikidata | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P57 https://www.wikidata.org/wiki/Q469233",
					"https://www.wikidata.org/wiki/Property:P57 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18618644",
					"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1568 https://www.wikidata.org/wiki/Q386724",
					"https://www.wikidata.org/wiki/Property:P57 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q3455803"
				]
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
					"Homegrown_film directed Stephen_Gyllenhaal",
					"directed https://www.w3.org/2000/01/rdf-schema#domain wordnet_person_100007846",
					"directed https://www.w3.org/2000/01/rdf-schema#range wordnet_movie_10661386",
				]
			}
		]
	},
	{
		"name": "film-hasActor-actor",
		"diffCats": [1,2,3], // not catd
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/starring http://dbpedia.org/resource/Billy_Bob_Thornton",
					"http://dbpedia.org/ontology/starring https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Work",
					"http://dbpedia.org/ontology/starring https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Actor"
				]
			},
			{
				"dbName": "Namespace: Freebase->Freebase/DBPedia | Database: FactForge.net",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://dbpedia.org/property/starring http://dbpedia.org/resource/Billy_Bob_Thornton",
				]
			},
			{
				"dbName": "Namespace: Linked Movie Database | Database: Linked Movie Database",
				"triples": [
					"http://data.linkedmdb.org/resource/film/17746 http://data.linkedmdb.org/resource/movie/performance http://data.linkedmdb.org/resource/actor/29395",
				]
			},
			{
				"dbName": "Namespace: Wikidata | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P161 https://www.wikidata.org/wiki/Q202735",
					"https://www.wikidata.org/wiki/Property:P161 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q22965162",
					"https://www.wikidata.org/wiki/Q22965162 https://www.wikidata.org/wiki/Property:P2302 https://www.wikidata.org/wiki/Q21503250",
					"https://www.wikidata.org/wiki/Q21503250 https://www.wikidata.org/wiki/Property:P2308 https://www.wikidata.org/wiki/Q11424",
					"https://www.wikidata.org/wiki/Q21503250 https://www.wikidata.org/wiki/Property:P2309 https://www.wikidata.org/wiki/Q21503252",
					"https://www.wikidata.org/wiki/Property:P161 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q33999"
				]
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
					"Homegrown_film actedin Billy_Bob_Thornton",
					"actedin https://www.w3.org/2000/01/rdf-schema#domain wordnet_actor_109765278",
					"actedin https://www.w3.org/2000/01/rdf-schema#range wordnet_movie_106613686",
				]
			}
		]
	},
	{
		"name": "film-druntime-duration",
		"diffCats": [1,2,3], // not catd
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: fluidops.com",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/Work/runtime 115.0",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/runtime 6900",
				]
			},
			{
				"dbName": "Namespace: DBPedia | Database: OpenLinkSW.com",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/Work/runtime 115.0^^http://dbpedia.org/datatype/minute",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/Work/runtime 6900.0^^http://dbpedia.org/datatype/second",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/runtime 6900",
					"http://dbpedia.org/ontology/Work/runtime https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Work",
					"http://dbpedia.org/ontology/Work/runtime https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/datatype/minute",
					"http://dbpedia.org/ontology/runtime https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Work",
					"http://dbpedia.org/ontology/runtime https://www.w3.org/2000/01/rdf-schema#range http://www.w3.org/2001/XMLSchema#double",
				]
			},
			{
				"dbName": "Namespace: Freebase->Freebase/DBPedia | Database: FactForge.net",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.runtime http://rdf.freebase.com/ns/m.03ky_f1",
					"http://rdf.freebase.com/ns/m.03ky_f1 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_cut",
					"http://rdf.freebase.com/ns/m.03ky_f1 http://rdf.freebase.com/ns/film.film_cut.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.03ky_f1 http://rdf.freebase.com/ns/film.film_cut.runtime 115.0",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.runtime http://rdf.freebase.com/ns/m.021_gc4",
					"http://rdf.freebase.com/ns/m.021_gc4 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_cut",
					"http://rdf.freebase.com/ns/m.021_gc4 http://rdf.freebase.com/ns/film.film_cut.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.021_gc4 http://rdf.freebase.com/ns/film.film_cut.runtime 102.0",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.runtime http://rdf.freebase.com/ns/m.0glb1s4",
					"http://rdf.freebase.com/ns/m.0glb1s4 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_cut",
					"http://rdf.freebase.com/ns/m.0glb1s4 http://rdf.freebase.com/ns/film.film_cut.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.0glb1s4 http://rdf.freebase.com/ns/film.film_cut.runtime 101.0",
				]
			},
			{
				"dbName": "Namespace: Linked Movie Database | Database: LMDB.org (Linked Movie Database)",
				"triples": [
					"http://data.linkedmdb.org/page/film/17746 http://data.linkedmdb.org/resource/movie/runtime 115",
				]
			},
			{
				"dbName": "Namespace: Wikidata | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P2047 98minute",
					"https://www.wikidata.org/wiki/Property:P2047 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18618644",
					"https://www.wikidata.org/wiki/Property:P2047 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18668171",
					"https://www.wikidata.org/wiki/Property:P2047 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q21077852",
					"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1568 https://www.wikidata.org/wiki/Q386724",
					"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q21886162",
					"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P2876 https://www.wikidata.org/wiki/Q1790144",
				]
			}
		]
	},
	{
		"name": "film-release_date-date",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: FactForge.org",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/released 1998-04-17(xsd:date)",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/releaseDate 1998-04-17(xsd:date)"
				]
			},
			{
				"dbName": "Namespace: DBPedia->Freebase | Database: FactForge.org",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/released 1998-04-17(xsd:date)",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/releaseDate 1998-04-17(xsd:date)",
					"http://dbpedia.org/resource/Homegrown_(film) http://rdf.freebase.com/ns/film.film.initial_release_date 1998-04-17",
					"http://dbpedia.org/resource/Homegrown_(film) http://rdf.freebase.com/ns/film.film.release_date_s http://rdf.freebase.com/ns/m.0j57726",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_regional_release_date",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/film.film_regional_release_date.release_date 1998-09-01",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/film.film_regional_release_date.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/film.film_regional_release_date.film_release_distribution_medium http://dbpedia.org/resource/DVD",
				]
			},
			{
				"dbName": "Namespace: Freebase | Database: FactForge.org",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://dbpedia.org/property/released 1998-04-17(xsd:date)",
					"http://rdf.freebase.com/ns/m.02r53vq http://dbpedia.org/ontology/releaseDate 1998-04-17(xsd:date)",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.initial_release_date 1998-04-17",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.release_date_s http://rdf.freebase.com/ns/m.0j57726",
				]
			},
			{
				"dbName": "Namespace: LMDB | Database: http://data.linkedmdb.org/",
				"triples": [
					"http://data.linkedmdb.org/resource/film/17746 http://data.linkedmdb.org/resource/movie/initial_release_date 1998-04-17",
				]
			},
			{
				"dbName": "Namespace: WikiData | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P577 1998",
					"https://www.wikidata.org/wiki/Property:P577 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18618644",
					"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1568 https://www.wikidata.org/wiki/Q386724",
					"https://www.wikidata.org/wiki/Property:P577 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18636219",
					"https://www.wikidata.org/wiki/Property:P577 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q1361758"
				]
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
					"Homegrown_(film) wasCreatedOnDate 1998-04-17^^xsd:date",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#domain https://www.w3.org/2002/07/owl#Thing",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#range xsd:date",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#subPropertyOf startsExistingOnDate",
				]
			},
		]
	},
	{
		"name": "film-locatedIn-place",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org+iwb.fluidops.com",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/country United_States(en)",
					"http://dbpedia.org/resource/Homegrown_(film) https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Country",
					"http://dbpedia.org/ontology/Country https://www.w3.org/2000/01/rdf-schema#subClassOf http://dbpedia.org/ontology/PopulatedPlace",
				]
			},
			{
				"dbName": "Namespace: Freebase | Database: FactForge.org",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.country http://dbpedia.org/resource/United_States",
				]
			},
			{
				"dbName": "Namespace: WikiData | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P495 https://www.wikidata.org/wiki/Q30",
					"https://www.wikidata.org/wiki/Property:P495 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Q6256",
					"https://www.wikidata.org/wiki/Property:P495 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q6256",
				]
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
					"Homegrown_(film) isLocatedIn United_States",
					"isLocatedIn https://www.w3.org/2000/01/rdf-schema#domain yagoPermanentlyLocatedEntity",
					"isLocatedIn https://www.w3.org/2000/01/rdf-schema#range yagoGeoEntity",
					"isLocatedIn https://www.w3.org/2000/01/rdf-schema#subPropertyOf placedIn"
				]
			},
		]
	},
	{
		"name": "restaurant-homepage-website",
		"diffCats": [1,2,3],
		"description": "some description of the difference highlighted by this example",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://xmlns.com/foaf/0.1/homepage in-n-out.com",
				]
			},
			{
				"dbName": "Namespace: Freebase | Database: Factforge.com",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://xmlns.com/foaf/0.1/homepage in-n-out.com",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.official_website in-n-out.com",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.topical_webpage in-n-out.com",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.webpage http://rdf.freebase.com/ns/m.0chn0_k",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.webpage http://rdf.freebase.com/ns/m.01xx006",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.webpage http://rdf.freebase.com/ns/m.0gz3576",
					"http://rdf.freebase.com/ns/m.0chn0_k http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/common.webpage",
					"http://rdf.freebase.com/ns/m.0chn0_k http://rdf.freebase.com/ns/common.webpage.resource http://rdf.freebase.com/ns/m.0chn0_b",
					"http://rdf.freebase.com/ns/m.0chn0_b http://rdf.freebase.com/ns/type.object.name In-N-Out_Burger_Reviews@en",
					"http://rdf.freebase.com/ns/m.01xx006 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/common.webpage",
					"http://rdf.freebase.com/ns/m.01xx006 http://rdf.freebase.com/ns/common.webpage.uri in-n-out.com",
					"http://rdf.freebase.com/ns/m.01xx006 http://rdf.freebase.com/ns/common.resource http://rdf.freebase.com/ns/m.0bjg1mf",
					"http://rdf.freebase.com/ns/m.0bjg1mf http://rdf.freebase.com/ns/common.resource.annotations http://rdf.freebase.com/ns/m.04mjktx",
					"http://rdf.freebase.com/ns/m.04mjktx http://rdf.freebase.com/ns/common.webpage.uri in-n-out.com",
					"http://rdf.freebase.com/ns/m.0gz3576 http://rdf.freebase.com/ns/common.webpage.uri in-n-out.com"
				]
			},
			{
				"dbName": "Namespace: WikiData | Database: WikiData.org",
				"triples": [
						"https://www.wikidata.org/wiki/Q1205312 https://www.wikidata.org/wiki/Property:P856 www.in-n-out.com",
						"https://www.wikidata.org/wiki/Property:P856 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
						"https://www.wikidata.org/wiki/Property:P856 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18618644",
						"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1568 https://www.wikidata.org/wiki/Q386724",
						"https://www.wikidata.org/wiki/Property:P856 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					],
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
						"In-N-Out_Burger hasWebsite in-n-out.com",
						"hasWebsite https://www.w3.org/2000/01/rdf-schema#domain yagoLegalActorGeo",
						"hasWebsite https://www.w3.org/2000/01/rdf-schema#range yagoURL",
					],
			}
		]
	},
	{
		"name": "restaurant-hasLeader-person",
		"diffCats": [1,2,3],
		"description": "highlights how two different entities differ by label but are actually the same real world object",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/keyPerson http://dbpedia.org/resource/Lynsi_Snyder",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/keyPeople http://dbpedia.org/resource/Lynsi_Snyder",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/keyPeople MarkTaylor(en)",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/keyPeople RogerKotch(en)",
					"http://dbpedia.org/ontology/keyPerson https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Person",
					"http://dbpedia.org/ontology/keyPerson https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Person",
				]
			},
			{
				"dbName": "Namespace: Freebase->dbpedia/freebase | Database: factforge.com",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/ontology/keyPeople http://dbpedia.org/resource/Lynsi_Snyder",
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/ontology/keyPeople MarkTaylor(en)",
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/ontology/keyPeople RogerKotch(en)",
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/ontology/keyPerson http://dbpedia.org/resource/Lynsi_Snyder"
				]
			},
			{
				"dbName": "Namespace: Freebase->Framebase/Freebase | Database: openlinksw.com",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://framebase.org/ns/dereif-Leadership-isLedByLeader http://rdf.freebase.com/ns/m.043s6dz",
				]
			},
		]
	},
	{
		"name": "restaurant-createdOn-date",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: dbpedia/openlinksw.com",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/foundingYear 1946(xsd:gYear)",
					"http://dbpedia.org/ontology/foundingYear https://www.w3.org/2000/01/rdf-schema#range xsd:gYear",
					"http://dbpedia.org/resource/In-N-Out_Burger http://purl.org/dc/elements/1.1/subject http://dbpedia.org/resource/Category:Restaurants_established_in_1948",
				]
			},
			{
				"dbName": "Namespace: Freebase | Database: Factforge.net",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://www.ontotext.com/proton/protontop#establishmentDate 1948",
					"http://rdf.freebase.com/ns/m.02bb8z https://www.w3.org/2000/01/rdf-schema#domain http://www.ontotext.com/proton/protontop#Organization",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/organization.organization.date_founded 1948",
					"http://rdf.freebase.com/ns/organization.organization.date_founded https://www.w3.org/2000/01/rdf-schema#subPropertyOf http://www.ontotext.com/proton/protontop#establishmentDate",
				]
			},
			{
				"dbName": "Namespace: WikiData | Database: WikiData.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q1205312 https://www.wikidata.org/wiki/Property:P571 1948",
					"https://www.wikidata.org/wiki/Property:P571 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Property:P571 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18636219",
				]
			},
			{
				"dbName": "Namespace: Yago->framebase | Database: OpenLinkSW.com",
				"triples": [
					"http://yago-knowledge.org/resource/In-N-Out_Burger http://framebase.org/ns/dereif-Creating-isCreatedAtTime 1948-##-##",
				]
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
					"In-N-Out_Burger wasCreatedOnDate 1948-##-##^^xsd:date",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#domain https://www.w3.org/2002/07/owl#Thing",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#range xsd:date",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#subPropertyOf startsExistingOnDate",
				]
			},
		]
	},
	{
		"name": "restaurant-locatedIn-location",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/locationCity http://dbpedia.org/resource/Irvine,_California",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/locationCity http://dbpedia.org/resource/Irvine,_California",
					"http://dbpedia.org/ontology/locationCity https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Organisation",
					"http://dbpedia.org/ontology/locationCity https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/City",
					"http://dbpedia.org/ontology/locationCity https://www.w3.org/2000/01/rdf-schema#subPropertyOf http://dbpedia.org/ontology/location",
					"http://dbpedia.org/ontology/locationCity https://www.w3.org/2000/01/rdf-schema#subPropertyOf http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#hasLocation",
				]
			},
			{
				"dbName": "Namespace: Freebase | Database: Factforge.net",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://www.ontotext.com/proton/protontop#locatedIn 'Irvine,California,U.S.@en'",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/organization.organization.headquarters http://rdf.freebase.com/ns/m.040s072",
					"http://www.ontotext.com/proton/protontop#locatedIn https://www.w3.org/2000/01/rdf-schema#domain http://www.ontotext.com/proton/protontop#Entity",
					"http://www.ontotext.com/proton/protontop#locatedIn https://www.w3.org/2000/01/rdf-schema#range http://www.ontotext.com/proton/protontop#Location",
				]
			},
			{
				"dbName": "Namespace: WikiData | Database: WikiData.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q1205312 https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Q49219",
					"https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Property:P276",
					"https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q7540126",
				]
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
					"In-N-Out_Burger isLocatedIn Irvine,_California",
					"In-N-Out_Burger isLocatedIn Irvine",
					"In-N-Out_Burger isLocatedIn California",
					"isLocatedIn https://www.w3.org/2000/01/rdf-schema#domain yagoPermanentlyLocatedEntity",
					"isLocatedIn https://www.w3.org/2000/01/rdf-schema#range yagoGeoEntity",
					"isLocatedIn https://www.w3.org/2000/01/rdf-schema#type owl:TransitiveProperty",
					"isLocatedIn https://www.w3.org/2000/01/rdf-schema#subPropertyOf placedIn",
				]
			},
		]
	},
	{
		"name": "restaurant-creationPlace-date",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/foundationPlace http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/foundation http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://dbpedia.org/ontology/foundationPlace https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Organisation",
					"http://dbpedia.org/ontology/foundationPlace https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/City",
				]
			},
			{
				"dbName": "Namespace: Freebase | Database: Factforge.net",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://www.ontotext.com/proton/protontop#establishedIn http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/organization.organization.place_founded http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://www.ontotext.com/proton/protontop#establishedIn https://www.w3.org/2000/01/rdf-schema#domain http://www.ontotext.com/proton/protontop#Organization",
					"http://www.ontotext.com/proton/protontop#establishedIn https://www.w3.org/2000/01/rdf-schema#subPropertyOf http://www.ontotext.com/proton/protontop#locatedIn",
				]
			},
			{
				"dbName": "Namespace: WikiData | Database: WikiData.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q1205312 https://www.wikidata.org/wiki/Property:P740 https://www.wikidata.org/wiki/Q804878",
					"https://www.wikidata.org/wiki/Property:P740 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Property:P740 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18635217"
				]
			},
		]
	},
		{
		"name": "restaurant-revenue-amount",
		"diffCats": [1,2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/revenue 5.75E8",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/revenue 5.75E8",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Organisation",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#range xsd:double"
				]
			},
			{
				"dbName": "Namespace: DBPedia | Database: Factforge.com",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/revenue EstimatedUS$465million@en",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/revenue 4.65E8(xsd:usDollar)",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Organisation",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#range xsd:double"
				]
			},
			{
				"dbName": "Namespace: Yago | Database: Max Planck",
				"triples": [
					"In-N-Out_Burger hasRevenue 625000000^^dollar",
					"hasRevenue https://www.w3.org/2000/01/rdf-schema#domain yagoLegalActorGeo",
					"hasRevenue https://www.w3.org/2000/01/rdf-schema#range yagoMonetaryVAlue"
				]
			},
		]
	},
	{
		"name": "Aircraft-First flight-date",
		"diffCats": [2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: Factforge.net & DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://dbpedia.org/property/firstFlight 1947-11-02(xsd:date)" //"http://dbpedia.org/property/firstFlight http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
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
		"diffCats": [1,3],
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
		"name": "team-home stadium-stadium",
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
			}
		]
	},
	{
		"name": "stadium-in-city-in-country",
		"diffCats": [1,3],
		"description": "Comparing a two-part statement",
		"databases": [
			{
				"dbName": "NS: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Mestalla_Stadium http://dbpedia.org/property/location 46010",
					"http://dbpedia.org/resource/Mestalla_Stadium http://dbpedia.org/property/location Avenida_Suecia,_s/n_(en)",
				]
			},
			{
				"dbName": "NS: WikiData | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q202762 https://www.wikidata.org/wiki/Property:P131 https://www.wikidata.org/wiki/Q8818",
					"https://www.wikidata.org/wiki/Q8818 https://www.wikidata.org/wiki/Property:P17 https://www.wikidata.org/wiki/Q29"
				]
			},
			{
				"dbName": "NS: Yago | Database: Max Planck",
				"triples": [
					"Mestalla_Stadium isLocatedIn Spain",
					"Mestalla_Stadium isLocatedIn Valencia",
					"Valencia isLocatedIn Spain"
				]
			},
			{
				"dbName": "NS: DBPedia->Freebase/DBPedia | Database: FactForge",
				"triples": [
					"http://dbpedia.org/resource/Mestalla_Stadium http://rdf.freebase.com/ns/location.location.containedby http://dbpedia.org/resource/Valencia",
					"http://dbpedia.org/resource/Valencia http://dbpedia.org/ontoloy/country http://dbpedia.org/resource/Spain",
					"http://dbpedia.org/resource/Valencia http://rdf.freebase.com/ns/location.location.containedby http://dbpedia.org/resource/Spain"
				]
			}
		]
	},
	{
		"name": "team-owner-person",
		"diffCats": [3],
		"description": "",
		"databases": [
			{
				"dbName": "NS: WikiData | Database: Wikidata.org",
				"triples": [
					"https://www.wikidata.org/wiki/Q10333 https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Q7175463",
					"https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q16869121",
					"https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Property:P580 May_2014"
				]
			},
			{
				"dbName": "NS: DBPedia | Database: DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Valencia_CF http://dbpedia.org/property/owner http://dbpedia.org/resource/Peter_Lim",
					"http://dbpedia.org/resource/Valencia_CF http://dbpedia.org/ontology/owner http://dbpedia.org/resource/Peter_Lim",
					"http://dbpedia.org/ontology/owner http://www.w3.org/2002/07/owl#equivalentProperty https://www.wikidata.org/wiki/Property:P127",
					"http://dbpedia.org/ontology/owner https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Agent"
				]
			},
			{
				"dbName": "NS: freebase/dbpedia | DB: Factforge.net",
				"triples": [
					"None_for freebase/dbpedia factforge"
				]
			},
			{
				"dbName": "NS: freebase/dbpedia | DB: fluidops/openlinksw",
				"triples": [
					"None_for freebase/dbpedia fluidops/openlinksw"
				]
			}
		]
	},
	{
		"name": "beaver-taxon-name",
		"description" : "The example between WikiData and DBPedia illustrates how two databases might have completely different views on a concept as well. Wikidata: beaver is the same as castor, which is a taxon, a group of some taxonomic rank, of the taxonomic rank genus. BEAVER/CASTOR IS THE TAXON ITSELF. DBPedia: Beaver is separate from the taxon itself. Beaver is just a thing. It HAS a taxon, specifically genus, of Castor. But wait.. many specific species of beavers, such as the north american or eurasian, is dbo:genus of Beaver. So perhaps it can be said that the statement dbr:Beaver-dbo:genus-dbr:Castor has no additional information that indicates that Beaver is the taxon in itself, nor do sibling statements with Beaver as teh subject. This must be inferred by inspecting sub-taxon (species) of beavers. WikiData's has more sophistication.",
		"diffCats": [1,2,3],
		"databases": [
				{
					"dbName": "NS: WikiData | DB: WikiData.org",
					"triples": [
						  "https://www.wikidata.org/wiki/Q47542 https://www.wikidata.org/wiki/Property:P105 https://www.wikidata.org/wiki/Q34740",
						  "https://www.wikidata.org/wiki/Q47542 https://www.wikidata.org/wiki/Property:P225 Castor"
					]
				},
				{
					"dbName": "NS: DBPedia | DB: DBPedia.org",
					"triples": [
						  "http://dbpedia.org/resource/Beaver http://dbpedia.org/property/genus 'Castor(en)'"
					]
				}
		]
	},
	{
		"name": "beaver-parent_taxon-name",
		"description" : "",
		"diffCats": [1,2,3],
		"databases": [
				{
					"dbName": "NS: WikiData | DB: WikiData.org",
					"triples": [
						  "https://www.wikidata.org/wiki/Q47542 https://www.wikidata.org/wiki/Property:P171 https://www.wikidata.org/wiki/Q261363"
					]
				},
				{
					"dbName": "NS: DBPedia | DB: DBPedia.org",
					"triples": [
						  "http://dbpedia.org/resource/Beaver http://dbpedia.org/property/familia http://dbpedia.org/resource/Castoridae",
						  "http://dbpedia.org/resource/Beaver http://dbpedia.org/ontology/family http://dbpedia.org/resource/Castoridae"
					]
				}
		]
	},
	{
		"name": "mars-parent_body-sun",
		"description" : "",
		"diffCats": [1,2,3],
		"databases": [
				{
					"dbName": "NS: WikiData | DB: WikiData.org",
					"triples": [
						  "https://www.wikidata.org/wiki/Q111 https://www.wikidata.org/wiki/Property:P397 https://www.wikidata.org/wiki/Q525",
						  "https://www.wikidata.org/wiki/Property:P397 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q7243056"
					]
				},
				{
					"dbName": "NS: DBPedia->Freebase/DBPedia | DB: FactForge.org",
					"triples": [
						  "http://dbpedia.org/resource/Mars http://rdf.freebase.com/ns/astronomy.orbital_relationship.orbits http://dbpedia.org/resource/Sun",
						  "http://dbpedia.org/resource/Mars http://rdf.freebase.com/ns/base.exoplanetology.exoplanet.parent_star http://dbpedia.org/resource/Sun",
						  "http://dbpedia.org/resource/Mars http://rdf.freebase.com/ns/base.satelites.natural_satellite.orbited_body http://dbpedia.org/resource/Sun"
					]
				},
		]
	},
	{
		"name": "mars-orbital_period-duration",
		"description" : "only a subset of the myrid of time-related triples included here, especially for wikidata",
		"diffCats": [1,2,3],
		"databases": [
				{
					"dbName": "NS: WikiData | DB: WikiData.org",
					"triples": [
						"https://www.wikidata.org/wiki/Q111 https://www.wikidata.org/wiki/Property:P2146 668.5991±0.0001_Sol",
						"https://www.wikidata.org/wiki/Property:P2146 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q37640",
						"https://www.wikidata.org/wiki/Q37640 https://www.wikidata.org/wiki/Property:P1687 https://www.wikidata.org/wiki/Property:P2146",
						"https://www.wikidata.org/wiki/Property:P2146 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Property:P2047",
						"https://www.wikidata.org/wiki/Property:P2047 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q21886162",
						"https://www.wikidata.org/wiki/Property:P2047 https://www.wikidata.org/wiki/Property:P2876 https://www.wikidata.org/wiki/Q1790144",
						"https://www.wikidata.org/wiki/Q21886162 https://www.wikidata.org/wiki/Property:P1382 https://www.wikidata.org/wiki/Q1790144"
					]
				},
				{
					"dbName": "NS: DBPedia | DB: FactForge.org",
					"triples": [
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/orbitalPeriod 5.9354294400000006E7(xsd:double)",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/orbitalPeriod 162501.12(xsd:double)",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/orbitalPeriod 668.5991(xsd:double)",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/Planet/orbitalPeriod 686.9710000000001(xsd:day)",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/Planet/orbitalPeriod 1.8808(xsd:day)",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/Planet/orbitalPeriod 0.007738415509259259(xsd:day)",
					]
				},
				{
					"dbName": "NS: DBPedia->Freebase | DB: FactForge.org",
					"triples": [
						"http://dbpedia.org/resource/Mars http://rdf.freebase.com/ns/astronomy.orbital_relationship.orbital_period 686.971"
					]
				}
		]
	},
	{
		"name": "band-band_member-person",
		"description" : "highlights how different databases have different uses of the same predicate. DBPedia.org pairs currentMembers with a string contianing all members, while FactForge pairs currentMembers with individual band member entities.",
		"diffCats": [1,2,3],
		"databases": [
				{
					"dbName": "NS: WikiData | DB: WikiData.org",
					"triples": [
						"https://www.wikidata.org/wiki/Q722232 https://www.wikidata.org/wiki/Property:P527 https://www.wikidata.org/wiki/Q2023856",
					]
				},
				{
					"dbName": "NS: DBPedia | DB: DBPedia.org",
					"triples": [
						"http://dbpedia.org/resource/Switchfoot http://dbpedia.org/ontology/bandMember http://dbpedia.org/resource/Jerome_Fontamillas",
						"http://dbpedia.org/ontology/bandMember https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Band",
						"http://dbpedia.org/ontology/bandMember https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Person",
						"http://dbpedia.org/resource/Switchfoot http://dbpedia.org/property/currentMembers *JonForeman*TimForeman*ChadButler*JeromeFontamillas*DrewShirley(en)"
					]
				},
				{
					"dbName": "NS: Freebase->DBPedia | DB: FactForge.org",
					"triples": [
						"http://rdf.freebase.com/ns/m.0pr13 http://dbpedia.org/property/currentMembers http://dbpedia.org/resource/Jerome_Fontamillas",
					]
				}
		]
	}
]