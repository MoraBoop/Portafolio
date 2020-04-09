function initMap() {
    let coordenada = {lat: -12.065957, lng: -77.037077};
    let map = new google.maps.Map(document.getElementById('map'), {
        center: coordenada,
        zoom: 15,
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']        
    });

    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: coordenada, 
        map: map,
        animation:google.maps.Animation.BOUNCE
    });

    
}