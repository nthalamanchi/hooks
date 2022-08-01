import React, { useState } from 'react'

export const Usestatethree = () => {
    const[v,setv] = useState({fn:"",ln:""})
  return (
    <div>
        <form>
            <input type="text" onChange={(e)=>{setv({...v,fn:e.target.value})}}/>
            <input type="text" onChange={(e)=>{setv({...v,ln:e.target.value})}}/>
            <h2>fn is {v.fn} , ln is {v.ln}</h2>
        </form>
    </div>
  )
}

