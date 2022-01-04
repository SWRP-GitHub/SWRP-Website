var bounds = [
    [0, 0],
    [3333.33, 3333.33],
];

var bg = L.imageOverlay(
    "Maps/The Galaxy Map BG 5400px.png",
    bounds
);
var br = L.imageOverlay(
    "Maps/The Galaxy Map BR 5400px.png",
    bounds
);
var hl = L.imageOverlay(
    "Maps/The Galaxy Map HL 5400px.png",
    bounds
);
var p1 = L.imageOverlay(
    "Maps/The Galaxy Map P1 5400px.png",
    bounds
);
var p2 = L.imageOverlay(
    "Maps/The Galaxy Map P2 5400px.png",
    bounds
);

var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    layers: [bg, br, hl, p1, p2],
    preferCanvas: true,
    center: [1600,1692],
});

var baseMaps = {
    Background: bg
};

var overlayMaps = {
    Faction_Borders: br,
    Hyperlanes: hl,
    Planets_1: p1,
    planets_2: p2
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

map.fitBounds(bounds);
map.setZoom(-1);

//////
function mapCoords() {
    map.on('click', function(e){
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
      });
  }
mapCoords();