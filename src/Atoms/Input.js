import React from 'react'

export default function Input({type,placeholder,InputCss,onChange,value}) {
  return (
    <>
      <input className={InputCss}type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  )
}
