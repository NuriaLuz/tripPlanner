import mapboxgl from "mapbox-gl"
import buildMarker from "./marker"

mapboxgl.accessToken ="pk.eyJ1IjoicmlhbHV6IiwiYSI6ImNrZXlpZ213MjB5ejUyeXA5aHkydXA3Z2cifQ.GvwhQbb9l58Mj2cHNglbEg"

const fullstackCoords = [-74.009, 40.705];

const map = new mapboxgl.Map({
    container: 'map',
    center: fullstackCoords,
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const marker = buildMarker("activities", fullstackCoords)
marker.addTo(map)

