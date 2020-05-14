import React from 'react';
import Form from '../Form/Form'
import Weather from '../Weather/Weather'
import './App.scss'

const API_KEY = '290053f8c007bce07e5d9bac79cba03d';

class App extends React.Component {

  state = {
    info: {      
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined
    }
  }

  getWeater = async (event) => {
    event.preventDefault();
    const city = document.getElementById('input').value;

    if (city) {      
      const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await url.json();
      console.log(data);

      const sunrise = data.sys.sunrise;
      const sunriseDate = new Date();
      sunriseDate.setTime(sunrise);
      const resultSunrise = sunriseDate.getHours() + ":" + sunriseDate.getMinutes() + ":" + sunriseDate.getSeconds();

      const sunset = data.sys.sunset;
      const sunsetDate = new Date();
      sunsetDate.setTime(sunset);
      const resultSunset = sunsetDate.getHours() + ":" + sunsetDate.getMinutes() + ":" + sunsetDate.getSeconds();

      const newInfo = {
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: resultSunrise,
        sunset: resultSunset,
        error: ''
      }
      this.setState({info: {...newInfo}});
    } 
    
  }

  render() {
    return (
      <div className="App__wrap">
        <h1 className="title">
          Погодное приложение
          <p className="subtitle">
            Узнай погоду в любом городе!
          </p>
        </h1>
      <div className="App__content"> 
        <Form getWeater={this.getWeater}/>
        <Weather info={this.state.info} />
      </div>
      </div>
    );
  }
}

export default App;
