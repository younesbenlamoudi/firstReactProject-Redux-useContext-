import react, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import context from './context'

export default function User() {

  // let data = useSelector((state)=>state);
  // let dispatch = useDispatch()
  // console.log(data)
  let data = useContext(context);

  return (
    <>
    <h1>{data.contData}</h1>
    <button onClick={(e)=>data.handelInc(e)}>INCRUMENT</button>
    <button onClick={(e)=>data.handelDec(e)}>DECRUMENT</button>
      {/* <h1>Redux</h1>
      <div>{data.x}</div>
      <button onClick={()=>dispatch({type:"INCRUMENT"})}>INCRUMENT</button>
      <button onClick={()=>dispatch({type:"DECRUMENT"})}>DECRUMENT</button> */}
    </>
  )
}
