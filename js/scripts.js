// Inicializar el mapa
function initMap() {
    // Coordenadas del mapa
    var latLng = { lat: 14.083700527739046, lng: -87.18496545392848 };
  
    // Opciones de configuración del mapa
    var mapOptions = {
      center: latLng,
      zoom: 15
    };
  
    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Agregar un marcador en las coordenadas especificadas
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: 'Ubicación'
    });
  }
  