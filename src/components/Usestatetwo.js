import React, { useState } from 'react'

export const Usestatetwo = () => {
    const[count,setcount] = useState(0)
  return (
    <div>
        <button onClick={()=>{setcount(count+1)}}>
            count:{count}
        </button>
    </div>
  )
}
