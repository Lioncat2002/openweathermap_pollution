function initialize() {
    var earth = new WE.map('earth_div');
    WE.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',{
      attribution: '© OpenStreetMap contributors'
    }).addTo(earth);
    
    function onMapClick(e) {
        var co,no,no2;
        const pollutionAPI=`https://api.openweathermap.org/data/2.5/air_pollution?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=b19002ca79de20699da0e60fce0c7ba6`

        fetch(pollutionAPI)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
          co=data.list[0].components.co
          no=data.list[0].components.no
          no2=data.list[0].components.no2
          var marker = WE.marker(e.latlng).addTo(earth);

        marker.bindPopup(`CO: ${co} <br>NO: ${no} <br>NO2: ${no2}`, {maxWidth: 150, closeButton: true}).openPopup();
    
        })


        

     }
    earth.on('dblclick',onMapClick)
    }

if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
} else {
      alert("Geolocation is not supported by this browser.");
}

function showPosition(position){
    
}

