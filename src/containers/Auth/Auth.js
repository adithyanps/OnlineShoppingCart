import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
// import Button from '../../components/UI/Button/Button';
import './Auth.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {
    state = {
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
            first_name :{
              elementType: 'input',
              elementConfig: {
                type:'text',
                placeholder: 'first-name'
              },
              value:'',
              validation: {
                required: true,

              },
            },
            last_name :{
              elementType: 'input',
              elementConfig: {
                type:'text',
                placeholder: 'last-name'
              },
              value:'',
              validation: {
                required: false,

              },
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
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
        },
        isSignup:true,
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
          this.state.controls.first_name.value,
          this.state.controls.last_name.value,
          this.state.controls.email.value,
          this.state.controls.password.value
        );
    }
    switchAuthModeHandler =()=> {
      this.setState(prevState=>{return {isSignup: !prevState.isSignup}
      })
    }

    render () {
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
            <div className="Auth">
                <form onSubmit={this.submitHandler}>
                 <h4>Create Account</h4>
                    {form}
                    <button btnType="Success">SUBMIT</button>
                </form>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username,first_name,last_name,email, password) => dispatch(actions.auth(username,first_name,last_name,email,password))
    };
};

export default connect(null,mapDispatchToProps)(Auth);
