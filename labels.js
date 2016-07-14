var labels = {
	// common wikidata namespace
	"https://www.wikidata.org/wiki/Property:P31": "instance of",
	"https://www.wikidata.org/wiki/Property:P279": "subclass of",
	"https://www.wikidata.org/wiki/Property:P1629": "subject item of this property",
	"https://www.wikidata.org/wiki/Q18636219": "Wikidata property with datatype ‘time’",
	"https://www.wikidata.org/wiki/Property:P1646": "mandatory qualifier",
	"https://www.wikidata.org/wiki/Property:P585": "point in time",
	"https://www.wikidata.org/wiki/Q2245405": "key event",
	"https://www.wikidata.org/wiki/Property:P2302": "property constraint",
	"https://www.wikidata.org/wiki/Q21503250": "type constraint",
	"https://www.wikidata.org/wiki/Property:P2308":"class (qualifier)",
	"https://www.wikidata.org/wiki/Property:P2309":"relation (qualifier)",
	"https://www.wikidata.org/wiki/Q21503252":"instance of (type constr rel)",
	// common rdf namespace
	"http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "rdf:type",
	"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property": "rdf:property",
	// common rdfs namespace
	"http://www.w3.org/2000/01/rdf-schema#label": "rdfs:label",
	"https://www.w3.org/2000/01/rdf-schema#domain": "rdfs:domain",
	"https://www.w3.org/2000/01/rdf-schema#range": "rdfs:range",
	//common owl namespace
	"http://www.w3.org/2002/07/owl#FunctionalProperty": "owl:FunctionalProperty",
	"https://www.w3.org/2002/07/owl#Thing": "owl:Thing",
	"http://www.w3.org/2002/07/owl#equivalentProperty": "owl:equivalentProperty",
	// common freebase namespace
	// last token in original url is acceptable for now
	// common movies
	"http://dbpedia.org/resource/Homegrown_(film)": "dbr:Homegrown film",
	"http://rdf.freebase.com/ns/m.02r53vq": "Homegrown film",
	"http://factforge.net/resource/fb/m.02r53vq": "Homegrown film",
	"http://www.wikidata.org/entity/Q301083": "Homegrown film",
	"http://data.linkedmdb.org/resource/film/17746": "Homegrown film",
	// common aviation
	"https://www.wikidata.org/wiki/Q667443": "wd:Hughes H-4 Hercules",
	"http://dbpedia.org/resource/Hughes_H-4_Hercules": "dbr:Hughes H-4 Hercules",
	"http://rdf.freebase.com/ns/m.0cvjtgn": "fb:Hughes H-4 Hercules",
	//first flight
	"http://rdf.freebase.com/ns/aviation.aircraft.first_flight":"fb:first flight",
	"http://rdf.freebase.com/ns/aviation.aircraft_model.maiden_flight":"fb:maiden flight",
	"http://dbpedia.org/property/firstFlight": "dbp:first flight",
	"1947-11-02(xsd:date)": "1947-11-02 (xsd:date)",
	"http:www.wikidata.org/wiki/Property:P606": "wd:first flight",
	"2_November_1947": "2 November 1947",
	"https://www.wikidata.org/wiki/Q24041613": "Wikidata property for aircrafts",
	"https://www.wikidata.org/wiki/Q23069609": "Wikidata property related to air transport",
	"https://www.wikidata.org/wiki/Q1362364": "wd:maiden flight",
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
	"45.204_-123.145": "45.204, -123.145",
	"http://www.w3.org/2003/01/geo/wgs84_pos#geometry": "wgs84_pos# geometry",
	"POINT(-123.14499664307_45.203998565674)": "POINT( -123.14499664307_ 45.203998565674)",
	"http://www.w3.org/2003/01/geo/wgs84_pos#long": "wgs84_pos# long",
	//common sports
	"https://www.wikidata.org/wiki/Q10333": "wd:Valencia CF",
	"https://www.wikidata.org/wiki/Property:P115":"wd:home venue",
	"https://www.wikidata.org/wiki/Q202762":"wd:Mestalla Stadium",
	"http://rdf.freebase.com/ns/m.080_y":"fb:Valencia CF",
	"http://dbpedia.org/resource/Valencia_CF": "dbr:Valencia CF",
	//stadium wikidata
	"https://www.wikidata.org/wiki/Q19829914":"wd:Wikidata property for places",
	"https://www.wikidata.org/wiki/Q22964372":"wd:Wikidata property related to sport orgs",
	"https://www.wikidata.org/wiki/Q483110":"wd:stadium",
	"https://www.wikidata.org/wiki/Q21818626":"Wikidata property related to sport",
	"https://www.wikidata.org/wiki/Q18608993":"Wikidata property for items about orgs",
	"https://www.wikidata.org/wiki/Q4438121":"sports organization",
	//stadium freebase
	"http://rdf.freebase.com/ns/sports.sports_team.arena_stadium": "fb:sports. sports_steam. arena_stadium",
	//stadium dbpedia
	"http://dbpedia.org/resource/Mestalla_Stadium": "dbr:Mestalla Stadium",
	"http://dbpedia.org/resource/Catalonia": "dbr:Catalonia",
	"http://dbpedia.org/resource/Valencia": "dbr:Valencia",
	"http://dbpedia.org/ontology/ground": "dbo:ground",
	"http://dbpedia.org/property/ground": "dbp:ground",
	"http://dbpedia.org/resource/Estadio_Mestalla": "dbr:Estadio _Mestalla",
	"http://dbpedia.org/ontology/wikiPageRedirects": "dbo:wikiPageREdirects",
	"http://dbpedia.org/ontology/wikiPageWikiLink": "dbo:wikiPageWikiLink",
	//locatedIn WikiData
	"https://www.wikidata.org/wiki/Property:P131": "wd:Located in the administrative territorial entity",
	"https://www.wikidata.org/wiki/Q8818": "wd:Valencia",
	"https://www.wikidata.org/wiki/Property:P17": "wd:country",
	"https://www.wikidata.org/wiki/Q29": "wd:Spain",
	//locatedIn dbpedia
	"http://dbpedia.org/property/location":"location",
	"Avenida_Suecia,_s/n_(en)": "Avenida_Suecia, s/n ,(en)",
	"http://dbpedia.org/resource/Valencia": "dbr:Valencia",
	"http://dbpedia.org/ontoloy/country":"dbo:country",
	"http://dbpedia.org/resource/Spain":"dbr:Spain",
	//locatedIn freebase
	"http://rdf.freebase.com/ns/location.location.containedby": "fb:location. location. containedby",
	//team owner wikidata
	"https://www.wikidata.org/wiki/Property:P127": "wd:owned by",
	"https://www.wikidata.org/wiki/Q7175463": "wd:Peter Lim",
	"https://www.wikidata.org/wiki/Q16869121": "wd:proprietor",
	"https://www.wikidata.org/wiki/Property:P580": "wd:start time",
	//team owner dbpedia
	"http://dbpedia.org/resource/Peter_Lim": "dbr:Peter Lim",
	"http://dbpedia.org/ontology/Agent": "dbo:Agent"
}