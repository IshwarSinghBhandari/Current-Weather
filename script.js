const apiKey="85977cd039224d5f43977fb86e326661";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon=document.querySelector('.weather-icon');

 document.querySelector('button').addEventListener('click',function(){
    async function checkWether(city){
        const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
        var data = await response.json();
    
        console.log(data);
        document.querySelector('.city').innerHTML=data.name;  
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°c';  
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';  
        document.querySelector('.mintemp').innerHTML=Math.round(data.main.temp_min)+'°c';  
        document.querySelector('.maxtemp').innerHTML=Math.round(data.main.temp_max)+'°c';  
        document.querySelector('.maxtemp').innerHTML=Math.round(data.main.temp_max)+'°c';  
        document.querySelector('.pressure').innerHTML=data.main.pressure+'hpa';  
        document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';  
        document.querySelector('.description').innerHTML=data.weather[0].description;  
        document.querySelector('.visib').innerHTML=data.visibility+'m';  

       


        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }
        else{
            weatherIcon.src="images/haze.png"
            
        }
       
    }
    let city=document.querySelector('#cdata').value;
    checkWether(city);
 })

 function load(){
    document.querySelector('.moreload').style.display="block"
    document.querySelector('.load').style.display="none"
 }