
if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
} else {
      x.innerHTML = "Geolocation is not supported by this browser.";
}

function showPosition(position){
    const pollutionAPI=`https://api.openweathermap.org/data/2.5/air_pollution?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b19002ca79de20699da0e60fce0c7ba6`

fetch(pollutionAPI)
    .then(response=>response.json())
    .then(data=>{
    console.log(data)   
    document.getElementById("CO").innerText=data.list[0].components.co
    document.getElementById("NO").innerText=data.list[0].components.no
    document.getElementById("NO2").innerText=data.list[0].components.no2
    })
}

