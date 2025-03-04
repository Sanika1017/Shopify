import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const cartdata= useSelector(state=>state.cart)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link style={{marginLeft:"100px",fontSize:"40px"}} className="navbar-brand" href="#" to="/">Shopify</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <form  style={{marginLeft:"260px"}} className="d-flex " role="search">
        <input  style={{paddingRight:"200px"}}className="form-control me-2" type="search" placeholder="Search for a Product..." aria-label="Search" />
       
      </form>
    <div style={{marginLeft:"80px"}} className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{gap:"50px",fontSize:"25px"}} className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#"to="/Pro" >Product{cartdata.length}</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#" to="/Add">Cart</Link>
        </li>
        
       
        
        
      </ul>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar
