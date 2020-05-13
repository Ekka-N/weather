import React from 'react'
import './Weather.scss'

class Weather extends React.Component {
  render() {
    return (
      <div>
        { this.props.info.city && 
        <div>
            <p>Город: {this.props.info.city}</p>
            <p>Температура: {Math.round(this.props.info.temp) - 273}</p>
            <p>Время восхода: {this.props.info.sunrise}</p>
            <p>Время заката: {this.props.info.sunset}</p>
        </div>           
        }
      </div>
    );
  }
}

export default Weather;
