import { peerSocket } from "messaging";
import { geolocation } from "geolocation";

import { WEATHER_MESSAGE_KEY, Conditions, mapping_codes } from './common.js';

export default class Weather {
  
  constructor() {
    this._apiKey = undefined;
    this._feelsLike = true;
    this._weather = undefined;
    this._maximumAge = 0;

    this.onerror = undefined;
    this.onsuccess = undefined;
    
    peerSocket.addEventListener("message", (evt) => {
      // We are receiving a request from the app
      if (evt.data !== undefined && evt.data[WEATHER_MESSAGE_KEY] !== undefined) {
        let message = evt.data[WEATHER_MESSAGE_KEY];
        prv_fetchRemote(message.provider, message.apiKey, message.feelsLike);
      }
    });
  }
  
  setApiKey(apiKey) {
    this._apiKey = apiKey;
  }
  
  setProvider(provider) {
    this._provider = provider;
  }
  
  setFeelsLike(feelsLike) {
    this._feelsLike = feelsLike;
  }
  
  setMaximumAge(maximumAge) {
    this._maximumAge = maximumAge;
  }
  
  fetch() {
    let now = new Date().getTime();
    if(this._weather !== undefined && this._weather.timestamp !== undefined && (now - this._weather.timestamp < this._maximumAge)) {
      // return previous weather if the maximu age is not reached
      if(this.onsuccess) this.onsuccess(this._weather);
      return;
    }
    
    geolocation.getCurrentPosition(
      (position) => {
        //console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
        prv_fetch(this._provider, this._apiKey, this._feelsLike, position.coords.latitude, position.coords.longitude, 
              (data) => {
                this._weather = data;
                if(this.onsuccess) this.onsuccess(data);
              }, 
              this.onerror);
      }, 
      (error) => {
        if(this.onerror) this.onerror(error);
      }, 
      {"enableHighAccuracy" : false, "maximumAge" : 1000 * 1800});
  }
};

/*******************************************/
/*********** PRIVATE FUNCTIONS  ************/
/*******************************************/

function prv_fetchRemote(provider, apiKey, feelsLike) {
  geolocation.getCurrentPosition(
    (position) => {
      prv_fetch(provider, feelsLike, position.coords.latitude, position.coords.longitude,
          (data) => {
            if (peerSocket.readyState === peerSocket.OPEN) {
              let answer = {};
              answer[WEATHER_MESSAGE_KEY] = data;
              peerSocket.send( answer );
            } else {
              console.log("Error: Connection is not open with the device");
            }
          },
          (error) => { 
            if (peerSocket.readyState === peerSocket.OPEN) {
              let answer = {};
              answer[WEATHER_MESSAGE_KEY] = { error : error };  
              peerSocket.send( answer );
            }
            else {
              console.log("Error : " + JSON.stringify(error) + " " + error); 
            }
          }
      );
    }, 
    (error) => {
      if (peerSocket.readyState === peerSocket.OPEN) {
        let answer = {};
        answer[WEATHER_MESSAGE_KEY] = { error : error };  
        peerSocket.send( answer );
      }
      else {
        console.log("Location Error : " + error.message); 
      }
    }, 
    {"enableHighAccuracy" : false, "maximumAge" : 1000 * 1800});
}

function prv_fetch(provider, feelsLike, latitude, longitude, success, error) {
    const url = 'https://iot.meexle.com/fitbit/weather?lat=' + latitude + '&lon=' + longitude;
    fetch(encodeURI(url))
      .then(response => response.json())
      .then(data => {

        if (data.weather === undefined) {
          error(data.message);
          return
        } 
        //console.log(data);
        let conditionId = data.weather[0].id
        let condition = mapping_codes[conditionId];
        let weather = {
          temperatureC: data.main.temp - 273.15,
          temperatureF: (data.main.temp - 273.15) * 9 / 5 + 32,
          location: data.name,
          description: data.weather[0].description,
          isDay: (data.dt > data.sys.sunrise && data.dt < data.sys.sunset),
          conditionCode : condition !== undefined ? condition : Conditions.Unknown,
          realConditionCode: data.weather[0].id,
          sunrise: data.sys.sunrise * 1000,
          sunset: data.sys.sunset * 1000,
          tempLow : data.main.humidity,
          tempHigh : data.main.pressure * 0.75006
        }

        // Send the weather data to the device
        success(weather)
      })
      .catch(e => error(e.message))
  }
