import React from 'react';
import Form from './Form'
import Joi from 'joi-browser'

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {

    }
  }
  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().required().label('Password'),
    name: Joi.string().required().label('Name')
  }
  render() {
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput('username', 'Username', {
          autofocus: true
        })}
        {this.renderInput('password', 'Password', {
          autofocus: false,
          type: 'password'
        })}
        {
          this.renderInput('name', 'Name')
        }
        {
          this.renderButton('Register')
        }
        </form>
      </>
    );
  }
}

export default Register ;