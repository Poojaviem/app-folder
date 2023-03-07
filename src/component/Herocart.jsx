import React from 'react'

import { useSelector } from 'react-redux'



function Herocart({product}) {
  const cart=useSelector((state)=>state.cart)

 
    return (
     

<>
<div className='colom'>
<div className="card" style={{"width":"17rem"}}>
  <img className="card-img-top" src={product.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Title:{product.title}</h5>
    <p className="card-text">Price:{product.price}</p>
    <button className='button'bg-primary text-white borderRadius={20}>Add Images</button>
  </div>
</div>
</div>
</>

  )
}

export default Herocart