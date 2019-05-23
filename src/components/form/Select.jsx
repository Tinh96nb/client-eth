import React from 'react'

const Select = props => {
  const {
    title,
    name,
    value,
    handleChange,
    placeholder,
    options = [],
    selected = 1
  } = props
  return (
    <div className='form-group'>
      <label> {title} </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-control'
      >
        <option value='' disabled>
          {placeholder}
        </option>
        {options.map(option => {
          return (
            <option
              selected={option.id === selected}
              key={option.id}
              value={option.id}
            >
              {option.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
