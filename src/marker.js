import { Marker } from "mapbox-gl";

const icons = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
}

const buildMarker = (type, coords) => {
    if (!icons.hasOwnProperty(type)) {
      type = "activities";
    }
    const markerEl = document.createElement("div");
    markerEl.style.backgroundSize = "contain";
    markerEl.style.width = "32px";
    markerEl.style.height = "37px";
    markerEl.style.backgroundImage = `url(${icons[type]})`;
    return new Marker(markerEl).setLngLat(coords);
  };
  
  export default buildMarker;