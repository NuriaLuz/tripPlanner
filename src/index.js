import mapboxgl from "mapbox-gl"

mapboxgl.accessToken ="pk.eyJ1IjoicmlhbHV6IiwiYSI6ImNrZXlpZ213MjB5ejUyeXA5aHkydXA3Z2cifQ.GvwhQbb9l58Mj2cHNglbEg"

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705], // FullStack Location
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

