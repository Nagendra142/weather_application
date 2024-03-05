const apikey="7fb89fce1019de0e4a5c38817fde01c2";
// const apiKEY="863242cfb2b1d357e6093d9a4df19a4b";
const but=document.querySelector(".search button");
const btninput=document.querySelector(".search input");
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon=document.querySelector('.weather-icon');
const form=document.getElementById("form");
async function getWeather(city){
    const response = await fetch(url+`${city}&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    if (response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.message').style.display="none";
        document.querySelector('.weather').style.display="none";
    }
    else{
    document.querySelector('.description').innerHTML=data.weather[0].description;
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+" °c";
    document.querySelector('.max-temp').innerHTML=data.main.temp_max+" °c";
    document.querySelector('.min-temp').innerHTML=data.main.temp_min+" °c";
    document.querySelector('.humidity').innerHTML=data.main.humidity+" %";
    document.querySelector('.wind').innerHTML=data.wind.speed+" kmph";
    weatherIcon.src="images/"+(data.weather[0].main.toLowerCase())+".png";
    document.querySelector('.error').style.display="none";
    document.querySelector('.message').style.display="none";
    document.querySelector('.weather').style.display="block";
    
    }
}
but.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(btninput.value);
    btninput.textContent="";
    form.reset();
});


