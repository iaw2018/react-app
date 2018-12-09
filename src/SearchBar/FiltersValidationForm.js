import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {POSITIONS} from  './constants'

const validate = values => {
  const errors = {}
  if (!(/^[a-z]+$/i.test(values.name))) {
    errors.name = 'Must be only letters';
  } 
  if(values.age){
    if(isNaN(Number(values.age))) {
      errors.age = 'Must be a number';
    } else if(Number(values.age)<18){
      errors.age = 'Must be > 18';
    } else if(Number(values.age)>40){
      errors.age = 'Must be < 40';
    }
  } 
  return errors;
}

const renderField = ({  input,  label,  type, meta: { touched, error}}) => 
(   <div className="col-md-3 col-xs-12 divSearch">
      <input className="form-control itemSearch" {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
)
const renderSelect = ({input,  label}) => 
(   <div className="col-md-3 col-xs-12 divSearch">
      <select className="form-control" {...input} placeholder={label} >
        <option />
        { 
          POSITIONS.map( (pos,index) =>
          <option key={"option"+index} value={pos}>{pos}</option>  
        )}            
      </select>
    </div>
)
const FiltersForm = ({ handleSubmit})  => {
  return (
    <form onSubmit={handleSubmit}>
      <Field  name="name" type="text" component={renderField} label="Player Name"/>
      <Field name="position" component={renderSelect} label="Position" className="col-md-3 col-xs-12" />
      <Field name="age" type="number" component={renderField} label="Age" />
      <div className="col-md-3 col-xs-12 divSearch">
        <button className="itemSearch btn btn-default" type="submit">Search</button>
    </div>
    </form>
  )
}
export default reduxForm({
  form: 'syncValidation',
  validate, 
})(FiltersForm)
