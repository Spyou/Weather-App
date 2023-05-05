const apiKey = "7f0310ae7c31380bd1052eb199cd4888";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
      const { name } = data;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(temp) + "°c";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";

      switch(data.weather[0].main){
        case "clouds":
          weatherIcon.src = "./images/cloudy.png";
          break;
        case "Clear":
          weatherIcon.src = "./images/sunny.png";
          break;
        case "Rain":
          weatherIcon.src = "./images/rain.png";
          break;
        case "Snow":
          weatherIcon.src = "./images/snowy.png";
          break;
        case "Smoke":
          weatherIcon.src = "./images/cloudy.png";
          break;
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }



}

searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value); 
})

