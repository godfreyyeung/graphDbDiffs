/**
	Difference Categories (diffCats):
		0 - Value
		1 - Structural
		2 - Extension
		3 - Contraction


// template for each difference
{
		"dbName": "somedatabase.net",
		"nsName": "subjectNamespace->predicateOrObjectNamespace1/predicateOrObjectNamespace2",
		"imgPath": "subj-pred-obj/dbName-subjectNamespace-predicateOrObjectNamespace1-.predicateOrObjectNamespace2.png",
		"diffCats": [1,2,3],
		"description": "some description of the difference highlighted by this example",
		"databases": [
			{
				"nsName": "DBPedia", "dbName": "Factforge.net & DBPedia.org",
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
		"diffCats": [1,11,15], // not catd
		"description": "DBPedia's dbo:director and dbp:director predicates are an example of difference [3b]. Compared to DBPedia.org and Max Planck Yago statements, WikiData's statements for the domain of the director predicate highllight an extension+predicate difference. Since the equivalency of the director predicates across databases is unclear, all databases exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"imgPath": "film-director-person/dbp-dbp.png",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/director http://dbpedia.org/resource/Stephen_Gyllenhaal",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/director http://dbpedia.org/resource/Stephen_Gyllenhaal",
					"http://dbpedia.org/ontology/director https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Person",
					"http://dbpedia.org/ontology/director https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Film"
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase->Freebase/DBPedia",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.directed_by http://dbpedia.org/resource/Stephen_Gyllenhaal",
				]
			},
			{
				"dbName": "Linked Movie Database",
				"nsName": "Linked Movie Database",
				"triples": [
					"http://data.linkedmdb.org/page/film/17746 http://data.linkedmdb.org/resource/movie/director http://data.linkedmdb.org/page/director/10534",
				]
			},
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P57 https://www.wikidata.org/wiki/Q469233",
					"https://www.wikidata.org/wiki/Property:P57 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18618644",
					"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1568 https://www.wikidata.org/wiki/Q386724",
					"https://www.wikidata.org/wiki/Property:P57 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q3455803"
				]
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
				"triples": [
					"Homegrown_film directed Stephen_Gyllenhaal",
					"directed https://www.w3.org/2000/01/rdf-schema#domain wordnet_person_100007846",
					"directed https://www.w3.org/2000/01/rdf-schema#range wordnet_movie_10661386",
				]
			}
		]
	},
	{
		"name": "film-has_actor-person",
		"diffCats": [1,11], // not catd
		"description": "WikiData's method of specifying that the has_actor predicate's domain must be a creative work is potentially an example of [1biii]. Statements involving 'wikidata property about films' and the 'wd:type constraint' entities are inserted between WikiData's has_actor predicate ('cast_member') and 'wd:film'. Whereas only one statement with predicate 'rdfs:domain' is used to specify the domain in DBPedia and Max Planck's Yago claims. Since the equivalency of the has_actor predicates across databases is unclear, all databases exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/starring http://dbpedia.org/resource/Billy_Bob_Thornton",
					"http://dbpedia.org/ontology/starring https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Work",
					"http://dbpedia.org/ontology/starring https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Actor"
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase->Freebase/DBPedia",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://dbpedia.org/property/starring http://dbpedia.org/resource/Billy_Bob_Thornton",
				]
			},
			{
				"dbName": "Linked Movie Database",
				"nsName": "Linked Movie Database",
				"triples": [
					"http://data.linkedmdb.org/resource/film/17746 http://data.linkedmdb.org/resource/movie/performance http://data.linkedmdb.org/resource/actor/29395",
				]
			},
			{
				"dbName": "Wikidata",
				"nsName": "Wikidata.org",
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
				"dbName": "Yago",
				"nsName": "Max Planck",
				"triples": [
					"Homegrown_film actedin Billy_Bob_Thornton",
					"actedin https://www.w3.org/2000/01/rdf-schema#domain wordnet_actor_109765278",
					"actedin https://www.w3.org/2000/01/rdf-schema#range wordnet_movie_106613686",
				]
			}
		]
	},
	{
		"name": "film-runtime-duration",
		"diffCats": [1,3,9,10,11,12,15], // not catd. took out #4
		"description": "Difference [1aii2] is highlighted by the discrepancy between WikiData's runtime value of '98 minute' and Freebase's 115 minutes. Assuming that freebase's runtime predicate is the same as the other runtime predicates, freebase's entities that encapsulate the actual runtime values are examples of difference [1bi] and [1biii]. [1bii] is shown in how WikiData specifies the domain of its runtime predicate (wd-prop:Duration) through its superclass, 'Wikidata property for items about works'. The openlinksw database just attached a statement specifying domain directly onto the duration predicate. Difference category [2] is highlighted by the fact that the value '115' is accompanied by the minute unit in openlinksw.com's dbpedia statements, but not in statements of other databases. Difference [3b] is shown in how DBPedia and freebase have multiple duration predicates, such as 'runtime(s)' and 'runtime(m)'' or 'film_cut.runtime' and 'film.runtime'. Since the equivalency of the runtime predicates across databases is unclear, all databases exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "fluidops.com",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/Work/runtime '115.0'",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/runtime '6900'",
				]
			},
			{
				"dbName": "OpenLinkSW.com",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/Work/runtime '115.0^^http://dbpedia.org/datatype/minute'",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/Work/runtime '6900.0^^http://dbpedia.org/datatype/second'",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/runtime '6900'",
					"http://dbpedia.org/ontology/Work/runtime https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Work",
					"http://dbpedia.org/ontology/Work/runtime https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/datatype/minute",
					"http://dbpedia.org/ontology/runtime https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Work",
					"http://dbpedia.org/ontology/runtime https://www.w3.org/2000/01/rdf-schema#range http://www.w3.org/2001/XMLSchema#double",
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase->Freebase/DBPedia",
				"imgPath": "film-runtime-duration/fb.png",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.runtime http://rdf.freebase.com/ns/m.03ky_f1",
					//"http://rdf.freebase.com/ns/m.03ky_f1 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_cut",
					//"http://rdf.freebase.com/ns/m.03ky_f1 http://rdf.freebase.com/ns/film.film_cut.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.03ky_f1 http://rdf.freebase.com/ns/film.film_cut.runtime '115.0'",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.runtime http://rdf.freebase.com/ns/m.021_gc4",
					//"http://rdf.freebase.com/ns/m.021_gc4 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_cut",
					//"http://rdf.freebase.com/ns/m.021_gc4 http://rdf.freebase.com/ns/film.film_cut.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.021_gc4 http://rdf.freebase.com/ns/film.film_cut.runtime '102.0'",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.runtime http://rdf.freebase.com/ns/m.0glb1s4",
					//"http://rdf.freebase.com/ns/m.0glb1s4 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_cut",
					//"http://rdf.freebase.com/ns/m.0glb1s4 http://rdf.freebase.com/ns/film.film_cut.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.0glb1s4 http://rdf.freebase.com/ns/film.film_cut.runtime '101.0'",
				]
			},
			{
				"dbName": "Linked Movie Database",
				"nsName": "Linked Movie Database",
				"triples": [
					"http://data.linkedmdb.org/page/film/17746 http://data.linkedmdb.org/resource/movie/runtime '115'",
				]
			},
			{
				"dbName": "Wikidata.org",
				"nsName": "Wikidata",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P2047 '98minute'",
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
		"diffCats": [1,11,15],
		"description": "Difference [1biii], extended statement, is exhibited in how the Homegrown film's DVD release date is encapsulated within a Freebase entity, which simply exists to hold the release date values as properties. The other databases do not specifically have DVD release date statements to compare to, but the other release date statements in general are not encapsulated. Difference [3b] is shown in how DBPedia and freebase have multiple release_date predicates. Since the equivalency of the has_actor predicates across databases is uncertain, all databases exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "FactForge.net",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/released '1998-04-17(xsd:date)'",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/releaseDate '1998-04-17(xsd:date)'"
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "DBPedia->Freebase",
				"imgPath": "film-release_date-date/factforge-dbp-fb.png",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/released '1998-04-17(xsd:date)'",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/ontology/releaseDate '1998-04-17(xsd:date)'",
					"http://dbpedia.org/resource/Homegrown_(film) http://rdf.freebase.com/ns/film.film.initial_release_date '1998-04-17'",
					"http://dbpedia.org/resource/Homegrown_(film) http://rdf.freebase.com/ns/film.film.release_date_s http://rdf.freebase.com/ns/m.0j57726",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/film.film_regional_release_date",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/film.film_regional_release_date.release_date '1998-09-01'",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/film.film_regional_release_date.film http://dbpedia.org/resource/Homegrown_(film)",
					"http://rdf.freebase.com/ns/m.0j57726 http://rdf.freebase.com/ns/film.film_regional_release_date.film_release_distribution_medium http://dbpedia.org/resource/DVD",
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase",
				"imgPath": "film-release_date-date/factforge-fb.png",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://dbpedia.org/property/released '1998-04-17(xsd:date)'",
					"http://rdf.freebase.com/ns/m.02r53vq http://dbpedia.org/ontology/releaseDate '1998-04-17(xsd:date)'",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.initial_release_date '1998-04-17'",
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.release_date_s http://rdf.freebase.com/ns/m.0j57726",
				]
			},
			{
				"dbName": "Linked Movie Database",
				"nsName": "Linked Movie Database",
				"triples": [
					"http://data.linkedmdb.org/resource/film/17746 http://data.linkedmdb.org/resource/movie/initial_release_date '1998-04-17'",
				]
			},
			{
				"dbName": "Wikidata.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P577 '1998'",
					"https://www.wikidata.org/wiki/Property:P577 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18618644",
					"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1568 https://www.wikidata.org/wiki/Q386724",
					"https://www.wikidata.org/wiki/Property:P577 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18636219",
					"https://www.wikidata.org/wiki/Property:P577 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q1361758"
				]
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
				"triples": [
					"Homegrown_(film) wasCreatedOnDate '1998-04-17^^xsd:date'",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#domain https://www.w3.org/2002/07/owl#Thing",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#range xsd:date",
					"wasCreatedOnDate https://www.w3.org/2000/01/rdf-schema#subPropertyOf startsExistingOnDate",
				]
			},
		]
	},
	{
		"name": "film-located_in-location",
		"diffCats": [1,15],
		"description": "Difference [3b] is shown in how DBPedia has multiple statements making the claim film-located_in-location. They use the same predicate, but the objects have different URLs to a 'USA' entity. However, the 'USA' entities are not quite different because they ultimately redirect to the same USA resource. Since the equivalency of located_in predicates across databases is uncertain, all databases exhibit difference [1ai]",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/country http://dbpedia.org/resource/United_States(en)",
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/country http://dbpedia.org/resource/United_States(en)",
					"http://dbpedia.org/resource/Homegrown_(film) http://dbpedia.org/property/country http://dbpedia.org/resource/USA",
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase",
				"triples": [
					"http://rdf.freebase.com/ns/m.02r53vq http://rdf.freebase.com/ns/film.film.country http://dbpedia.org/resource/United_States",
				]
			},
			{
				"dbName": "Wikidata.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q301083 https://www.wikidata.org/wiki/Property:P495 https://www.wikidata.org/wiki/Q30",
					"https://www.wikidata.org/wiki/Property:P495 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Q6256",
					"https://www.wikidata.org/wiki/Property:P495 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q6256",
				]
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
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
		"diffCats": [1,11,15],
		"description": "Difference [1biii], encapsulated object, is most prominently seen in FactForge.net's freebase statements involving the fb:common.topic.webpage predicate. The associated objects of those statements are entities which only exist to hold the homepage URL as a property. FactForge.net's freebase statements also highlight difference [3b], that there are multiple different statements with different homepage predicates stating In-N-Out Burger's homepage. Since the equivalency of homepage predicates across databases cannot be guaranteed, all databases also exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://xmlns.com/foaf/0.1/homepage 'in-n-out.com'",
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase",
				"imgPath": "restaurant-homepage-website/factforge-fb.png",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://xmlns.com/foaf/0.1/homepage 'in-n-out.com'",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.official_website 'in-n-out.com'",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.topical_webpage 'in-n-out.com'",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.webpage http://rdf.freebase.com/ns/m.0chn0_k",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.webpage http://rdf.freebase.com/ns/m.01xx006",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/common.topic.webpage http://rdf.freebase.com/ns/m.0gz3576",
					"http://rdf.freebase.com/ns/m.0chn0_k http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/common.webpage",
					"http://rdf.freebase.com/ns/m.01xx006 http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/common.webpage",
					"http://rdf.freebase.com/ns/m.01xx006 http://rdf.freebase.com/ns/common.webpage.uri 'in-n-out.com'",
					"http://rdf.freebase.com/ns/m.01xx006 http://rdf.freebase.com/ns/common.resource http://rdf.freebase.com/ns/m.0bjg1mf",
					"http://rdf.freebase.com/ns/m.0bjg1mf http://rdf.freebase.com/ns/common.resource.annotations http://rdf.freebase.com/ns/m.04mjktx",
					"http://rdf.freebase.com/ns/m.04mjktx http://rdf.freebase.com/ns/common.webpage.uri 'in-n-out.com'",
					"http://rdf.freebase.com/ns/m.0gz3576 http://rdf.freebase.com/ns/common.webpage.uri 'in-n-out.com'"
				] //"http://rdf.freebase.com/ns/m.0chn0_k http://rdf.freebase.com/ns/common.webpage.resource http://rdf.freebase.com/ns/m.0chn0_b",
				  //"http://rdf.freebase.com/ns/m.0chn0_b http://rdf.freebase.com/ns/type.object.name In-N-Out_Burger_Reviews@en",
			},
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
						"https://www.wikidata.org/wiki/Q1205312 https://www.wikidata.org/wiki/Property:P856 'www.in-n-out.com'",
						"https://www.wikidata.org/wiki/Property:P856 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
						"https://www.wikidata.org/wiki/Property:P856 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18618644",
						"https://www.wikidata.org/wiki/Q18618644 https://www.wikidata.org/wiki/Property:P1568 https://www.wikidata.org/wiki/Q386724",
						"https://www.wikidata.org/wiki/Property:P856 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					],
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
				"triples": [
						"In-N-Out_Burger hasWebsite in-n-out.com",
						"hasWebsite https://www.w3.org/2000/01/rdf-schema#domain yagoLegalActorGeo",
						"hasWebsite https://www.w3.org/2000/01/rdf-schema#range yagoURL",
					],
			}
		]
	},
	{
		"name": "restaurant-has_leader-person",
		"imgPath": "resataurant-has_leader-person/dbp-dbp.png",
		"diffCats": [1,15,19],
		"description": "Difference [3.c.iv] is highlighted by how openlinksw.com's framebase-namespaced person object has the label 'Lynsi Martinez', which is different from the label 'Lynsi Snyder' used by other databases. However, the labels are in reality referring to the same real-world person. Difference [3b] is exhibited by how the DBPedia namespace has two different statements, one using the predicate 'Key People' and the other the 'Key Person' predicate, to indicate the leaders of a restaurant. Since the equivalency of has_leader predicates across databases cannot be guaranteed, all databases also exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"imgPath": "restaurant-has_leader-person/dbp-dbp.png",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/keyPerson http://dbpedia.org/resource/Lynsi_Snyder",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/keyPeople http://dbpedia.org/resource/Lynsi_Snyder",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/keyPeople 'MarkTaylor(en)'",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/keyPeople 'RogerKotch(en)'",
					"http://dbpedia.org/ontology/keyPerson https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Person",
					"http://dbpedia.org/ontology/keyPerson https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Person",
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase->dbpedia/freebase",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/property/keyPeople http://dbpedia.org/resource/Lynsi_Snyder",
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/property/keyPeople 'MarkTaylor(en)'",
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/property/keyPeople 'RogerKotch(en)'",
					"http://rdf.freebase.com/ns/m.02bb8z http://dbpedia.org/ontology/keyPerson http://dbpedia.org/resource/Lynsi_Snyder"
				]
			},
			{
				"dbName": "openlinksw.com",
				"nsName": "Freebase->Framebase/Freebase",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://framebase.org/ns/dereif-Leadership-isLedByLeader http://rdf.freebase.com/ns/m.043s6dz",
				]
			},
		]
	},
	{
		"name": "restaurant-created_on-date",
		"diffCats": [1,14,15],
		"description": "Difference [3a] is exhibited by how Openlinksw.com has a statement claiming 'In-N-Out_Burger' is a subject of the category 'Restaurants established in 1948'. This doesn't explicitly state the creation date of In-N-Out, but implies it. Difference [3b] is shown in how Factforge.net uses both 'ptop:establishmentDate' and 'fb:organization.organization.date_founded' to express creation date. Since the equivalency of created_on predicates across databases cannot be guaranteed, all databases also exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "openlinksw.com",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/foundingYear '1946(xsd:gYear)'",
					"http://dbpedia.org/ontology/foundingYear https://www.w3.org/2000/01/rdf-schema#range xsd:gYear",
					"http://dbpedia.org/resource/In-N-Out_Burger http://purl.org/dc/elements/1.1/subject http://dbpedia.org/resource/Category:Restaurants_established_in_1948",
				]
			},
			{
				"dbName": "Factforge.net",
				"nsName": "Freebase",
				"imgPath": "restaurant-created_on-date/factforge-fb.png",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://www.ontotext.com/proton/protontop#establishmentDate '1948'",
					"http://www.ontotext.com/proton/protontop#establishmentDate https://www.w3.org/2000/01/rdf-schema#domain http://www.ontotext.com/proton/protontop#Organization",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/organization.organization.date_founded '1948'",
					"http://rdf.freebase.com/ns/organization.organization.date_founded https://www.w3.org/2000/01/rdf-schema#subPropertyOf http://www.ontotext.com/proton/protontop#establishmentDate",
				]
			},
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q1205312 https://www.wikidata.org/wiki/Property:P571 '1948'",
					"https://www.wikidata.org/wiki/Property:P571 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Property:P571 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18636219",
				]
			},
			{
				"dbName": "OpenLinkSW.com",
				"nsName": "Yago->framebase",
				"triples": [
					"http://yago-knowledge.org/resource/In-N-Out_Burger http://framebase.org/ns/dereif-Creating-isCreatedAtTime '1948-##-##'",
				]
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
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
		"name": "restaurant-located_in-location",
		"diffCats": [1,4,7,8,15],
		"description": "Difference [1.a.ii.3] can be seen by comparing FactForge.net and DBPedia.org; FactForge.net has a statement where the location, Irvine, is a value ('Irvine,California,U.s.'), while DBPedia.org's Irvine object is an entity. DBPedia.org and Factforge.org also exhibits difference [3b]. Both databases have two different statements stating the restaurant's corporate location. It can also be argued that Max Planck's Yago statements exhibit differences [1.a.ii.5] and [1.a.iii]. It has two located_in statements that represents the location resource 'Irvine, California' as two different objects: 'Irvine', and 'California'. Since the equivalency of located_in predicates across databases cannot be guaranteed, all databases also exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
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
				"dbName": "Factforge.net",
				"nsName": "Freebase",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://www.ontotext.com/proton/protontop#locatedIn 'Irvine,California,U.S.@en'",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/organization.organization.headquarters http://rdf.freebase.com/ns/m.040s072",
					"http://www.ontotext.com/proton/protontop#locatedIn https://www.w3.org/2000/01/rdf-schema#domain http://www.ontotext.com/proton/protontop#Entity",
					"http://www.ontotext.com/proton/protontop#locatedIn https://www.w3.org/2000/01/rdf-schema#range http://www.ontotext.com/proton/protontop#Location",
				]
			},
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q1205312 https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Q49219",
					"https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Property:P276",
					"https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Property:P159 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q7540126",
				]
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
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
		"name": "restaurant-creation_place-location",
		"diffCats": [1,2,15],
		"description": "DBPedia and Factforge exhibit difference [3b] in that both have two different statements, each with a different predicate, explicitly stating the creation place of In-N-Out. If one assumes that the dbo:foundationPlace and ptop:EstablishedIn are equivalent predicates, then it can be argued that the statements specifying their domain exhibit difference [1.a.ii.1], since both use 'rdfs:domain' but there are no known equivalency mappings between 'dbo:Organisation' and 'ptop:Organisation'. Since the equivalency of creation_place predicates across databases cannot be guaranteed, all databases also exhibit difference [1ai].",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"imgPath": "restaurant-creation_place-location/dbpedia-dbp.png",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/foundationPlace http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/foundation http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://dbpedia.org/ontology/foundationPlace https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Organisation",
					"http://dbpedia.org/ontology/foundationPlace https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/City",
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase",
				"imgPath": "restaurant-creation_place-location/factforge-fb.png",
				"triples": [
					"http://rdf.freebase.com/ns/m.02bb8z http://www.ontotext.com/proton/protontop#establishedIn http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://rdf.freebase.com/ns/m.02bb8z http://rdf.freebase.com/ns/organization.organization.place_founded http://dbpedia.org/resource/Baldwin_Park,_California",
					"http://www.ontotext.com/proton/protontop#establishedIn https://www.w3.org/2000/01/rdf-schema#domain http://www.ontotext.com/proton/protontop#Organization",
					"http://www.ontotext.com/proton/protontop#establishedIn https://www.w3.org/2000/01/rdf-schema#subPropertyOf http://www.ontotext.com/proton/protontop#locatedIn",
				]
			},
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
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
		"diffCats": [1,3,12,15],
		"description": "Difference [1.a.ii.2] is evident in that the statements in DBPedia, FactForge and Yago all claim In-N-Out's revenue to be different amounts. Difference [2a] is seen in how FactForge and Max Planck statements place the dollar unit in the amount object, but DBPedia does not. Difference [3b] is seen in that DBPedia.org and FactForge.com both use two statements, involving two different DBPedia revenue predicates, to make a claim about In-N-Out's revenue. Difference [1ai] is also listed because there is no gaurantee of equivalency between Yago's hasRevenue predicate and the two DBPedia revenue predicates.",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"imgPath": "restaurant-revenue-amount/dbpedia-dbp.png",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/revenue '5.75E8'",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/revenue '5.75E8'",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Organisation",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#range xsd:double"
				]
			},
			{
				"dbName": "FactForge.com",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/property/revenue 'EstimatedUS$465million@en'",
					"http://dbpedia.org/resource/In-N-Out_Burger http://dbpedia.org/ontology/revenue '4.65E8(xsd:usDollar)'",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Organisation",
					"http://dbpedia.org/property/revenue https://www.w3.org/2000/01/rdf-schema#range xsd:double"
				]
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
				"triples": [
					"In-N-Out_Burger hasRevenue 625000000^^dollar",
					"hasRevenue https://www.w3.org/2000/01/rdf-schema#domain yagoLegalActorGeo",
					"hasRevenue https://www.w3.org/2000/01/rdf-schema#range yagoMonetaryVAlue"
				]
			},
		]
	},
	{
		"name": "aircraft-first_flight-date",
		"diffCats": [1],
		"description": "Since there are no guarantees for the equivalency of first_flight predicates across databases, all databases exhibit difference [1ai]. No other differences are clearly exhibited by statements about aircraft-first_flight-date. All object values are apparently equivalent. The extra statements made about the first_flight predicates in Freebase and WikiData are simply for exploration purposes, but no interesting differences are observed.",
		"databases": [
			{
				"dbName": "Factforge.net & DBPedia.org",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://dbpedia.org/property/firstFlight '1947-11-02(xsd:date)'" //"http://dbpedia.org/property/firstFlight http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
				]
			},
			{
				"dbName": "Factforge.net",
				"nsName": "DBPedia & Freebase",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://rdf.freebase.com/ns/aviation.aircraft_model.maiden_flight '1947-11-02'",
				],
			},
			{
				"dbName": "Freebase data dumps & lod.openlinksw.com",
				"nsName": "Freebase",
				"triples": [
					"http://rdf.freebase.com/ns/m.0cvjtgn http://rdf.freebase.com/ns/aviation.aircraft.first_flight '1947-11-02'",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/2002/07/owl#FunctionalProperty",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight https://www.w3.org/2000/01/rdf-schema#domain aviation.aircraft",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight https://www.w3.org/2000/01/rdf-schema#range http://rdf.freebase.com/ns/type.datetime",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.object.type http://rdf.freebase.com/ns/type.property",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.object.unique 'true'",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.property.expected_type http://rdf.freebase.com/ns/type.datetime",
					"http://rdf.freebase.com/ns/aviation.aircraft.first_flight http://rdf.freebase.com/ns/type.property.schema http://rdf.freebase.com/ns/aviation.aircraft"
				],
			},
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q667443 http:www.wikidata.org/wiki/Property:P606 '2_November_1947'",
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
		"name": "aircraft-coordinates-xy",
		"diffCats": [1,3,5,7,12,13],
		"description": "Since there are no guarantees for the equivalency of coordinates predicates across databases, all databases also exhibit difference [1ai]. Difference [1.a.ii.2], different value, is exhibited in that the latitude and longitude (XY) values specified by the databases differ in precision, format (decimal degrees versus degrees,minutes,seconds), and actual value. However, the actual value may also be different because the underlying datum that is used for the XY databases may differ acros databases, hence difference [2b] is exhibited. Another difference is that DBpedia.org has coordinates predicates that indicate the underlying datum used, while those of WikiData.org and Max Planck do not. This illustrates difference [2a]. Most notably, this examples exhibits [1.a.ii.5], multipart object. While DBPedia.org and WikiData both contain a statement that by itself associates a coordinates predicate to a single coordinate value containing both latitude and longitude, Max Planck and DBPedia.org (also) break up the coordinate value into two objects, one for latitude and one for longitude. Two separate, individual statements are used to make a claim about each coordinate component.",
		/*** actually, can't say the following because I can't compare statements with predicate indicating a coordinate to statements with predicates indicating just a lat or long.
			 ....both difference [1.a.ii.4.a] and...
			WikiData and DBPedia's statements with object values that include both latitude and longitude are examples of embedded object values, compared to the statements that just  "
		***/
		"databases": [
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q667443 https://www.wikidata.org/wiki/Property:P625 45°12'13''N,123°8'41''W",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18615777",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q22664",
					"https://www.wikidata.org/wiki/Property:P625 https://www.wikidata.org/wiki/Property:P2667 https://www.wikidata.org/wiki/Q6294369"
				]
			},
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.georss.org/georss/point '45.204_-123.145'",
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.w3.org/2003/01/geo/wgs84_pos#geometry 'POINT(-123.14499664307_45.203998565674)'",
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.w3.org/2003/01/geo/wgs84_pos#long '-123.144997_(xsd:float)'",
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://www.w3.org/2003/01/geo/wgs84_pos#lat '45.203999_(xsd:float)'"
				],
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
				"triples": [
					"Hughes_H-4_Hercules hasLongitude '-123.145^^<degrees>'",
					"Hughes_H-4_Hercules hasLatitude '45.204^^<degrees>'"
				],
			}
		]
	},
	{
		"name": "team-home_stadium-stadium",
		"diffCats": [1,15,19],
		"description": "Difference [3b] is exhibited by how FactForge has three different statements, each using a different predicate, to explicitly state the the stadium used by Valencia CF. The statement using the predicate dbo:ground involves the object dbr:Estadio_Mestalla, however dbr:Estadio_Mestalla's unique entity URL redirects to the same url as dbr:Mestalla_Stadium. Thus, the two entities can be considered to represent the same entity. This is an example of difference [3.c.iv]. Since there are no guarantees for the equivalency of home_stadium predicates across databases, all databases also exhibit difference [1ai]. Many of the statements made about the home_stadium predicates can be ignored. ",
		"databases": [
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
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
				"dbName": "Max Planck",
				"nsName": "Yago",
				"triples": [
					"Valencia_CF owns Mestalla_Stadium",
					"owns https://www.w3.org/2000/01/rdf-schema#domain yagoLegalActorGeo",
					"owns https://www.w3.org/2000/01/rdf-schema#drange https://www.w3.org/2002/07/owl#Thing",
					"owns http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "Freebase->DBPedia/Freebase",
				"imgPath": "team-home_stadium-stadium/factforge-fb-dbp-fb.png",
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
		"diffCats": [1,3,10,14,15],
		"description": "This is an experimental comparison of a two-statement-long claim, i.e. how two linked statements are structured across databases. Perhaps ideally a difference category would be created specifically for these claims which are generally most explicitly made with two statements. The most notable difference of this example between databases is that, in addition to the given a-b-c-d-e daisy chain structure, some databases also directly connects the subject with the objects of both statements. In terms of the difference categories already established, this example would fall under [3a], [3b], and [1b2] ([3a] because a-b-c and a-e-d can possibly imply a-b-c-d-e). Perhaps another difference called 'Daisy chained versus directly linked to subject' could be created. Difference [1ai] is exhibited because there are no guarantees on the equivalency of the predicates.",
		"databases": [
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Mestalla_Stadium http://dbpedia.org/property/location '46010'",
					"http://dbpedia.org/resource/Mestalla_Stadium http://dbpedia.org/property/location 'Avenida_Suecia,_s/n_(en)'",
				]
			},
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q202762 https://www.wikidata.org/wiki/Property:P131 https://www.wikidata.org/wiki/Q8818",
					"https://www.wikidata.org/wiki/Q8818 https://www.wikidata.org/wiki/Property:P17 https://www.wikidata.org/wiki/Q29",
					"https://www.wikidata.org/wiki/Q202762 https://www.wikidata.org/wiki/Property:P17 https://www.wikidata.org/wiki/Q29"
				]
			},
			{
				"dbName": "Max Planck",
				"nsName": "Yago",
				"triples": [
					"Mestalla_Stadium isLocatedIn Spain",
					"Mestalla_Stadium isLocatedIn Valencia",
					"Valencia isLocatedIn Spain"
				]
			},
			{
				"dbName": "FactForge.net",
				"nsName": "DBPedia->DBPedia/Freebase",
				"triples": [
					"http://dbpedia.org/resource/Mestalla_Stadium http://rdf.freebase.com/ns/location.location.containedby http://dbpedia.org/resource/Valencia",
					"http://dbpedia.org/resource/Valencia http://dbpedia.org/ontology/country http://dbpedia.org/resource/Spain",
					"http://dbpedia.org/resource/Valencia http://rdf.freebase.com/ns/location.location.containedby http://dbpedia.org/resource/Spain"
				]
			}
		]
	},
	{
		"name": "team-owner-person",
		"diffCats": [1,15],
		"description": "Difference [1ai] is exhibited simply because there are no statements found to ensure that owner predicates are equivalent between WikiData and DBPedia. Difference [3b] is seen in how DBPedia has two different statements claiming 'dbr:Peter Lim' as the owner of 'Valencia_CF'.",
		"databases": [
			{
				"dbName": "WikiData.org",
				"nsName": "WikiData",
				"triples": [
					"https://www.wikidata.org/wiki/Q10333 https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Q7175463",
					"https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q16869121",
					"https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Property:P31 https://www.wikidata.org/wiki/Q18608993",
					"https://www.wikidata.org/wiki/Property:P127 https://www.wikidata.org/wiki/Property:P580 'May_2014'"
				]
			},
			{
				"dbName": "DBPedia.org",
				"nsName": "DBPedia",
				"triples": [
					"http://dbpedia.org/resource/Valencia_CF http://dbpedia.org/property/owner http://dbpedia.org/resource/Peter_Lim",
					"http://dbpedia.org/resource/Valencia_CF http://dbpedia.org/ontology/owner http://dbpedia.org/resource/Peter_Lim",
					"http://dbpedia.org/ontology/owner http://www.w3.org/2002/07/owl#equivalentProperty https://www.wikidata.org/wiki/Property:P127",
					"http://dbpedia.org/ontology/owner https://www.w3.org/2000/01/rdf-schema#range http://dbpedia.org/ontology/Agent"
				]
			}//,
			// {
			// 	"dbName": "NS: freebase/dbpedia | DB: Factforge.net",
			// 	"triples": [
			// 		"None_for freebase/dbpedia factforge"
			// 	]
			// },
			// {
			// 	"dbName": "NS: freebase/dbpedia | DB: fluidops/openlinksw",
			// 	"triples": [
			// 		"None_for freebase/dbpedia fluidops/openlinksw"
			// 	]
			// }
		]
	},
	{
		"name": "beaver-taxon-name",
		"description" : "The example between WikiData and DBPedia illustrates how two databases might have completely different views on the same entity as well. There is a guaranteed equivalency between 'wd:Castor (a.k.a Beaver)' and 'dbr:Beaver'. Wikidata treats the Castor (a.k.a. Beaver )entity as the taxon itself. A taxon is a group of some taxonomic rank. This is conveyed in how WikiData has statements that attach to the Castor entity properties such as 'wd-prop:taxon rank' and 'wd-prop:taxon name'.  Wikidata specifically claims Castor as having the taxonmic rank genus. In DBPedia, however, the entity Beaver is considered separate from being a taxon rank. It is just the Beaver. It instead HAS a taxon, specifically genus, of Castor. Thus, this example illustrates difference [3.c.i] and [3.c.iii]. In order to infer that Beaver is a taxon in itself, one could observe that many specific species (sub-taxon) of beavers, such as the North American or Eurasian beaver, is 'dbo:genus' of 'dbr:Beaver'. Moreoever, this example illustrates difference [3.c.ii] because 'wd:genus' is an object in WikiData, but 'dbp:genus' is a property in DBPedia.",
		//So perhaps it can be said that the statement dbr:Beaver-dbo:genus-dbr:Castor has no additional information that indicates that Beaver is the taxon in itself, nor do sibling statements with Beaver as teh subject. This must be inferred by inspecting sub-taxon (species) of beavers. WikiData's has more sophistication.
		"diffCats": [16,17,18],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"triples": [
						  "https://www.wikidata.org/wiki/Q47542 https://www.wikidata.org/wiki/Property:P105 https://www.wikidata.org/wiki/Q34740",
						  "https://www.wikidata.org/wiki/Q47542 https://www.wikidata.org/wiki/Property:P225 'Castor'"
					]
				},
				{
					"dbName": "DBPedia.org",
					"nsName": "DBPedia",
					"triples": [
						  "http://dbpedia.org/resource/Beaver http://dbpedia.org/property/genus 'Castor(en)'"
					]
				}
		]
	},
	{
		"name": "beaver-parent_taxon-name",
		"description" : "DBPedia makes multiple statemesn specifying that dbr:Beaver is of the family Castoridae, hence exhibiting difference [3b]. Difference [3.c.iii] is also listed because it can be argued that the predicate wd-prop:parent_taxon implies 'wd:Castor (a.k.a Beaver)' is considered a taxon in itself (the keyword is parent). Meanwhile, the predicate 'dbp:familia' does not imply this for dbr:Beaver. Since there is no evidence that the parent_taxon predicates are equivalent between the databases, the difference [1ai] is also illustrated.",
		"diffCats": [1,15,18],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"triples": [
						  "https://www.wikidata.org/wiki/Q47542 https://www.wikidata.org/wiki/Property:P171 https://www.wikidata.org/wiki/Q261363"
					]
				},
				{
					"dbName": "DBPedia.org",
					"nsName": "DBPedia",
					"triples": [
						  "http://dbpedia.org/resource/Beaver http://dbpedia.org/property/familia http://dbpedia.org/resource/Castoridae",
						  "http://dbpedia.org/resource/Beaver http://dbpedia.org/ontology/family http://dbpedia.org/resource/Castoridae"
					]
				}
		]
	},
	{
		"name": "mars-parent_body-sun",
		"description" : "This example mainly highlights differnece [3b] because FactForge holds multiple statements stating that the Sun is the parent body around which Mars orbits. Since there is no evidence that the parent_body predicates are equivalent between the databases, the difference [1ai] is also illustrated.",
		"diffCats": [1,15],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"triples": [
						  "https://www.wikidata.org/wiki/Q111 https://www.wikidata.org/wiki/Property:P397 https://www.wikidata.org/wiki/Q525",
						  "https://www.wikidata.org/wiki/Property:P397 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q7243056"
					]
				},
				{
					"dbName": "FactForge.org", "nsName": "DBPedia->Freebase/DBPedia",
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
		"description" : "Difference [2a] is clearly exhibited by how one statement in Wikidata and three statements in FactForge include the unit of duration in the object, but the other four statements in FactForge do not. Differing units of duration is one cause of difference in value, [1.a.2.ii]. However, there are also outright differences in value. For example, WikiData specifies the duration as 668.5991 sols, which is equivalent to 688.86 days. However, FactForge has a statement specifying the duration as 686.971 days. Since there is no evidence that the orbital_period predicates are equivalent between the databases, the difference [1ai] is also illustrated.", //only a subset of the myrid of time-related triples included here, especially for wikidata
		"diffCats": [1,3,12],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"imgPath": "mars-orbital_period-duration/wikidata-wd.png",
					"triples": [
						"https://www.wikidata.org/wiki/Q111 https://www.wikidata.org/wiki/Property:P2146 '668.5991±0.0001_Sol'",
						"https://www.wikidata.org/wiki/Property:P2146 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q37640",
						"https://www.wikidata.org/wiki/Q37640 https://www.wikidata.org/wiki/Property:P1687 https://www.wikidata.org/wiki/Property:P2146",
						"https://www.wikidata.org/wiki/Property:P2146 https://www.wikidata.org/wiki/Property:P1647 https://www.wikidata.org/wiki/Property:P2047",
						"https://www.wikidata.org/wiki/Property:P2047 https://www.wikidata.org/wiki/Property:P1629 https://www.wikidata.org/wiki/Q21886162",
						"https://www.wikidata.org/wiki/Property:P2047 https://www.wikidata.org/wiki/Property:P2876 https://www.wikidata.org/wiki/Q1790144",
						"https://www.wikidata.org/wiki/Q21886162 https://www.wikidata.org/wiki/Property:P1382 https://www.wikidata.org/wiki/Q1790144"
					]
				},
				{
					"dbName": "FactForge.org",
					"nsName": "DBPedia",
					"triples": [
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/orbitalPeriod '5.9354294400000006E7(xsd:double)'",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/orbitalPeriod '162501.12(xsd:double)'",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/orbitalPeriod '668.5991(xsd:double)'",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/Planet/orbitalPeriod '686.9710000000001(xsd:day)'",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/Planet/orbitalPeriod '1.8808(xsd:day)'",
						"http://dbpedia.org/resource/Mars http://dbpedia.org/ontology/Planet/orbitalPeriod '0.007738415509259259(xsd:day)'",
					]
				},
				{
					"dbName": "FactForge.org",
					"nsName": "DBPedia->Freebase",
					"triples": [
						"http://dbpedia.org/resource/Mars http://rdf.freebase.com/ns/astronomy.orbital_relationship.orbital_period '686.971'"
					]
				}
		]
	},
	{
		"name": "band-band_member-person",
		"description" : "[1.a.ii.4.a] i.e. 'embedded value' is the most interesting difference highlighted by this example. FactForge and DBPedia use the same 'dbp:currentMembers' predicate in two different ways. DBPedia.org associates 'dbp:currentMembers' to a string value contianing all members of the band Switchfoot, while FactForge pairs 'dbp:currentMembers' with an entity representing just one individual band member. This is also the reason this example exhibits difference [1.a.ii.5]. Since there is no evidence that the band_member predicates are equivalent between the databases, the difference [1ai] is also illustrated.",
		"diffCats": [1,4,5],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"triples": [
						"https://www.wikidata.org/wiki/Q722232 https://www.wikidata.org/wiki/Property:P527 https://www.wikidata.org/wiki/Q2023856",
					]
				},
				{
					"dbName": "DBPedia.org",
					"nsName": "DBPedia",
					"triples": [
						"http://dbpedia.org/resource/Switchfoot http://dbpedia.org/ontology/bandMember http://dbpedia.org/resource/Jerome_Fontamillas",
						"http://dbpedia.org/ontology/bandMember https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Band",
						"http://dbpedia.org/ontology/bandMember https://www.w3.org/2000/01/rdf-schema#domain http://dbpedia.org/ontology/Person",
						"http://dbpedia.org/resource/Switchfoot http://dbpedia.org/property/currentMembers '*JonForeman*TimForeman*ChadButler*JeromeFontamillas*DrewShirley(en)'"
					]
				},
				{
					"dbName": "FactForge.org", "nsName": "Freebase->DBPedia",
					"triples": [
						"http://rdf.freebase.com/ns/m.0pr13 http://dbpedia.org/property/currentMembers http://dbpedia.org/resource/Jerome_Fontamillas",
					]
				}
		]
	},
	{
		"name": "person-nationality-nation",
		"description" : "",
		"diffCats": [],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"triples": [
						"https://www.wikidata.org/wiki/Q1189 https://www.wikidata.org/wiki/Property:P27 https://www.wikidata.org/wiki/Q766",
						"https://www.wikidata.org/wiki/Property:P27 https://www.wikidata.org/wiki/Property:P1628 http://schema.org/nationality"
					]
				},
				{
					"dbName": "FactForge.org",
					"nsName": "DBPedia.org->DBPedia/Freebase",
					"triples": [
						"http://dbpedia.org/resource/Usain_Bolt http://dbpedia.org/property/nationality Jamaican@en",
						"http://dbpedia.org/resource/Usain_Bolt http://rdf.freebase.com/ns/people.person.nationality http://dbpedia.org/resource/Jamaica"
					]
				}
		]
	},
	{
		"name": "person-birthplace-city",
		"description" : "",
		"diffCats": [7],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"triples": [
						"https://www.wikidata.org/wiki/Q39562 https://www.wikidata.org/wiki/Property:P19 https://www.wikidata.org/wiki/Q755615",
						"https://www.wikidata.org/wiki/Property:P19 https://www.wikidata.org/wiki/Property:P1628 http://schema.org/birthPlace",
						"https://www.wikidata.org/wiki/Q755615 https://www.wikidata.org/wiki/Property:P131 https://www.wikidata.org/wiki/Q488668",
						"https://www.wikidata.org/wiki/Q488668 https://www.wikidata.org/wiki/Property:P131 https://www.wikidata.org/wiki/Q1391",
					]
				},
				{
					"dbName": "FactForge.org",
					"nsName": "DBPedia.org->DBPedia/Freebase",
					"triples": [
						"http://dbpedia.org/resource/Michael_Phelps http://rdf.freebase.com/ns/people.person.place_of_birth http://dbpedia.org/resource/Towson,_Maryland",
					]
				}
		]
	},
	{
		"name": "food-has_ingredient-ingredient",
		"description" : "",
		"diffCats": [],
		"databases": [
				{
					"dbName": "WikiData.org",
					"nsName": "WikiData",
					"triples": [
						"https://www.wikidata.org/wiki/Q375 https://www.wikidata.org/wiki/Property:P527 https://www.wikidata.org/wiki/Q29493",
						"https://www.wikidata.org/wiki/Q29493 https://www.wikidata.org/wiki/Property:P527 https://www.wikidata.org/wiki/Q36465"
					]
				},
				{
					"dbName": "DBPedia.org",
					"nsName": "DBPedia.org",
					"triples": [
						"http://dbpedia.org/resource/Waffle http://dbpedia.org/ontology/ingredient http://dbpedia.org/resource/Batter_(cooking)",
						"http://dbpedia.org/resource/Waffle http://dbpedia.org/ontology/ingredient http://dbpedia.org/resource/Dough",
						"http://dbpedia.org/resource/Waffle http://dbpedia.org/ontology/ingredientName 'Batterordough'",
						"http://dbpedia.org/resource/Waffle http://dbpedia.org/property/mainIngredient 'Batter_or_dough'",
					]
				},
				{
					"dbName": "FactForge.org",
					"nsName": "DBPedia.org",
					"triples": [
						"http://dbpedia.org/resource/Waffle http://rdf.freebase.com/ns/food.dish.ingredients http://dbpedia.org/resource/Flour",
					]
				}
		]
	}
]