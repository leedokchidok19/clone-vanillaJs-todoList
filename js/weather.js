const weather = document.querySelector('.weather');

const API_KEY = null;
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response) {
            return response.json();
            })
        .then(function(json){
            //console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
            });
}//getWeather

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}//saveCoords

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //== latitude : latitude,
        longitude //== longitude : longitude
    }

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}//handleGeoSucces

function handleGeoError() {
    //console.log('Cant access geo location');
    alert('Cant access geo location');
}

//location API
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}//askForCoords

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}//loadCoords

function init() {
    if (API_KEY == null) {
        return alert('API KEY 보호 문제로 날씨 정보는 제공하지 않고 있습니다.');
    }

    loadCoords();
}//init

init();