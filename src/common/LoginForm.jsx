import React from 'react';
import Joi from 'joi-browser'
import Form from '../common/Form'

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  }
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username','Username',{
            autofocus: true,
          })}
          {this.renderInput('password','Password',{
            type: 'password'
          })}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;