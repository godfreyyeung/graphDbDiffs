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
		"diffCats": [2,3],
		"description": "",
		"databases": [
			{
				"dbName": "Namespace: DBPedia | Database: Factforge.net & DBPedia.org",
				"triples": [
					"http://dbpedia.org/resource/Hughes_H-4_Hercules http://dbpedia.org/property/firstFlight 1947-11-02(xsd:date)",
					"http://dbpedia.org/property/firstFlight http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"
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