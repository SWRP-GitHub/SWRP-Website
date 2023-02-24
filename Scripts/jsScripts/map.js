//CREATE MAP BOUNDS
var bounds = [
    [0, 0],
    [2160, 3840],
];
//MAP IMAGE
var bg = L.imageOverlay(
    "Maps/Region_Twelve_Final.png",
    bounds
);

//OLD LAYER DATA FROM 3DOOT
// var br = L.imageOverlay(
//     "Maps/The_Galaxy_Map_BR_5400px_v2.png",
//     bounds
// );
// var hl = L.imageOverlay(
//     "Maps/The Galaxy Map HL 5400px.png",
//     bounds
// );
// var p1 = L.imageOverlay(
//     "Maps/The Galaxy Map P1 5400px.png",
//     bounds
// );
// var p2 = L.imageOverlay(
//     "Maps/The Galaxy Map P2 5400px.png",
//     bounds
// );

//MAP LAYER DEFINITION
var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 2,
    layers: [bg]
    // layers: [bg, br, hl, p1, p2]
});

var baseMaps = {
    Background: bg
};

var overlayMaps = {
    // Faction_Borders: br,
    // Hyperlanes: hl,
    // Planets_1: p1,
    // planets_2: p2
};


//ICONS FOR MAP AND FACTIONS
//MAP ICON
var mapIcon = L.icon({
    iconUrl: `Maps/mapIcon.png`,
    iconSize: [25, 25]
})
//SITH ICON
var sithIcon = L.icon({
    iconUrl: `Maps/sith.png`,
    iconSize: [25, 25]
})
//JEDU ICON
var jediIcon = L.icon({
    iconUrl: `Maps/jedi.png`,
    iconSize: [25, 25]
})
//IMP ICON
var imperialIcon = L.icon({
    iconUrl: `Maps/empire.png`,
    iconSize: [25, 25]
})
//N.R. Icon
var newRepublicIcon = L.icon({
    iconUrl: `Maps/newRepublic.svg`,
    iconSize: [25, 25]
})

//LORE POPUPS
//jedu Pin
var jeduLorePin = L.marker([1886, 1066], { icon: jediIcon }).addTo(map);
jeduLorePin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/jeduMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();
//sith Pin
var sithLorePin = L.marker([1886, 1166], { icon: sithIcon }).addTo(map);
sithLorePin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/sith.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();
//imp Pin
var impLorePin = L.marker([1886, 1266], { icon: imperialIcon }).addTo(map);
impLorePin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/impMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();
//N.R. Pin
var repubLorePin = L.marker([1886, 1366], { icon: newRepublicIcon }).addTo(map);
repubLorePin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/newPubMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//SYSTEM POPUPS AND HTML LINKS
//MARJORA
var marjoraMapPin = L.marker([1143.5, 778.5], { icon: mapIcon }).addTo(map);
marjoraMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/marjoraMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//IPEROS
var IperosMapPin = L.marker([1147.75, 1569.25], { icon: mapIcon }).addTo(map);
IperosMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/iperosMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//VAEDAS
var vaedasMapPin = L.marker([1287.5, 2307], { icon: mapIcon }).addTo(map);
vaedasMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/vaedasMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//FIVE POINTS
var fivePointsMapPin = L.marker([941, 2291], { icon: mapIcon }).addTo(map);
fivePointsMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/fivePointsMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//ACHERIOS
var acheriosMapPin = L.marker([335, 2391], { icon: mapIcon }).addTo(map);
acheriosMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/acheriosMain.html" width="470" height="380">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//CARETHOR
var carethorMapPin = L.marker([659, 2630], { icon: mapIcon }).addTo(map);
carethorMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/carethorMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//TALOU
var talouMapPin = L.marker([411, 3089], { icon: mapIcon }).addTo(map);
talouMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/talouMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//TRESSIA
var tressiaMapPin = L.marker([1001, 2888], { icon: mapIcon }).addTo(map);
tressiaMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/tressiaMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//ANDALU
var andaluMapPin = L.marker([1205, 3048], { icon: mapIcon }).addTo(map);
andaluMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/andaluMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();

//KIIDA
var kiidaMapPin = L.marker([1337, 2970], { icon: mapIcon }).addTo(map);
kiidaMapPin.bindPopup(`<embed type="text/html" src="/Scripts/starSystemText/kiidaMain.html" width="470" height="700">`, { 'maxWidth': '500', 'className': 'custom' }).openPopup();
var popup = L.popup();


///////////////////////////////////////////
//FUNCTION FOR FINDING MAP COORDS
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);
///////////////////////////////////////////
L.control.layers(baseMaps, overlayMaps).addTo(map);

map.fitBounds(bounds);

map.setZoom(-1.5);
