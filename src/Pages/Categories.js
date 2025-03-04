import React from 'react'
import '../css/Divs.css'

import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='categories' >
       <div className='Dv1 '>
            <h3>Beauty</h3>
            <Link href='#'to="/Cat" >view product</Link>
        </div>
        <div className='Dv2 '>
            <h3>Fragrances</h3>
            <Link href='#'to="/Cat2" >view product</Link>
        </div>
        <div className='Dv3 '>
            <h3>Furniture</h3>
            <Link href='#'to="/Cat3" >view product</Link>
        </div>
        <div className='Dv4 '>
            <h3>Groceries</h3>
            <Link href='#'to="/Cat4" >view product</Link>
        </div>
    </div>
  )
}

export default Categories
