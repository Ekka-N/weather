import React from 'react'
import './Form.scss'

class Form extends React.Component {
  render() {
    return (
      <form className="Form__wrap">
          <input className="input" type="text" name="city" id="input" placeholder="Город"></input>
          <button  className="button" onClick={this.props.getWeater}>Получить погоду</button>
      </form>
    );
  }
}

export default Form;
