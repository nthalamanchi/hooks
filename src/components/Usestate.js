import React from 'react'
import { useState } from 'react'

export const Usestate = () => {
    const [p, setp] = useState(0)
    const [t, sett] = useState(0)
    const [r, setr] = useState(0)
    const [i, seti] = useState(0)
    const [sr,setsr] = useState()
    const cpi = () =>{
        seti((p*t*r)/100)
         setsr(true)
    }
  return (
    <div>
        <div>
          P:<input type="number" onChange={(e)=>{
            setp(e.target.value)
            setsr(false) }}/>
        </div>
        <div>
          T:<input type="number" onChange={(e)=>{
            sett(e.target.value)
            setsr(false)}}/>
        </div>
        <div>
          R:<input type="number" onChange={(e)=>{
            setr(e.target.value)
            setsr(false)}} />
        </div>
         <button onClick={cpi}>Calculate</button>
        {
          sr?(<div>Interest:<h1>{i}</h1>
            total:<h1>{parseInt(p)+parseInt(i)}</h1>
            </div>):(<div>"click button"</div>)
        }
        
        
       
    </div>
  )
}

