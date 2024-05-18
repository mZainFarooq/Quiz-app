import React from 'react'

const Button = ({value,className,btnClick}:{value:string,className:object,btnClick:(e:any)=>void}) => {
    const style={
        backgroundColor:'red',
        color:"white"
       
    }
    const forAll={
        margin:"10px",
        padding:"10px 20px ",
        fontSize:"18px",
        border:"none",
        borderRadius:"20px",
        cursor:"pointer"

    }
  return (
      <button onClick={()=>btnClick(value)} style={className?{...className,...forAll}:{...style,...forAll}} >{value}</button>
  )
}

export default Button;
