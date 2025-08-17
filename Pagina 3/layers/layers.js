ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2438570.183511, 5953535.147783, 2442898.204142, 5955780.900039]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LTNRogerius_1 = new ol.format.GeoJSON();
var features_LTNRogerius_1 = format_LTNRogerius_1.readFeatures(json_LTNRogerius_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LTNRogerius_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LTNRogerius_1.addFeatures(features_LTNRogerius_1);
var lyr_LTNRogerius_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LTNRogerius_1, 
                style: style_LTNRogerius_1,
                popuplayertitle: 'LTN Rogerius',
                interactive: false,
                title: '<img src="styles/legend/LTNRogerius_1.png" /> LTN Rogerius'
            });
var format_CartierRogerius_2 = new ol.format.GeoJSON();
var features_CartierRogerius_2 = format_CartierRogerius_2.readFeatures(json_CartierRogerius_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartierRogerius_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartierRogerius_2.addFeatures(features_CartierRogerius_2);
var lyr_CartierRogerius_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartierRogerius_2, 
                style: style_CartierRogerius_2,
                popuplayertitle: 'Cartier Rogerius',
                interactive: false,
                title: '<img src="styles/legend/CartierRogerius_2.png" /> Cartier Rogerius'
            });
var format_Sensdeintrare_3 = new ol.format.GeoJSON();
var features_Sensdeintrare_3 = format_Sensdeintrare_3.readFeatures(json_Sensdeintrare_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sensdeintrare_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sensdeintrare_3.addFeatures(features_Sensdeintrare_3);
var lyr_Sensdeintrare_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sensdeintrare_3, 
                style: style_Sensdeintrare_3,
                popuplayertitle: 'Sens de intrare ',
                interactive: false,
                title: '<img src="styles/legend/Sensdeintrare_3.png" /> Sens de intrare '
            });
var format_Sensdeieire_4 = new ol.format.GeoJSON();
var features_Sensdeieire_4 = format_Sensdeieire_4.readFeatures(json_Sensdeieire_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sensdeieire_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sensdeieire_4.addFeatures(features_Sensdeieire_4);
var lyr_Sensdeieire_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sensdeieire_4, 
                style: style_Sensdeieire_4,
                popuplayertitle: 'Sens de ieșire',
                interactive: false,
                title: '<img src="styles/legend/Sensdeieire_4.png" /> Sens de ieșire'
            });
var format_Filtrumodal_5 = new ol.format.GeoJSON();
var features_Filtrumodal_5 = format_Filtrumodal_5.readFeatures(json_Filtrumodal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Filtrumodal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Filtrumodal_5.addFeatures(features_Filtrumodal_5);
var lyr_Filtrumodal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Filtrumodal_5, 
                style: style_Filtrumodal_5,
                popuplayertitle: 'Filtru modal',
                interactive: false,
                title: '<img src="styles/legend/Filtrumodal_5.png" /> Filtru modal'
            });
var group_InfrastructururbanO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Infrastructură urbană O'});

lyr_OpenStreetMap_0.setVisible(true);lyr_LTNRogerius_1.setVisible(true);lyr_CartierRogerius_2.setVisible(true);lyr_Sensdeintrare_3.setVisible(true);lyr_Sensdeieire_4.setVisible(true);lyr_Filtrumodal_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LTNRogerius_1,lyr_CartierRogerius_2,lyr_Sensdeintrare_3,lyr_Sensdeieire_4,lyr_Filtrumodal_5];
lyr_LTNRogerius_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', });
lyr_CartierRogerius_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'OBJECTID': 'OBJECTID', 'Nume': 'Nume', 'Apartenent': 'Apartenent', 'Nume_1': 'Nume_1', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'geom_type': 'geom_type', });
lyr_Sensdeintrare_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'vertex_pos': 'vertex_pos', 'vertex_index': 'vertex_index', 'vertex_part': 'vertex_part', 'vertex_part_index': 'vertex_part_index', 'distance': 'distance', 'angle': 'angle', });
lyr_Sensdeieire_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'vertex_pos': 'vertex_pos', 'vertex_index': 'vertex_index', 'vertex_part': 'vertex_part', 'vertex_part_index': 'vertex_part_index', 'distance': 'distance', 'angle': 'angle', });
lyr_Filtrumodal_5.set('fieldAliases', {'id': 'id', });
lyr_LTNRogerius_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', });
lyr_CartierRogerius_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'OBJECTID': 'TextEdit', 'Nume': 'TextEdit', 'Apartenent': 'TextEdit', 'Nume_1': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'geom_type': 'TextEdit', });
lyr_Sensdeintrare_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'vertex_pos': 'Range', 'vertex_index': 'Range', 'vertex_part': 'Range', 'vertex_part_index': 'Range', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_Sensdeieire_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'vertex_pos': 'Range', 'vertex_index': 'Range', 'vertex_part': 'Range', 'vertex_part_index': 'Range', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_Filtrumodal_5.set('fieldImages', {'id': 'TextEdit', });
lyr_LTNRogerius_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'inline label - visible with data', 'denumire': 'header label - visible with data', });
lyr_CartierRogerius_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'OBJECTID': 'no label', 'Nume': 'no label', 'Apartenent': 'no label', 'Nume_1': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'geom_type': 'no label', });
lyr_Sensdeintrare_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'vertex_pos': 'no label', 'vertex_index': 'no label', 'vertex_part': 'no label', 'vertex_part_index': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_Sensdeieire_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'vertex_pos': 'no label', 'vertex_index': 'no label', 'vertex_part': 'no label', 'vertex_part_index': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_Filtrumodal_5.set('fieldLabels', {'id': 'no label', });
lyr_Filtrumodal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});