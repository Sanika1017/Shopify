import React from 'react'

const Cart1 = () => {
  return (
    <div>
      <form   className="d-flex " role="search">
        <input style={{width:"300px"}} className="form-control me-2" type="search" placeholder="Promo code here" aria-label="Search" />

        <div >
        <button style={{width:"100px",backgroundColor:"orange",color:"white",border:"none",padding:"10px"}}>Apply</button>
        <button style={{width:"140px",backgroundColor:"orange",color:"white",border:"none",marginLeft:"670px",padding:"10px"}}>Update Cart</button>
        </div>
      </form>
      

    </div>
  )
}

export default Cart1
