// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 43.60665854180271, lng: -116.28668513079587 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
  