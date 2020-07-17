import React, { Component } from 'react'
import Input from '../common/Input'
import Joi from 'joi-browser'
import Select from '../common/Select'


class Form extends Component {
  state = {
    data: {},
    errors: {}
  }
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = { ...this.state.data }
    data[input.name] = input.value
    this.setState({
      data,
      errors
    })
  }

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    })
    if (!error) return null
    const errors = error.details.reduce((errors, item) => {
      errors[item.path[0]] = item.message
      return errors
    }, {})
    return errors
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = {
      [name]: this.schema[name]
    }
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data)
    const errors = this.validate()
    this.setState({
      errors: errors || {}
    })
    if (errors) return;
    // call the server
  }
  renderInput =(name,label,options = {
    type: 'text',
    autofocus: false
  }) => {
    const { data, errors } = this.state
      return (
        <Input
        label={label}
        name={name}
        autofocus={options.autofocus}
        type={options.type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />)
  }
  renderSelect(name,label,options) {
    const {data,errors} = this.state
    return (
      <Select
      name={name}
      value={data[name]}
      label={label}
      options={options}
      onChange={this.handleChange}
      error={errors[name]}
      />
    )
  }
  renderButton(label) {
    return (
      <button
      disabled={this.validate()}
      className="btn btn-primary">{label}</button>
    )
  }
}
 
export default Form;