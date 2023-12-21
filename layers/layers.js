var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sarana_Perkantoran_1 = new ol.format.GeoJSON();
var features_Sarana_Perkantoran_1 = format_Sarana_Perkantoran_1.readFeatures(json_Sarana_Perkantoran_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Perkantoran_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Perkantoran_1.addFeatures(features_Sarana_Perkantoran_1);
var lyr_Sarana_Perkantoran_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sarana_Perkantoran_1, 
                style: style_Sarana_Perkantoran_1,
                interactive: true,
                title: '<img src="styles/legend/Sarana_Perkantoran_1.png" /> Sarana_Perkantoran'
            });
var format_BatasKecamatan_2 = new ol.format.GeoJSON();
var features_BatasKecamatan_2 = format_BatasKecamatan_2.readFeatures(json_BatasKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_2.addFeatures(features_BatasKecamatan_2);
var lyr_BatasKecamatan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_2, 
                style: style_BatasKecamatan_2,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_2.png" /> Batas Kecamatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sarana_Perkantoran_1.setVisible(true);lyr_BatasKecamatan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sarana_Perkantoran_1,lyr_BatasKecamatan_2];
lyr_Sarana_Perkantoran_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'Base': 'Base', 'Snippet': 'Snippet', 'LabelID': 'LabelID', 'Sarana': 'Sarana', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', });
lyr_BatasKecamatan_2.set('fieldAliases', {'FID_Plantu': 'FID_Plantu', 'KECAMATAN': 'KECAMATAN', });
lyr_Sarana_Perkantoran_1.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'Base': '', 'Snippet': '', 'LabelID': '', 'Sarana': '', 'SymbolID': '', 'AltMode': '', 'PopupInfo': '', 'HasLabel': '', });
lyr_BatasKecamatan_2.set('fieldImages', {'FID_Plantu': '', 'KECAMATAN': '', });
lyr_Sarana_Perkantoran_1.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'LabelID': 'no label', 'Sarana': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', });
lyr_BatasKecamatan_2.set('fieldLabels', {'FID_Plantu': 'no label', 'KECAMATAN': 'no label', });
lyr_BatasKecamatan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});