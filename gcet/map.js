function map(){
    let mapOptions = {
        center:[28.63, 77.43484],
        zoom:20
    }
    
    
    let map = new L.map('map' , mapOptions);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    let marker, circle, zoomed;
    
    navigator.geolocation.watchPosition(success, error);
    
    function success(pos) {
    
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const accuracy = pos.coords.accuracy;
    
        if (marker) {
            map.removeLayer(marker);
            map.removeLayer(circle);
        }
        // Removes any existing marker and circule (new ones about to be set)
    
        marker = L.marker([lat, lng]).addTo(map);
        circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
        // Adds marker to the map and a circle for accuracy
    
        if (!zoomed) {
            zoomed = map.fitBounds(circle.getBounds()); 
        }
        // Set zoom to boundaries of accuracy circle
    
        map.setView([lat, lng]);
        // Set map focus to current user position
    
    }
    
    function error(err) {
    
        if (err.code === 1) {
            alert("Please allow geolocation access");
        } else {
            alert("Cannot get current location");
        }
    
    }
    // let customIcon = {
    //     iconUrl: "pointer.png",
    //     iconSize: [35,35]
    // }
    
    // let myIcon=L.icon(customIcon);
    
    // let iconOptions = {
    //     title: "company name",
    //     draggable: true,
    //     icon: myIcon
    // }
    
    
    
    let locations = [
        {
            "id": 1,
            "lat": 28.62653,
            "long":77.43488,
            "src": 'bill1.jpg',
            "title": "Banner",
            "url":"#"
        },
        {"id": 1,
        "lat": 28.6298,
        "long": 77.43488,
         "src": 'bill2.png',
        "title": "Banner",
        "url":"#"
    
        },
        {"id": 1,
        "lat": 28.6302,
        "long":77.43434,
         "src": 'bill3.jpg',
        "title": "Banner",
        "url":"#"
    
        },
        {"id": 1,
        "lat": 28.63058, 
        "long":77.43449,
         "src": 'billboard.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63069,
        "long": 77.43517,
          "src": 'bill1.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63036, 
        "long":77.43546,
         "src": 'bill2.png',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.62989, 
        "long":77.4353,
        "src": 'bill3.jpg',
        "title": "banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.62978, 
        "long":77.43461,
        "src": 'billboard.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.62943, 
        "long":77.43468,
         "src": 'bill1.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.62918, 
        "long":77.43468,
          "src": 'bill2.png',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.62865, 
        "long":77.43468,
        "src": 'bill3.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.62659, 
        "long":77.43467,
         "src": 'billboard.jpg',
        "title": "Banner",
        "url":"#"},
        {
            "id": 2,
            "lat": 28.62704, 
            "long": 77.43489,
             "src": 'bill1.jpg',
            "title": "Banner",
            "url":"#"
        },
        {
            "id": 3,
            "lat":28.62781, 
            "long": 77.4349,
             "src": 'bill2.png',
            "title": "Banner",
            "url":"#"
        },
        {
            "id": 4,
            "lat": 28.62876, 
            "long": 77.4349,
             "src": 'bill3.jpg',
             "title":"Banner"
        },
        {
            "id": 1,
            "lat": 28.63371, 
            "long":77.44351,
            "src": 'bill1.jpg',
            "title": "Banner",
            "url":"#"
        },
        {"id": 1,
        "lat": 28.63503, 
        "long":  77.44421,
         "src": 'bill2.png',
        "title": "Banner",
        "url":"#"
    
        },
        {"id": 1,
        "lat": 28.63443, 
        "long":77.44393,
         "src": 'bill3.jpg',
        "title": "Banner",
        "url":"#"
    
        },
        {"id": 1,
        "lat":28.6329, 
        "long":77.44312,
         "src": 'billboard.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63531, 
        "long": 77.4437,
          "src": 'bill1.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63623,
        "long": 77.44472,
         "src": 'bill2.png',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.636, 
        "long":77.44621 ,
        "src": 'bill3.jpg',
        "title": "banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.62978, 
        "long":77.43461,
        "src": 'billboard.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63581, 
        "long":77.44721,
         "src": 'bill1.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63563, 
        "long":77.4485,
          "src": 'bill2.png',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63414, 
        "long":77.44848,
        "src": 'bill3.jpg',
        "title": "Banner",
        "url":"#"},
        {"id": 1,
        "lat": 28.63394, 
        "long":77.44992,
         "src": 'billboard.jpg',
        "title": "Banner",
        "url":"#"},
        {
            "id": 2,
            "lat": 28.63385, 
            "long": 77.45029,
             "src": 'bill1.jpg',
            "title": "Banner",
            "url":"#"
        },
        {
            "id": 3,
            "lat":28.63251, 
            "long": 77.44306,
             "src": 'bill2.png',
            "title": "Banner",
            "url":"#"
        },
        {
            "id": 4,
            "lat": 28.63405, 
            "long":77.44376 ,
             "src": 'bill3.jpg',
             "title":"Banner"
        }
    ]
    
    let popupOption = {
        "closeButton":false
    }
    
    
    locations.forEach(element => {
        new L.Marker([element.lat,element.long]).addTo(map)
        .on("mouseover",event =>{
            event.target.bindPopup('<div class="card"><img src="'+element.src+'" width="80" height="80" alt="'+element.title+'">   <h3>'+element.title+'</h3></div>',popupOption).openPopup();
        })
        .on("mouseout", event => {
            event.target.closePopup();
        })
        .on("click" , () => {
            window.open(element.url);
        })
    });
}

// setInterval(map,100);
map();