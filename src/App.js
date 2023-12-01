import React, { useState } from 'react'
import User from './User'
import { Provider } from 'react-redux'
import context from './context'
import Dip from './Dip'
import store from './store'

export default function App() {
  let [contData,setContData] = useState(0);
  let handelInc = (e)=>{
    setContData(contData+1);
  }
  let handelDec = (e)=>{
    setContData(contData-1);
  }

  return (
    // <Provider store={myStore}>
    //   <User/>
    // </Provider>
    <>
      <context.Provider value={{contData,setContData,handelInc,handelDec}}>
        <h1>useContext</h1>
        <User/>
      </context.Provider>

      <h3>---------------------</h3>

      <Provider store={store}>
        <h1>Redux</h1>
        <Dip/>
      </Provider>

    </>
  )
}
