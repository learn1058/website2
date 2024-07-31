// Initialize and add the map
let map;

async function initMap() {
  // Define an array of locations with latitude, longitude, and title
  const locations = [
    { lat: 2.30475, lng: 102.3169, title: "POS A KAMPUS INDUK" },
    { lat: 2.30505, lng: 102.31645, title: "Sydney" },
    { lat: 2.30807, lng: 102.31889, title: "San Francisco" }
  ];

  // Request needed libraries
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create the map, centered on the first location
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: locations[0],
    mapId: "DEMO_MAP_ID",
  });

  // Add markers for each location
  locations.forEach(location => {
    new AdvancedMarkerElement({
      map: map,
      position: location,
      title: location.title,
    });
  });
}

// Make sure initMap is available globally
window.initMap = initMap;