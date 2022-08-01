import React, { useState } from 'react'

export const Usestatefour = () => {
    const[a,seta] = useState([])
    const add = ()=>{
        seta([...a,{
            index:a.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={add}>add a number</button>
        <ul>
            {
               a.map(item=> <li key={item.index}>{item.value}</li>)
            }
        </ul>
    </div>
  )
}
