import React from 'react'

const Input = ({onchange}:{onchange:(e:any)=>void}) => {
  return (
    <input type="text" onChange={(e)=>onchange(e)} />
  )
}

export default Input
