import React, { useState } from 'react'

function Products({age, data}) {
  const [a,b] = useState(true);
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
      <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? 'hello':'hi'}</h4>
      <button onClick={()=>b(!a)}>change</button>
  
    </div>
  )
}

export default Products