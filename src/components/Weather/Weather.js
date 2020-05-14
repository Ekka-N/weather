import React from 'react'
import './Weather.scss'

class Weather extends React.Component {
  render() {
    return (
      <div>
        { this.props.info.city && 
        <div>
            <p className="Weater__text Weater__city">Город: {this.props.info.city}</p>
            <p className="Weater__text">Температура: {Math.round(this.props.info.temp) - 273}℃</p>
            <p className="Weater__text">Время восхода: {this.props.info.sunrise}</p>
            <p className="Weater__text">Время заката: {this.props.info.sunset}</p>
        </div>           
        }
      </div>
    );
  }
}

export default Weather;
