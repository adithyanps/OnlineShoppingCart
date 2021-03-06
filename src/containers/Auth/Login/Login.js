import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input'
import './Login.css';
import * as actions from '../../../store/actions/index';

class Login extends Component {
  state={
    controls: {
      username: {
        elementType:'input',
        elementConfig: {
          type:"text",
          placeholder: 'type username'
        },
        value:'',
        validation: {
          required:true,
          touched:false,
        },
      },
      password: {
          elementType: 'input',
          elementConfig: {
              type: 'password',
              placeholder: 'Password'
          },
          value: '',
          validation: {
              required: true,
              minLength: 6
          },
          valid: false,
          touched: false
      }
    }
  }
  checkValidity(value, rules) {
      let isValid = true;
      if (!rules) {
          return true;
      }

      if (rules.required) {
          isValid = value.trim() !== '' && isValid;
      }

      if (rules.minLength) {
          isValid = value.length >= rules.minLength && isValid
      }

      if (rules.maxLength) {
          isValid = value.length <= rules.maxLength && isValid
      }

      if (rules.isEmail) {
          const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          isValid = pattern.test(value) && isValid
      }

      if (rules.isNumeric) {
          const pattern = /^\d+$/;
          isValid = pattern.test(value) && isValid
      }

      return isValid;
  }
  inputChangedHandler = (event, controlName) => {
      const updatedControls = {
          ...this.state.controls,
          [controlName]: {
              ...this.state.controls[controlName],
              value: event.target.value,
              valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
              touched: true
          }
      };
      this.setState({controls: updatedControls});
  }
  submitHandler = (event) => {
      event.preventDefault();
      this.props.onAuth(
        this.state.controls.username.value,
        // this.state.controls.first_name.value,
        // this.state.controls.last_name.value,
        // this.state.controls.email.value,
        this.state.controls.password.value
      );
  }
  render(){
    console.log(this.props)
      const formElementsArray = [];
      for ( let key in this.state.controls ) {
          formElementsArray.push( {
              id: key,
              config: this.state.controls[key]
          } );
      }

      const form = formElementsArray.map( formElement => (
          <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
      ) );
    return (
      <div>
        <form className="Login" onSubmit={this.submitHandler}>
          {form}
          <button btnType="Success">login</button>
        </form>
        <div className="signup">
          <p >-----------new to onlineshppy ?---------</p>
          <Link to="/authentication">
            <button>create yor onlineshoppy acoount</button>
          </Link>
        </div>
      </div>

    )
  }

}
export default Login
