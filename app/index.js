import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import * as util from "../common/utils";
import { today } from 'user-activity';
import { display } from "display";
import { battery } from "power";
import { charger } from "power";
import * as messaging from "messaging";
import Weather from '../common/weather/device';
import { locale } from "user-settings";
import * as fs from "fs";
import { me } from "appbit";


// Update fthe clock every minute
clock.granularity = "seconds";

//create objects
let weather = new Weather();
var hrm = new HeartRateSensor();
let lang = locale.language;
let settings = {};


// Get a handle on the <text> element
let hourElement= document.getElementById("hourLabel");
let minuteElement = document.getElementById("minuteLabel");
let hrElement = document.getElementById("hrLabel");
let stepsElement = document.getElementById("stepsLabel");
let distanceElement = document.getElementById("distanceLabel");
let distanceUnitElement = document.getElementById("distanceUnitLabel");
let activeElement = document.getElementById("activeLabel");
let currentWeatherElement = document.getElementById("currentWeatherLabel");
let lowElement = document.getElementById("lowLabel");
let highElement = document.getElementById("highLabel");
let dateElement = document.getElementById("dateLabel");
let dayElement = document.getElementById("dayLabel");
let leftBackgroundElement = document.getElementById("leftBackground");
let rightBackgroundElement = document.getElementById("rightBackground");  
let batteryElement = document.getElementById("batteryLabel");
let touchArea = document.getElementById("touchArea");


//icons
let bolt = document.getElementById("bolt");
let batteryIcon = document.getElementById("battery");
let dist = document.getElementById("dist");
let high = document.getElementById("high");
let heart = document.getElementById("heart");
let low = document.getElementById("low");
let steps = document.getElementById("steps");
let weatherIcon = document.getElementById("currentWeatherIcon");

//g_variables
let g_sunriseHours = "--";
let g_sunriseMinutes = "--";
let g_sunsetHours = "--";
let g_sunsetMinutes = "--";
let g_tempLow = "-";
let g_tempHigh = "-";
let g_currentWeather = "-";
let g_currentCondition = 1;


try {
  

  let stats = fs.statSync("settings.txt");
  let settingsread = fs.readFileSync("settings.txt","cbor" );
  /*
  if (stats) {
  console.log("File size: " + stats.size + " bytes");
  console.log("Last modified: " + stats.mtime);
  console.log("Sucess!");     
  }
*/

} catch (err) {
 
  settings.hour = 'white';
  settings.minute = 'white';
  settings.hr = 'white';
  settings.steps = 'white';
  settings.distance = 'white';
  settings.date = 'white';
  settings.leftBackground = '#A9A9A9';
  settings.rightBackground = '#696969';
  settings.day = 'white';
  settings.battery = 'white';
  settings.weather = 'white';
  settings.active = 'white';
  settings.toggle = 0;
  settings.white = 0;
  settings.distanceUnit = 0;
  settings.temperatureUnit = 0;  
  settings.g_currentWeather = "--";
  settings.g_sunsetHours = "--";
  settings.g_sunsetMinutes = "--";
  settings.g_sunriseHours = "--";
  settings.g_sunriseMinutes = "--";
  settings.g_tempLow = "--";
  settings.g_tempHigh = "--";
  settings.g_currentCondition = 0;
  settings.extremes = 0;


  fs.writeFileSync("settings.txt", settings, "cbor");

}

let settingsread = fs.readFileSync("settings.txt", "cbor");




  settings.hour = settingsread.hour;
  settings.minute =  settingsread.minute;
  settings.hr = settingsread.hr;
  settings.steps =  settingsread.steps;
  settings.distance =  settingsread.distance;
  settings.date =  settingsread.date;
  settings.leftBackground =  settingsread.leftBackground;
  settings.rightBackground =  settingsread.rightBackground;
  settings.day =  settingsread.day;
  settings.battery =  settingsread.battery;
  settings.weather = settingsread.weather;
  settings.active = settingsread.active;
  toggle = settingsread.toggle;
  white = settingsread.white;
  extremes = settingsread.extremes;

  g_sunriseHours = settingsread.g_sunriseHours || "--";
  g_sunriseMinutes = settingsread.g_sunriseMinutes || "--";
  g_sunsetHours = settingsread.g_sunsetHours || "--";
  g_sunsetMinutes= settingsread.g_sunsetMinutes || "--";
  g_tempLow = settingsread.g_tempLow || "--";
  g_tempHigh = settingsread.g_tempHigh || "--";
  g_currentWeather = settingsread.g_currentWeather || "--";
  g_currentCondition  = settingsread.g_currentCondition || 0;
  



let hourCol = settingsread.hour || 'white';
let minuteCol = settingsread.minute || 'white';
let hrCol = settingsread.hr  || 'white';
let stepsCol = settingsread.steps || 'white';
let distanceCol = settingsread.distance || 'white';
let dateCol = settingsread.date || 'white';
let leftBackgroundCol = settingsread.leftBackground || '#A9A9A9';
let rightBackgroundCol = settingsread.rightBackground || '#696969';
let dayCol = settingsread.day || 'white';
let batteryCol = settingsread.battery || 'white';
let weatherCol = settingsread.weather || 'white';
let activeCol = settingsread.active || 'white';

let toggle = settingsread.toggle || 0; //for 12h format
let white = settingsread.white || 0;
let distanceUnit = settingsread.distanceUnit || 0;
let temperatureUnit = settingsread.temperatureUnit || 0;
let extremes = settingsread.extremes || 0;

//ifWeather();

hourElement.style.fill = hourCol;
minuteElement.style.fill = minuteCol;
hrElement.style.fill = hrCol;
stepsElement.style.fill = stepsCol;
distanceElement.style.fill = distanceCol;
dateElement.style.fill = dateCol;
leftBackgroundElement.style.fill = leftBackgroundCol;
rightBackgroundElement.style.fill = rightBackgroundCol;
dayElement.style.fill = dayCol;
batteryElement.style.fill = batteryCol;
activeElement.style.fill = activeCol;

highElement.style.fill = weatherCol;
lowElement.style.fill = weatherCol;
currentWeatherElement.style.fill = weatherCol;


//initialize with something
hrElement.text = "--";
stepsElement.text ="--";
distanceElement.text ="--";
batteryElement.text = "--";

let tempVar = true;

weather.onsuccess = (data) => {
  let sunriseData = new Date(data.sunrise);
  let sunsetData = new Date(data.sunset);
    
        g_sunriseHours= sunriseData.getHours();
        g_sunriseMinutes = sunriseData.getMinutes();
  
        g_sunsetHours = sunsetData.getHours();
        g_sunsetMinutes = sunsetData.getMinutes();
        
        g_tempLow = data.tempLow.toFixed(0);
        g_tempHigh = data.tempHigh.toFixed(0);
  
        g_currentWeather = data.temperatureC.toFixed(0);
        g_currentCondition = data.conditionCode;
} 

weather.onerror = (error) => {
  console.log("Weather error " + JSON.stringify(error));
}

 function updateStats(){
   
    weatherCheck();
   
   
   
  hrm.start();
   if(distanceUnit == 1){
     distanceElement.text =`${((today.adjusted.distance/1000*0.621371)).toFixed(2)}`;
     distanceUnitElement.text = "mi";
  }
   else{
 distanceElement.text = `${((today.adjusted.distance/1000)).toFixed(2)}`;
     distanceUnitElement.text = "km";
   }
  stepsElement.text= `${today.adjusted.steps}`;
  activeElement.text = `${today.adjusted.activeMinutes}`;
   
  messaging.peerSocket.onopen = function() {
  // Fetch the weather every 3 hours
  setInterval(() => weather.fetch(),3 * 60 * 60 * 1000);
  weather.fetch();
}
  }
   
 



updateStats();
clock.ontick = () => updateClock();

weatherIcon.onclick = function(e) {
    if(extremes == 1){
    extremes = 0;
    weatherCheck();
  }else{
    extremes = 1;
    weatherCheck();
  }
  
}

touchArea.onclick = function(e) {
  if(extremes == 1){
    extremes = 0;
    weatherCheck();
  }else{
    extremes = 1;
    weatherCheck();
  }
  
  
}


display.onchange = () => updateStats();
if(!display.on){
   hrm.stop();
}
me.onunload = () => {
  fs.writeFileSync("settings.txt", settings, "cbor");


}


messaging.peerSocket.onmessage = function(evt) {

  if(evt.data.key == "toggle"){     
         if(evt.data.value == true){
        toggle = 1;
     }else{
      toggle = 0;
     }
  
    
    
  }
    if(evt.data.key == "extremesUnit"){     
         if(evt.data.value == true){
        extremes = 1;
     }else{
      extremes = 0;
     }
  
    
    
  }
  
    if(evt.data.key == "temperatureUnit"){     
         if(evt.data.value == true){
        temperatureUnit = 1;
     }else{
      temperatureUnit = 0;
     }
  
    
  }
    if(evt.data.key == "distanceUnit"){     
         if(evt.data.value == true){
        distanceUnit = 1;
     }else{
      distanceUnit = 0;
     }
  
    
  }
    if(evt.data.key == "white"){     
         if(evt.data.value == true){
        white = 1;
     }else{
      white = 0;
     }
     
  }
    if(evt.data.key == "hourColor"){     
      hourElement.style.fill = evt.data.value;    
  }
  if(evt.data.key == "activeColor"){     
      activeElement.style.fill = evt.data.value;    
  }
   if(evt.data.key == "batteryColor"){     
      batteryElement.style.fill = evt.data.value;
    
  }
  if(evt.data.key == "weatherColor"){     
      lowElement.style.fill = evt.data.value;
      highElement.style.fill = evt.data.value;
      currentWeatherElement.style.fill = evt.data.value;    
  }
  if(evt.data.key == "minuteColor"){
     minuteElement.style.fill = evt.data.value;    
  }
  if(evt.data.key == "hrColor"){
    hrElement.style.fill =evt.data.value;    
  }
  
  if(evt.data.key == "stepsColor"){
    stepsElement.style.fill = evt.data.value;      
  }
  
  if(evt.data.key == "distanceColor"){
    distanceElement.style.fill = evt.data.value;      
  }
  
  if(evt.data.key =="dateColor"){
    dateElement.style.fill = evt.data.value;   
  }
  
  if(evt.data.key =="leftBackgroundColor"){
    leftBackgroundElement.style.fill = evt.data.value;
   console.log(evt.data.value);   
  }
  
   if(evt.data.key =="rightBackgroundColor"){
    rightBackgroundElement.style.fill = evt.data.value;   
  }
  
   if(evt.data.key =="dayColor"){
    dayElement.style.fill = evt.data.value;
      console.log(evt.data.value);   
  }    
  else{}
  saveIt(evt);  
}  


 
function saveIt(element) {
  
  if(element.data.key == "hourColor"){
   settings.hour = element.data.value;

  }
   if(element.data.key == "temperatureUnit"){
     if(element.data.value == true){
        settings.temperatureUnit = 1;
     }else{
        settings.temperatureUnit = 0;
     }
   }
  
     if(element.data.key == "extremesUnit"){
     if(element.data.value == true){
        settings.extremes = 1;
     }else{
        settings.extremes = 0;
     }
   }
  
   if(element.data.key == "distanceUnit"){
     if(element.data.value == true){
        settings.distanceUnit = 1;
     }else{
        settings.distanceUnit = 0;
     }
   }
   if(element.data.key == "toggle"){
     if(element.data.value == true){
        settings.toggle = 1;
     }else{
        settings.toggle = 0;
     }
  }
     if(element.data.key == "white"){
     if(element.data.value == true){
        settings.white = 1;
     }else{
        settings.white = 0;
     }
  }
   if(element.data.key == "activeColor"){
   settings.active = element.data.value;

  }
   if(element.data.key == "weatherColor"){
    settings.weather = element.data.value;
    
  }  
  if(element.data.key == "minuteColor"){
    settings.minute = element.data.value;    
  }
  
  if(element.data.key == "batteryColor"){
    settings.battery = element.data.value;    
  } 
  if(element.data.key == "hrColor"){
    settings.hr = element.data.value;
  }  
  if(element.data.key == "stepsColor"){
    settings.steps = element.data.value;
  }  
  if(element.data.key == "distanceColor"){
    settings.distance = element.data.value;
  }  
  if(element.data.key == "dateColor"){
    settings.date = element.data.value;
  }  
  if(element.data.key == "leftBackgroundColor"){
    settings.leftBackground = element.data.value;
  }  
  if(element.data.key == "rightBackgroundColor"){
    settings.rightBackground = element.data.value; 
  }    
  if(element.data.key == "dayColor"){
    settings.day = element.data.value;
  }  
  else{}
}


function weatherCheck(){
  let tempsunsetHours;
  if(extremes == 1){
 
  if(temperatureUnit == 1){
    
   highElement.text = (g_tempHigh * 9/5 +32).toFixed(0)+"°F";
   lowElement.text = (g_tempLow * 9/5 +32).toFixed(0)+"°F";
   currentWeatherElement.text = (g_currentWeather* 9/5 +32).toFixed(0)+"°F";
    settings.g_tempHigh =  g_tempHigh+"°F";
    settings.g_tempLow = g_tempLow+"°F";
    settings.g_currentWeather = g_currentWeather;
    settings.g_currentCondition = g_currentCondition;
  }else{
    highElement.text = g_tempHigh+"°C";
    lowElement.text = g_tempLow+"°C";
    currentWeatherElement.text = g_currentWeather+"°C";
    settings.g_tempHigh =  g_tempHigh;
    settings.g_tempLow = g_tempLow;
    settings.g_currentWeather = g_currentWeather;
    settings.g_currentCondition = g_currentCondition;
  }
  
  
}else{
 
    if(temperatureUnit == 1){
      currentWeatherElement.text = (g_currentWeather* 9/5 +32).toFixed(0)+"°F";
      settings.g_currentWeather = g_currentWeather;
      settings.g_currentCondition = g_currentCondition;
    
    }else{
      currentWeatherElement.text = g_currentWeather+"°C";
      settings.g_currentWeather = g_currentWeather;
      settings.g_currentCondition = g_currentCondition;
      
    }
   
    if(toggle == 1 && g_sunsetHours >12){
        tempsunsetHours = g_sunsetHours -12;
        lowElement.text =util.zeroPad(tempsunsetHours)+":"+util.zeroPad(g_sunsetMinutes);
        settings.g_sunsetHours = g_sunsetHours;
        settings.g_sunsetMinutes = g_sunsetMinutes;

    }else{
      
        
       lowElement.text =util.zeroPad(g_sunsetHours)+":"+util.zeroPad(g_sunsetMinutes);
       settings.g_sunsetHours = g_sunsetHours;
       settings.g_sunsetMinutes = g_sunsetMinutes;

       

    }
      highElement.text = util.zeroPad(g_sunriseHours)+":"+util.zeroPad(g_sunriseMinutes);        
        settings.g_sunriseHours = g_sunriseHours;
        settings.g_sunriseMinutes = g_sunriseMinutes;
        settings.g_tempHigh =  g_tempHigh;
        settings.g_tempLow = g_tempLow;
  
        settings.toggle = toggle;
        settings.white = white;
        settings.distanceUnit = distanceUnit;
        settings.temperatureUnit = temperatureUnit;
        settings.extremes = extremes;

}

  switch(g_currentCondition){
    case 0: weatherIcon.href = "sunny.png";
            break;
    case 1: weatherIcon.href = "sun_and_cloud.png";
            break;
    case 2: weatherIcon.href = "cloudy.png";
            break;
    case 3: weatherIcon.href = "cloudy.png";
            break;
    case 4: weatherIcon.href = "sun_and_rain.png";
            break;
    case 5: weatherIcon.href = "rainy.png";
            break;
    case 6: weatherIcon.href = "thunderstorm.png";
            break;
    case 7: weatherIcon.href = "snow.png";
            break;
    case 8: weatherIcon.href = "cloudy.png";
            break;
    default: weatherIcon.href = "sun_and_cloud.png";
             break;
  }  
  settings.g_currentCondition = g_currentCondition;
}




// Update the <text> element every tick with the current time
function updateClock(){
  weatherCheck();
  let today = new Date(); 
  let hours = today.getHours();
  let minutes = util.zeroPad(today.getMinutes());
  let date = today.getDate();
  let wday = today.getDay();
  let m = today.getMonth() +1;
  let prefix = lang.substring(0,2);
   
      //start the hrmonitoring
  hrm.onreading = function() {
      hrElement.text = hrm.heartRate;
      }
  
  if(white == 1){
    bolt.href = "boltW.png";
    batteryIcon.href = "batteryW.png";
    dist.href = "distW.png";
    heart.href = "heartW.png";
    high.href ="highW.png";
    low.href ="lowW.png";
    steps.href = "stepsW.png";
  }else{
      bolt.href = "active.png";
    batteryIcon.href = "battery.png";
    dist.href = "dist.png";
    heart.href = "heart.png";
    high.href ="high.png";
    low.href ="low.png";
    steps.href = "steps.png";
  }
  
  
  if(toggle == 1){
    if(hours > 12){
      hours = hours -12;
   
    }
  }else{}
    
  hourElement.text = util.zeroPad(hours);
  minuteElement.text = minutes;
  batteryElement.text = battery.chargeLevel;
  

   dateElement.text = `${date}`;
   dayElement.text = `${util.weekday[prefix][wday]}`; 
  


}


