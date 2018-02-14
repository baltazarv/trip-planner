const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiYmFsdGF6YXJ2IiwiYSI6ImNqZG1kaGFnOTBrNWQyeG80cHB0a3d1MWoifQ.GjZciZaKkotHccRIl_7QOg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const schoolMarker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
schoolMarker.addTo(map);

const restoMarker = buildMarker("restaurant", [-73.998223, 40.722604]);
restoMarker.addTo(map);

const hotelMarker = buildMarker("hotel", [-74.0078522, 40.7244117]);
hotelMarker.addTo(map);
