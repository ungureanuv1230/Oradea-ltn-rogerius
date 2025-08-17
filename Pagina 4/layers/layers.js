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
var format_Buffer500mnjurulstaiilor_4 = new ol.format.GeoJSON();
var features_Buffer500mnjurulstaiilor_4 = format_Buffer500mnjurulstaiilor_4.readFeatures(json_Buffer500mnjurulstaiilor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer500mnjurulstaiilor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer500mnjurulstaiilor_4.addFeatures(features_Buffer500mnjurulstaiilor_4);
var lyr_Buffer500mnjurulstaiilor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer500mnjurulstaiilor_4, 
                style: style_Buffer500mnjurulstaiilor_4,
                popuplayertitle: 'Buffer 500 m în jurul stațiilor',
                interactive: true,
                title: '<img src="styles/legend/Buffer500mnjurulstaiilor_4.png" /> Buffer 500 m în jurul stațiilor'
            });
var format_Buffer300mnjurulstaiilor_5 = new ol.format.GeoJSON();
var features_Buffer300mnjurulstaiilor_5 = format_Buffer300mnjurulstaiilor_5.readFeatures(json_Buffer300mnjurulstaiilor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer300mnjurulstaiilor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer300mnjurulstaiilor_5.addFeatures(features_Buffer300mnjurulstaiilor_5);
var lyr_Buffer300mnjurulstaiilor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer300mnjurulstaiilor_5, 
                style: style_Buffer300mnjurulstaiilor_5,
                popuplayertitle: 'Buffer 300 m în jurul stațiilor ',
                interactive: true,
                title: '<img src="styles/legend/Buffer300mnjurulstaiilor_5.png" /> Buffer 300 m în jurul stațiilor '
            });
var format_Supermarket_6 = new ol.format.GeoJSON();
var features_Supermarket_6 = format_Supermarket_6.readFeatures(json_Supermarket_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarket_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarket_6.addFeatures(features_Supermarket_6);
var lyr_Supermarket_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarket_6, 
                style: style_Supermarket_6,
                popuplayertitle: 'Supermarket ',
                interactive: true,
                title: '<img src="styles/legend/Supermarket_6.png" /> Supermarket '
            });
var format_Magazinmixt_7 = new ol.format.GeoJSON();
var features_Magazinmixt_7 = format_Magazinmixt_7.readFeatures(json_Magazinmixt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Magazinmixt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magazinmixt_7.addFeatures(features_Magazinmixt_7);
var lyr_Magazinmixt_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Magazinmixt_7, 
                style: style_Magazinmixt_7,
                popuplayertitle: 'Magazin mixt ',
                interactive: true,
                title: '<img src="styles/legend/Magazinmixt_7.png" /> Magazin mixt '
            });
var format_Restaurant_8 = new ol.format.GeoJSON();
var features_Restaurant_8 = format_Restaurant_8.readFeatures(json_Restaurant_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurant_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurant_8.addFeatures(features_Restaurant_8);
var lyr_Restaurant_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurant_8, 
                style: style_Restaurant_8,
                popuplayertitle: 'Restaurant ',
                interactive: true,
                title: '<img src="styles/legend/Restaurant_8.png" /> Restaurant '
            });
var format_Banc_9 = new ol.format.GeoJSON();
var features_Banc_9 = format_Banc_9.readFeatures(json_Banc_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banc_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banc_9.addFeatures(features_Banc_9);
var lyr_Banc_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banc_9, 
                style: style_Banc_9,
                popuplayertitle: 'Bancă ',
                interactive: true,
                title: '<img src="styles/legend/Banc_9.png" /> Bancă '
            });
var format_Parcare_10 = new ol.format.GeoJSON();
var features_Parcare_10 = format_Parcare_10.readFeatures(json_Parcare_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcare_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcare_10.addFeatures(features_Parcare_10);
var lyr_Parcare_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcare_10, 
                style: style_Parcare_10,
                popuplayertitle: 'Parcare ',
                interactive: false,
                title: '<img src="styles/legend/Parcare_10.png" /> Parcare '
            });
var format_Staietransportpublic_11 = new ol.format.GeoJSON();
var features_Staietransportpublic_11 = format_Staietransportpublic_11.readFeatures(json_Staietransportpublic_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Staietransportpublic_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Staietransportpublic_11.addFeatures(features_Staietransportpublic_11);
cluster_Staietransportpublic_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Staietransportpublic_11
});
var lyr_Staietransportpublic_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Staietransportpublic_11, 
                style: style_Staietransportpublic_11,
                popuplayertitle: 'Stație transport public',
                interactive: true,
                title: '<img src="styles/legend/Staietransportpublic_11.png" /> Stație transport public'
            });
var format_Universitate_12 = new ol.format.GeoJSON();
var features_Universitate_12 = format_Universitate_12.readFeatures(json_Universitate_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universitate_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universitate_12.addFeatures(features_Universitate_12);
var lyr_Universitate_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universitate_12, 
                style: style_Universitate_12,
                popuplayertitle: 'Universitate ',
                interactive: true,
                title: '<img src="styles/legend/Universitate_12.png" /> Universitate '
            });
var format_ScoalLiceu_13 = new ol.format.GeoJSON();
var features_ScoalLiceu_13 = format_ScoalLiceu_13.readFeatures(json_ScoalLiceu_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScoalLiceu_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScoalLiceu_13.addFeatures(features_ScoalLiceu_13);
var lyr_ScoalLiceu_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScoalLiceu_13, 
                style: style_ScoalLiceu_13,
                popuplayertitle: 'Scoală/Liceu ',
                interactive: true,
                title: '<img src="styles/legend/ScoalLiceu_13.png" /> Scoală/Liceu '
            });
var format_Grdini_14 = new ol.format.GeoJSON();
var features_Grdini_14 = format_Grdini_14.readFeatures(json_Grdini_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grdini_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grdini_14.addFeatures(features_Grdini_14);
var lyr_Grdini_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grdini_14, 
                style: style_Grdini_14,
                popuplayertitle: 'Grădiniță ',
                interactive: true,
                title: '<img src="styles/legend/Grdini_14.png" /> Grădiniță '
            });
var format_Farmacie_15 = new ol.format.GeoJSON();
var features_Farmacie_15 = format_Farmacie_15.readFeatures(json_Farmacie_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Farmacie_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farmacie_15.addFeatures(features_Farmacie_15);
var lyr_Farmacie_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Farmacie_15, 
                style: style_Farmacie_15,
                popuplayertitle: 'Farmacie ',
                interactive: true,
                title: '<img src="styles/legend/Farmacie_15.png" /> Farmacie '
            });
var format_Spital_16 = new ol.format.GeoJSON();
var features_Spital_16 = format_Spital_16.readFeatures(json_Spital_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spital_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spital_16.addFeatures(features_Spital_16);
var lyr_Spital_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spital_16, 
                style: style_Spital_16,
                popuplayertitle: 'Spital ',
                interactive: true,
                title: '<img src="styles/legend/Spital_16.png" /> Spital '
            });
var group_Educaieisntate = new ol.layer.Group({
                                layers: [lyr_Universitate_12,lyr_ScoalLiceu_13,lyr_Grdini_14,lyr_Farmacie_15,lyr_Spital_16,],
                                fold: 'open',
                                title: 'Educație și sănătate '});
var group_Infrastructururban = new ol.layer.Group({
                                layers: [lyr_Parcare_10,lyr_Staietransportpublic_11,],
                                fold: 'open',
                                title: 'Infrastructură urbană'});
var group_Comeriservicii = new ol.layer.Group({
                                layers: [lyr_Supermarket_6,lyr_Magazinmixt_7,lyr_Restaurant_8,lyr_Banc_9,],
                                fold: 'open',
                                title: 'Comerț și servicii'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Limitaadministrativ_1.setVisible(true);lyr_LTNRogerius_2.setVisible(true);lyr_CartierRogerius_3.setVisible(true);lyr_Buffer500mnjurulstaiilor_4.setVisible(true);lyr_Buffer300mnjurulstaiilor_5.setVisible(true);lyr_Supermarket_6.setVisible(true);lyr_Magazinmixt_7.setVisible(true);lyr_Restaurant_8.setVisible(true);lyr_Banc_9.setVisible(true);lyr_Parcare_10.setVisible(true);lyr_Staietransportpublic_11.setVisible(true);lyr_Universitate_12.setVisible(true);lyr_ScoalLiceu_13.setVisible(true);lyr_Grdini_14.setVisible(true);lyr_Farmacie_15.setVisible(true);lyr_Spital_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limitaadministrativ_1,lyr_LTNRogerius_2,lyr_CartierRogerius_3,lyr_Buffer500mnjurulstaiilor_4,lyr_Buffer300mnjurulstaiilor_5,group_Comeriservicii,group_Infrastructururban,group_Educaieisntate];
lyr_Limitaadministrativ_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'DATA_VALID': 'DATA_VALID', 'DENUMIRE': 'DENUMIRE', 'DESCRIERE': 'DESCRIERE', 'ID_LIMITA_': 'ID_LIMITA_', 'ID_LIMITA1': 'ID_LIMITA1', 'ID_PACHET_': 'ID_PACHET_', 'IDENTIFICA': 'IDENTIFICA', 'NIVEL': 'NIVEL', 'STARE_LEGA': 'STARE_LEGA', 'STARE_TEHN': 'STARE_TEHN', 'VALIDAT': 'VALIDAT', 'VERSIUNE': 'VERSIUNE', 'COD_JUDET1': 'COD_JUDET1', 'COD_JUDET2': 'COD_JUDET2', 'CORECTIE_G': 'CORECTIE_G', 'DOCUMENT_A': 'DOCUMENT_A', 'Contestat': 'Tronson_Litigiu', 'NIVEL_CARTO': 'NIVEL_CARTO', 'RuleID': 'RuleID', 'Override': 'Override', 'Shape_Length': 'Shape_Length', });
lyr_LTNRogerius_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', });
lyr_CartierRogerius_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'OBJECTID': 'OBJECTID', 'Nume': 'Nume', 'Apartenent': 'Apartenent', 'Nume_1': 'Nume_1', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'geom_type': 'geom_type', });
lyr_Buffer500mnjurulstaiilor_4.set('fieldAliases', {});
lyr_Buffer300mnjurulstaiilor_5.set('fieldAliases', {});
lyr_Supermarket_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Magazinmixt_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Restaurant_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Banc_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Parcare_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'fclass': 'fclass', 'cartier': 'cartier', });
lyr_Staietransportpublic_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nume': 'nume', 'id_statie': 'id_statie', 'cartier': 'cartier', });
lyr_Universitate_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_ScoalLiceu_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Grdini_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Farmacie_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Spital_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categorie': 'categorie', 'denumire': 'denumire', 'cartier': 'cartier', });
lyr_Limitaadministrativ_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'DATA_VALID': 'DateTime', 'DENUMIRE': 'TextEdit', 'DESCRIERE': 'TextEdit', 'ID_LIMITA_': 'TextEdit', 'ID_LIMITA1': 'TextEdit', 'ID_PACHET_': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'NIVEL': 'TextEdit', 'STARE_LEGA': 'TextEdit', 'STARE_TEHN': 'TextEdit', 'VALIDAT': 'TextEdit', 'VERSIUNE': 'TextEdit', 'COD_JUDET1': 'TextEdit', 'COD_JUDET2': 'TextEdit', 'CORECTIE_G': 'TextEdit', 'DOCUMENT_A': 'TextEdit', 'Contestat': 'Range', 'NIVEL_CARTO': 'TextEdit', 'RuleID': 'ValueMap', 'Override': 'Binary', 'Shape_Length': 'TextEdit', });
lyr_LTNRogerius_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', });
lyr_CartierRogerius_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'OBJECTID': 'TextEdit', 'Nume': 'TextEdit', 'Apartenent': 'TextEdit', 'Nume_1': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'geom_type': 'TextEdit', });
lyr_Buffer500mnjurulstaiilor_4.set('fieldImages', {});
lyr_Buffer300mnjurulstaiilor_5.set('fieldImages', {});
lyr_Supermarket_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Magazinmixt_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Restaurant_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Banc_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Parcare_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'fclass': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Staietransportpublic_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nume': 'TextEdit', 'id_statie': 'Range', 'cartier': 'TextEdit', });
lyr_Universitate_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_ScoalLiceu_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Grdini_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Farmacie_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Spital_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categorie': 'TextEdit', 'denumire': 'TextEdit', 'cartier': 'TextEdit', });
lyr_Limitaadministrativ_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'DATA_VALID': 'no label', 'DENUMIRE': 'no label', 'DESCRIERE': 'no label', 'ID_LIMITA_': 'no label', 'ID_LIMITA1': 'no label', 'ID_PACHET_': 'no label', 'IDENTIFICA': 'no label', 'NIVEL': 'no label', 'STARE_LEGA': 'no label', 'STARE_TEHN': 'no label', 'VALIDAT': 'no label', 'VERSIUNE': 'no label', 'COD_JUDET1': 'no label', 'COD_JUDET2': 'no label', 'CORECTIE_G': 'no label', 'DOCUMENT_A': 'no label', 'Contestat': 'no label', 'NIVEL_CARTO': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'Shape_Length': 'no label', });
lyr_LTNRogerius_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'inline label - visible with data', 'denumire': 'header label - visible with data', });
lyr_CartierRogerius_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'OBJECTID': 'no label', 'Nume': 'no label', 'Apartenent': 'no label', 'Nume_1': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'geom_type': 'no label', });
lyr_Buffer500mnjurulstaiilor_4.set('fieldLabels', {});
lyr_Buffer300mnjurulstaiilor_5.set('fieldLabels', {});
lyr_Supermarket_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Magazinmixt_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Restaurant_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Banc_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Parcare_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'fclass': 'no label', 'cartier': 'no label', });
lyr_Staietransportpublic_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nume': 'header label - visible with data', 'id_statie': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Universitate_12.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_ScoalLiceu_13.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Grdini_14.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Farmacie_15.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Spital_16.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'categorie': 'header label - visible with data', 'denumire': 'inline label - visible with data', 'cartier': 'inline label - visible with data', });
lyr_Spital_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});