ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2420570.281338, 5943644.301823, 2457881.901612, 5963598.229961]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limitaadministrativ_1 = new ol.format.GeoJSON();
var features_Limitaadministrativ_1 = format_Limitaadministrativ_1.readFeatures(json_Limitaadministrativ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitaadministrativ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitaadministrativ_1.addFeatures(features_Limitaadministrativ_1);
var lyr_Limitaadministrativ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitaadministrativ_1, 
                style: style_Limitaadministrativ_1,
                popuplayertitle: 'Limita administrativă',
                interactive: false,
                title: '<img src="styles/legend/Limitaadministrativ_1.png" /> Limita administrativă'
            });
var format_Cartiere_2 = new ol.format.GeoJSON();
var features_Cartiere_2 = format_Cartiere_2.readFeatures(json_Cartiere_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cartiere_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cartiere_2.addFeatures(features_Cartiere_2);
var lyr_Cartiere_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cartiere_2, 
                style: style_Cartiere_2,
                popuplayertitle: 'Cartiere',
                interactive: false,
                title: '<img src="styles/legend/Cartiere_2.png" /> Cartiere'
            });
var format_Reeastradal_3 = new ol.format.GeoJSON();
var features_Reeastradal_3 = format_Reeastradal_3.readFeatures(json_Reeastradal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reeastradal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reeastradal_3.addFeatures(features_Reeastradal_3);
var lyr_Reeastradal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reeastradal_3, 
                style: style_Reeastradal_3,
                popuplayertitle: 'Rețea stradală',
                interactive: false,
    title: 'Rețea stradală<br />\
    <img src="styles/legend/Reeastradal_3_0.png" /> primary<br />\
    <img src="styles/legend/Reeastradal_3_1.png" /> secondary<br />\
    <img src="styles/legend/Reeastradal_3_2.png" /> tertiary<br />\
    <img src="styles/legend/Reeastradal_3_3.png" /> residential<br />\
    <img src="styles/legend/Reeastradal_3_4.png" /> cycleway<br />\
    <img src="styles/legend/Reeastradal_3_5.png" /> footway<br />\
    <img src="styles/legend/Reeastradal_3_6.png" /> pedestrian<br />\
    <img src="styles/legend/Reeastradal_3_7.png" /> service<br />' });
var format_Staiedetramvai_4 = new ol.format.GeoJSON();
var features_Staiedetramvai_4 = format_Staiedetramvai_4.readFeatures(json_Staiedetramvai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Staiedetramvai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Staiedetramvai_4.addFeatures(features_Staiedetramvai_4);
cluster_Staiedetramvai_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Staiedetramvai_4
});
var lyr_Staiedetramvai_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Staiedetramvai_4, 
                style: style_Staiedetramvai_4,
                popuplayertitle: 'Stație de tramvai',
                interactive: true,
                title: '<img src="styles/legend/Staiedetramvai_4.png" /> Stație de tramvai'
            });
var format_Staiedeautobuz_5 = new ol.format.GeoJSON();
var features_Staiedeautobuz_5 = format_Staiedeautobuz_5.readFeatures(json_Staiedeautobuz_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Staiedeautobuz_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Staiedeautobuz_5.addFeatures(features_Staiedeautobuz_5);
cluster_Staiedeautobuz_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Staiedeautobuz_5
});
var lyr_Staiedeautobuz_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Staiedeautobuz_5, 
                style: style_Staiedeautobuz_5,
                popuplayertitle: 'Stație de autobuz',
                interactive: true,
                title: '<img src="styles/legend/Staiedeautobuz_5.png" /> Stație de autobuz'
            });
var format_Parcare_6 = new ol.format.GeoJSON();
var features_Parcare_6 = format_Parcare_6.readFeatures(json_Parcare_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcare_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcare_6.addFeatures(features_Parcare_6);
cluster_Parcare_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Parcare_6
});
var lyr_Parcare_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Parcare_6, 
                style: style_Parcare_6,
                popuplayertitle: 'Parcare',
                interactive: false,
                title: '<img src="styles/legend/Parcare_6.png" /> Parcare'
            });
var format_Magazinmixt_7 = new ol.format.GeoJSON();
var features_Magazinmixt_7 = format_Magazinmixt_7.readFeatures(json_Magazinmixt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Magazinmixt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magazinmixt_7.addFeatures(features_Magazinmixt_7);
cluster_Magazinmixt_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Magazinmixt_7
});
var lyr_Magazinmixt_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Magazinmixt_7, 
                style: style_Magazinmixt_7,
                popuplayertitle: 'Magazin mixt',
                interactive: true,
                title: '<img src="styles/legend/Magazinmixt_7.png" /> Magazin mixt'
            });
var format_Banc_8 = new ol.format.GeoJSON();
var features_Banc_8 = format_Banc_8.readFeatures(json_Banc_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banc_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banc_8.addFeatures(features_Banc_8);
cluster_Banc_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Banc_8
});
var lyr_Banc_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Banc_8, 
                style: style_Banc_8,
                popuplayertitle: 'Bancă',
                interactive: true,
                title: '<img src="styles/legend/Banc_8.png" /> Bancă'
            });
var format_Restaurant_9 = new ol.format.GeoJSON();
var features_Restaurant_9 = format_Restaurant_9.readFeatures(json_Restaurant_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurant_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurant_9.addFeatures(features_Restaurant_9);
cluster_Restaurant_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Restaurant_9
});
var lyr_Restaurant_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Restaurant_9, 
                style: style_Restaurant_9,
                popuplayertitle: 'Restaurant',
                interactive: true,
                title: '<img src="styles/legend/Restaurant_9.png" /> Restaurant'
            });
var format_Supermarket_10 = new ol.format.GeoJSON();
var features_Supermarket_10 = format_Supermarket_10.readFeatures(json_Supermarket_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarket_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarket_10.addFeatures(features_Supermarket_10);
cluster_Supermarket_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Supermarket_10
});
var lyr_Supermarket_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Supermarket_10, 
                style: style_Supermarket_10,
                popuplayertitle: 'Supermarket',
                interactive: true,
                title: '<img src="styles/legend/Supermarket_10.png" /> Supermarket'
            });
var format_coalLiceu_11 = new ol.format.GeoJSON();
var features_coalLiceu_11 = format_coalLiceu_11.readFeatures(json_coalLiceu_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coalLiceu_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coalLiceu_11.addFeatures(features_coalLiceu_11);
cluster_coalLiceu_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coalLiceu_11
});
var lyr_coalLiceu_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coalLiceu_11, 
                style: style_coalLiceu_11,
                popuplayertitle: 'Școală/Liceu',
                interactive: true,
                title: '<img src="styles/legend/coalLiceu_11.png" /> Școală/Liceu'
            });
var format_Grdini_12 = new ol.format.GeoJSON();
var features_Grdini_12 = format_Grdini_12.readFeatures(json_Grdini_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grdini_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grdini_12.addFeatures(features_Grdini_12);
cluster_Grdini_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Grdini_12
});
var lyr_Grdini_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Grdini_12, 
                style: style_Grdini_12,
                popuplayertitle: 'Grădiniță',
                interactive: true,
                title: '<img src="styles/legend/Grdini_12.png" /> Grădiniță'
            });
var format_Universitate_13 = new ol.format.GeoJSON();
var features_Universitate_13 = format_Universitate_13.readFeatures(json_Universitate_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universitate_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universitate_13.addFeatures(features_Universitate_13);
cluster_Universitate_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Universitate_13
});
var lyr_Universitate_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Universitate_13, 
                style: style_Universitate_13,
                popuplayertitle: 'Universitate',
                interactive: true,
                title: '<img src="styles/legend/Universitate_13.png" /> Universitate'
            });
var format_Spital_14 = new ol.format.GeoJSON();
var features_Spital_14 = format_Spital_14.readFeatures(json_Spital_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spital_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spital_14.addFeatures(features_Spital_14);
cluster_Spital_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Spital_14
});
var lyr_Spital_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Spital_14, 
                style: style_Spital_14,
                popuplayertitle: 'Spital',
                interactive: true,
                title: '<img src="styles/legend/Spital_14.png" /> Spital'
            });
var format_Farmacie_15 = new ol.format.GeoJSON();
var features_Farmacie_15 = format_Farmacie_15.readFeatures(json_Farmacie_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Farmacie_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farmacie_15.addFeatures(features_Farmacie_15);
cluster_Farmacie_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Farmacie_15
});
var lyr_Farmacie_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Farmacie_15, 
                style: style_Farmacie_15,
                popuplayertitle: 'Farmacie',
                interactive: true,
                title: '<img src="styles/legend/Farmacie_15.png" /> Farmacie'
            });
var group_Educaieisntate = new ol.layer.Group({
                                layers: [lyr_coalLiceu_11,lyr_Grdini_12,lyr_Universitate_13,lyr_Spital_14,lyr_Farmacie_15,],
                                fold: 'close',
                                title: 'Educație și sănătate'});
var group_Comeriservicii = new ol.layer.Group({
                                layers: [lyr_Magazinmixt_7,lyr_Banc_8,lyr_Restaurant_9,lyr_Supermarket_10,],
                                fold: 'close',
                                title: 'Comerț și servicii'});
var group_Infrastructururban = new ol.layer.Group({
                                layers: [lyr_Reeastradal_3,lyr_Staiedetramvai_4,lyr_Staiedeautobuz_5,lyr_Parcare_6,],
                                fold: 'close',
                                title: 'Infrastructură urbană'});
var group_GIS_osm = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GIS_osm'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Limitaadministrativ_1.setVisible(true);lyr_Cartiere_2.setVisible(true);lyr_Reeastradal_3.setVisible(true);lyr_Staiedetramvai_4.setVisible(true);lyr_Staiedeautobuz_5.setVisible(true);lyr_Parcare_6.setVisible(true);lyr_Magazinmixt_7.setVisible(true);lyr_Banc_8.setVisible(true);lyr_Restaurant_9.setVisible(true);lyr_Supermarket_10.setVisible(true);lyr_coalLiceu_11.setVisible(true);lyr_Grdini_12.setVisible(true);lyr_Universitate_13.setVisible(true);lyr_Spital_14.setVisible(true);lyr_Farmacie_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limitaadministrativ_1,lyr_Cartiere_2,group_Infrastructururban,group_Comeriservicii,group_Educaieisntate];
lyr_Limitaadministrativ_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'DATA_VALID': 'DATA_VALID', 'DENUMIRE': 'DENUMIRE', 'DESCRIERE': 'DESCRIERE', 'ID_LIMITA_': 'ID_LIMITA_', 'ID_LIMITA1': 'ID_LIMITA1', 'ID_PACHET_': 'ID_PACHET_', 'IDENTIFICA': 'IDENTIFICA', 'NIVEL': 'NIVEL', 'STARE_LEGA': 'STARE_LEGA', 'STARE_TEHN': 'STARE_TEHN', 'VALIDAT': 'VALIDAT', 'VERSIUNE': 'VERSIUNE', 'COD_JUDET1': 'COD_JUDET1', 'COD_JUDET2': 'COD_JUDET2', 'CORECTIE_G': 'CORECTIE_G', 'DOCUMENT_A': 'DOCUMENT_A', 'Contestat': 'Tronson_Litigiu', 'NIVEL_CARTO': 'NIVEL_CARTO', 'RuleID': 'RuleID', 'Override': 'Override', 'Shape_Length': 'Shape_Length', });
lyr_Cartiere_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nume': 'Nume', 'Apartenent': 'Apartenent', 'Nume_1': 'Nume_1', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'geom_type': 'geom_type', });
lyr_Reeastradal_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'cartier': 'cartier', });
lyr_Staiedetramvai_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nume': 'nume', 'id_statie': 'id_statie', 'cartier': 'cartier', });
lyr_Staiedeautobuz_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nume': 'nume', 'id_statie': 'id_statie', 'cartier': 'cartier', });
lyr_Parcare_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'fclass': 'fclass', 'cartier': 'cartier', });
lyr_Magazinmixt_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Banc_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Restaurant_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Supermarket_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_coalLiceu_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Grdini_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Universitate_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Spital_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Farmacie_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Limitaadministrativ_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'DATA_VALID': 'DateTime', 'DENUMIRE': 'TextEdit', 'DESCRIERE': 'TextEdit', 'ID_LIMITA_': 'TextEdit', 'ID_LIMITA1': 'TextEdit', 'ID_PACHET_': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'NIVEL': 'TextEdit', 'STARE_LEGA': 'TextEdit', 'STARE_TEHN': 'TextEdit', 'VALIDAT': 'TextEdit', 'VERSIUNE': 'TextEdit', 'COD_JUDET1': 'TextEdit', 'COD_JUDET2': 'TextEdit', 'CORECTIE_G': 'TextEdit', 'DOCUMENT_A': 'TextEdit', 'Contestat': 'Range', 'NIVEL_CARTO': 'TextEdit', 'RuleID': 'ValueMap', 'Override': 'Binary', 'Shape_Length': 'TextEdit', });
lyr_Cartiere_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Nume': 'TextEdit', 'Apartenent': 'TextEdit', 'Nume_1': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'geom_type': 'TextEdit', });
lyr_Reeastradal_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Staiedetramvai_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nume': 'TextEdit', 'id_statie': 'Range', 'cartier': 'TextEdit', });
lyr_Staiedeautobuz_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nume': 'TextEdit', 'id_statie': 'Range', 'cartier': 'TextEdit', });
lyr_Parcare_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'fclass': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Magazinmixt_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Banc_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Restaurant_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Supermarket_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_coalLiceu_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Grdini_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Universitate_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Spital_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Farmacie_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Limitaadministrativ_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'DATA_VALID': 'no label', 'DENUMIRE': 'no label', 'DESCRIERE': 'no label', 'ID_LIMITA_': 'no label', 'ID_LIMITA1': 'no label', 'ID_PACHET_': 'no label', 'IDENTIFICA': 'no label', 'NIVEL': 'no label', 'STARE_LEGA': 'no label', 'STARE_TEHN': 'no label', 'VALIDAT': 'no label', 'VERSIUNE': 'no label', 'COD_JUDET1': 'no label', 'COD_JUDET2': 'no label', 'CORECTIE_G': 'no label', 'DOCUMENT_A': 'no label', 'Contestat': 'no label', 'NIVEL_CARTO': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'Shape_Length': 'no label', });
lyr_Cartiere_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Nume': 'header label - visible with data', 'Apartenent': 'no label', 'Nume_1': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'inline label - visible with data', 'Shape__Len': 'no label', 'geom_type': 'no label', });
lyr_Reeastradal_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'cartier': 'no label', });
lyr_Staiedetramvai_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nume': 'header label - visible with data', 'id_statie': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Staiedeautobuz_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nume': 'header label - visible with data', 'id_statie': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Parcare_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'fclass': 'header label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Magazinmixt_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - always visible', 'cartier': 'inline label - always visible', });
lyr_Banc_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - always visible', 'cartier': 'inline label - always visible', });
lyr_Restaurant_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Supermarket_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_coalLiceu_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Grdini_12.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Universitate_13.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'header label - always visible', 'cartier': 'header label - visible with data', });
lyr_Spital_14.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'header label - always visible', 'cartier': 'header label - always visible', });
lyr_Farmacie_15.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - always visible', 'cartier': 'inline label - always visible', });
lyr_Farmacie_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});