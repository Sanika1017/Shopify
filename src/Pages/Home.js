import React from 'react'
import '../css/Home.css'
import Left from '../components/Left'
import Right from '../components/Right'
import Product from '../components/Products'
import Offer from '../components/Offer'
import Arrivals from '../components/Arrivals'

const Home = () => {
  return (
    <>
    <div className='Main'>
      <div className='Left'>
        <Left/>

      </div>
      <div className='Right'>
<Right/>
</div>
</div>


<div className='Divs' >
        <div className='Div1 '>
            <h5>Free Delivery</h5>
            <p>Orders from all items</p>
        </div>
        <div className='Div2'>
            <h5>Return & Refund</h5>
            <p>Money back guarantee</p>
        </div>
        <div className='Div3'>
            <h5>Member Discount</h5>
            <p>On order over $99</p>
        </div>
        <div className='Div4'>
            <h5>Support 24/7</h5>
            <p>Contact us 24 hours a day</p>
        </div>
      
    </div>





 
<div className='Prod'>
<Product/>
</div>


<div>
  <Offer/>
</div>
<div>
  <Arrivals/>
</div>



  








    </>

  )

}

export default Home
