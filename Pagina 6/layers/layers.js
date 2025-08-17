ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2437759.427337, 5953222.008323, 2443059.044436, 5955971.909044]);
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
var format_LTNRogerius_2 = new ol.format.GeoJSON();
var features_LTNRogerius_2 = format_LTNRogerius_2.readFeatures(json_LTNRogerius_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LTNRogerius_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LTNRogerius_2.addFeatures(features_LTNRogerius_2);
var lyr_LTNRogerius_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LTNRogerius_2, 
                style: style_LTNRogerius_2,
                popuplayertitle: 'LTN Rogerius',
                interactive: false,
                title: '<img src="styles/legend/LTNRogerius_2.png" /> LTN Rogerius'
            });
var format_CartierRogerius_3 = new ol.format.GeoJSON();
var features_CartierRogerius_3 = format_CartierRogerius_3.readFeatures(json_CartierRogerius_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartierRogerius_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartierRogerius_3.addFeatures(features_CartierRogerius_3);
var lyr_CartierRogerius_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartierRogerius_3, 
                style: style_CartierRogerius_3,
                popuplayertitle: 'Cartier Rogerius',
                interactive: false,
                title: '<img src="styles/legend/CartierRogerius_3.png" /> Cartier Rogerius'
            });
var format_Densitatearbori_4 = new ol.format.GeoJSON();
var features_Densitatearbori_4 = format_Densitatearbori_4.readFeatures(json_Densitatearbori_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densitatearbori_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densitatearbori_4.addFeatures(features_Densitatearbori_4);
var lyr_Densitatearbori_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densitatearbori_4, 
                style: style_Densitatearbori_4,
                popuplayertitle: 'Densitate arbori',
                interactive: true,
    title: 'Densitate arbori<br />\
    <img src="styles/legend/Densitatearbori_4_0.png" /> 386 - 1318 arbori/km2<br />\
    <img src="styles/legend/Densitatearbori_4_1.png" /> 1318 - 2249 arbori/km2<br />\
    <img src="styles/legend/Densitatearbori_4_2.png" /> 2249 - 3181 arbori/km2<br />\
    <img src="styles/legend/Densitatearbori_4_3.png" /> 3181 - 4113 arbori/km2<br />\
    <img src="styles/legend/Densitatearbori_4_4.png" /> 4113 - 5045 arbori/km2<br />' });
var format_Staietransportpublic_5 = new ol.format.GeoJSON();
var features_Staietransportpublic_5 = format_Staietransportpublic_5.readFeatures(json_Staietransportpublic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Staietransportpublic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Staietransportpublic_5.addFeatures(features_Staietransportpublic_5);
cluster_Staietransportpublic_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Staietransportpublic_5
});
var lyr_Staietransportpublic_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Staietransportpublic_5, 
                style: style_Staietransportpublic_5,
                popuplayertitle: 'Stație transport public',
                interactive: true,
                title: '<img src="styles/legend/Staietransportpublic_5.png" /> Stație transport public'
            });
var group_Infrastructururban = new ol.layer.Group({
                                layers: [lyr_Staietransportpublic_5,],
                                fold: 'open',
                                title: 'Infrastructură urbană'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Limitaadministrativ_1.setVisible(true);lyr_LTNRogerius_2.setVisible(true);lyr_CartierRogerius_3.setVisible(true);lyr_Densitatearbori_4.setVisible(true);lyr_Staietransportpublic_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limitaadministrativ_1,lyr_LTNRogerius_2,lyr_CartierRogerius_3,lyr_Densitatearbori_4,group_Infrastructururban];
lyr_Limitaadministrativ_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'DATA_VALID': 'DATA_VALID', 'DENUMIRE': 'DENUMIRE', 'DESCRIERE': 'DESCRIERE', 'ID_LIMITA_': 'ID_LIMITA_', 'ID_LIMITA1': 'ID_LIMITA1', 'ID_PACHET_': 'ID_PACHET_', 'IDENTIFICA': 'IDENTIFICA', 'NIVEL': 'NIVEL', 'STARE_LEGA': 'STARE_LEGA', 'STARE_TEHN': 'STARE_TEHN', 'VALIDAT': 'VALIDAT', 'VERSIUNE': 'VERSIUNE', 'COD_JUDET1': 'COD_JUDET1', 'COD_JUDET2': 'COD_JUDET2', 'CORECTIE_G': 'CORECTIE_G', 'DOCUMENT_A': 'DOCUMENT_A', 'Contestat': 'Tronson_Litigiu', 'NIVEL_CARTO': 'NIVEL_CARTO', 'RuleID': 'RuleID', 'Override': 'Override', 'Shape_Length': 'Shape_Length', });
lyr_LTNRogerius_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', });
lyr_CartierRogerius_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'OBJECTID': 'OBJECTID', 'Nume': 'Nume', 'Apartenent': 'Apartenent', 'Nume_1': 'Nume_1', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'geom_type': 'geom_type', });
lyr_Densitatearbori_4.set('fieldAliases', {'buffer_id': 'buffer_id', 'nr_arbori_in_buffer': 'nr_arbori_in_buffer', 'suprafata_buffer_m2': 'suprafata_buffer_m2', 'densitate_arbori_per_km2': 'densitate_arbori_per_km2', });
lyr_Staietransportpublic_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nume': 'nume', 'id_statie': 'id_statie', 'cartier': 'cartier', });
lyr_Limitaadministrativ_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'DATA_VALID': 'DateTime', 'DENUMIRE': 'TextEdit', 'DESCRIERE': 'TextEdit', 'ID_LIMITA_': 'TextEdit', 'ID_LIMITA1': 'TextEdit', 'ID_PACHET_': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'NIVEL': 'TextEdit', 'STARE_LEGA': 'TextEdit', 'STARE_TEHN': 'TextEdit', 'VALIDAT': 'TextEdit', 'VERSIUNE': 'TextEdit', 'COD_JUDET1': 'TextEdit', 'COD_JUDET2': 'TextEdit', 'CORECTIE_G': 'TextEdit', 'DOCUMENT_A': 'TextEdit', 'Contestat': 'Range', 'NIVEL_CARTO': 'TextEdit', 'RuleID': 'ValueMap', 'Override': 'Binary', 'Shape_Length': 'TextEdit', });
lyr_LTNRogerius_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', });
lyr_CartierRogerius_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'OBJECTID': 'TextEdit', 'Nume': 'TextEdit', 'Apartenent': 'TextEdit', 'Nume_1': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'geom_type': 'TextEdit', });
lyr_Densitatearbori_4.set('fieldImages', {'buffer_id': 'TextEdit', 'nr_arbori_in_buffer': 'TextEdit', 'suprafata_buffer_m2': 'TextEdit', 'densitate_arbori_per_km2': 'TextEdit', });
lyr_Staietransportpublic_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nume': 'TextEdit', 'id_statie': 'Range', 'cartier': 'TextEdit', });
lyr_Limitaadministrativ_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'DATA_VALID': 'no label', 'DENUMIRE': 'no label', 'DESCRIERE': 'no label', 'ID_LIMITA_': 'no label', 'ID_LIMITA1': 'no label', 'ID_PACHET_': 'no label', 'IDENTIFICA': 'no label', 'NIVEL': 'no label', 'STARE_LEGA': 'no label', 'STARE_TEHN': 'no label', 'VALIDAT': 'no label', 'VERSIUNE': 'no label', 'COD_JUDET1': 'no label', 'COD_JUDET2': 'no label', 'CORECTIE_G': 'no label', 'DOCUMENT_A': 'no label', 'Contestat': 'no label', 'NIVEL_CARTO': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'Shape_Length': 'no label', });
lyr_LTNRogerius_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'inline label - visible with data', 'denumire': 'header label - visible with data', });
lyr_CartierRogerius_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'OBJECTID': 'no label', 'Nume': 'no label', 'Apartenent': 'no label', 'Nume_1': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'geom_type': 'no label', });
lyr_Densitatearbori_4.set('fieldLabels', {'buffer_id': 'no label', 'nr_arbori_in_buffer': 'no label', 'suprafata_buffer_m2': 'no label', 'densitate_arbori_per_km2': 'no label', });
lyr_Staietransportpublic_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nume': 'header label - visible with data', 'id_statie': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Staietransportpublic_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});