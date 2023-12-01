import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Dip() {
    let data = useSelector((state) => state)
    let dispatcher = useDispatch();
  return (
    <>
        <h1>{data.x}</h1>
        <button onClick={()=>dispatcher({type:"INCRUMENT"})}>INCRUMENT</button>
        <button onClick={()=>dispatcher({type:"DECRUMENT"})}>DECRUMENT</button>
    </>
  )
}
