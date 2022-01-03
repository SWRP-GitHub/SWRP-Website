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
    minZoom: -3,
    maxZoom: 2,
    layers: [bg, br, hl, p1, p2]
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

map.setZoom(1);