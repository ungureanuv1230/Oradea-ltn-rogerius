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
var format_Arbori_3 = new ol.format.GeoJSON();
var features_Arbori_3 = format_Arbori_3.readFeatures(json_Arbori_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbori_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbori_3.addFeatures(features_Arbori_3);
var lyr_Arbori_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbori_3, 
                style: style_Arbori_3,
                popuplayertitle: 'Arbori',
                interactive: true,
                title: '<img src="styles/legend/Arbori_3.png" /> Arbori'
            });
var format_Parc_4 = new ol.format.GeoJSON();
var features_Parc_4 = format_Parc_4.readFeatures(json_Parc_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parc_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parc_4.addFeatures(features_Parc_4);
var lyr_Parc_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parc_4, 
                style: style_Parc_4,
                popuplayertitle: 'Parc',
                interactive: true,
                title: '<img src="styles/legend/Parc_4.png" /> Parc'
            });
var group_Spaiiverzi = new ol.layer.Group({
                                layers: [lyr_Arbori_3,lyr_Parc_4,],
                                fold: 'open',
                                title: 'Spații verzi'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Limitaadministrativ_1.setVisible(true);lyr_Cartiere_2.setVisible(true);lyr_Arbori_3.setVisible(true);lyr_Parc_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limitaadministrativ_1,lyr_Cartiere_2,group_Spaiiverzi];
lyr_Limitaadministrativ_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'DATA_VALID': 'DATA_VALID', 'DENUMIRE': 'DENUMIRE', 'DESCRIERE': 'DESCRIERE', 'ID_LIMITA_': 'ID_LIMITA_', 'ID_LIMITA1': 'ID_LIMITA1', 'ID_PACHET_': 'ID_PACHET_', 'IDENTIFICA': 'IDENTIFICA', 'NIVEL': 'NIVEL', 'STARE_LEGA': 'STARE_LEGA', 'STARE_TEHN': 'STARE_TEHN', 'VALIDAT': 'VALIDAT', 'VERSIUNE': 'VERSIUNE', 'COD_JUDET1': 'COD_JUDET1', 'COD_JUDET2': 'COD_JUDET2', 'CORECTIE_G': 'CORECTIE_G', 'DOCUMENT_A': 'DOCUMENT_A', 'Contestat': 'Tronson_Litigiu', 'NIVEL_CARTO': 'NIVEL_CARTO', 'RuleID': 'RuleID', 'Override': 'Override', 'Shape_Length': 'Shape_Length', });
lyr_Cartiere_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nume': 'Nume', 'Apartenent': 'Apartenent', 'Nume_1': 'Nume_1', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'geom_type': 'geom_type', });
lyr_Arbori_3.set('fieldAliases', {'id': 'id', 'N_Specia': 'N_Specia', 'Inaltime [m]': 'Inaltime [m]', 'Coronament [m]': 'Coronament [m]', 'Diametru [cm]': 'Diametru [cm]', 'N_SpeciaScurta': 'N_SpeciaScurta', 'N_Viabilitate': 'N_Viabilitate', 'N_Varsta': 'N_Varsta', 'cartier': 'cartier', });
lyr_Parc_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Limitaadministrativ_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'DATA_VALID': 'DateTime', 'DENUMIRE': 'TextEdit', 'DESCRIERE': 'TextEdit', 'ID_LIMITA_': 'TextEdit', 'ID_LIMITA1': 'TextEdit', 'ID_PACHET_': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'NIVEL': 'TextEdit', 'STARE_LEGA': 'TextEdit', 'STARE_TEHN': 'TextEdit', 'VALIDAT': 'TextEdit', 'VERSIUNE': 'TextEdit', 'COD_JUDET1': 'TextEdit', 'COD_JUDET2': 'TextEdit', 'CORECTIE_G': 'TextEdit', 'DOCUMENT_A': 'TextEdit', 'Contestat': 'Range', 'NIVEL_CARTO': 'TextEdit', 'RuleID': 'ValueMap', 'Override': 'Binary', 'Shape_Length': 'TextEdit', });
lyr_Cartiere_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Nume': 'TextEdit', 'Apartenent': 'TextEdit', 'Nume_1': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'geom_type': 'TextEdit', });
lyr_Arbori_3.set('fieldImages', {'id': 'Range', 'N_Specia': 'TextEdit', 'Inaltime [m]': 'Range', 'Coronament [m]': 'Range', 'Diametru [cm]': 'Range', 'N_SpeciaScurta': 'TextEdit', 'N_Viabilitate': 'TextEdit', 'N_Varsta': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Parc_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Limitaadministrativ_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'DATA_VALID': 'no label', 'DENUMIRE': 'no label', 'DESCRIERE': 'no label', 'ID_LIMITA_': 'no label', 'ID_LIMITA1': 'no label', 'ID_PACHET_': 'no label', 'IDENTIFICA': 'no label', 'NIVEL': 'no label', 'STARE_LEGA': 'no label', 'STARE_TEHN': 'no label', 'VALIDAT': 'no label', 'VERSIUNE': 'no label', 'COD_JUDET1': 'no label', 'COD_JUDET2': 'no label', 'CORECTIE_G': 'no label', 'DOCUMENT_A': 'no label', 'Contestat': 'no label', 'NIVEL_CARTO': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'Shape_Length': 'no label', });
lyr_Cartiere_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Nume': 'header label - visible with data', 'Apartenent': 'no label', 'Nume_1': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'inline label - visible with data', 'Shape__Len': 'no label', 'geom_type': 'no label', });
lyr_Arbori_3.set('fieldLabels', {'id': 'hidden field', 'N_Specia': 'header label - visible with data', 'Inaltime [m]': 'inline label - visible with data', 'Coronament [m]': 'inline label - visible with data', 'Diametru [cm]': 'inline label - visible with data', 'N_SpeciaScurta': 'inline label - visible with data', 'N_Viabilitate': 'inline label - visible with data', 'N_Varsta': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Parc_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Parc_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});