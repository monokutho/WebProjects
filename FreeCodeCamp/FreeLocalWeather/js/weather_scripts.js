var h = window.innerHeight;
var w = window.innerWidth;
var weather_box = document.getElementById('weather_box');

function resize() {
    weather_box.style.width = w / 2 + "px";
    weather_box.style.top = h / 4 + "px";
}

function getWeather () {
    var lat = 184;
    var lon = 34;
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=07a434a9195e70d86929d3984b5b8bd5", false);
    request.send();
    console.log(request.status);
    console.log(request.responseText);
}