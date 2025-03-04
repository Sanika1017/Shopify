import React from 'react'
import img1 from '../images/perfume.jpeg'
import img2 from '../images/apple.jpeg'
import img3 from '../images/lip.png'
import img4 from '../images/powder.jpeg'
import {useSelector} from 'react-redux'



const Cart = () => {
  const cartdata = useSelector(state=>state.Cart)
  return (


    
    <table class="table">
  <thead >
    <tr >
      <th scope="col" >Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quanitity</th>
      <th scope="col">Total</th>
      <th scope="col"></th>

      

    </tr>
  </thead>
  <tbody>

  {
        cartdata.map((data)=>{
            return(
                <>
                   <tr>
      <th scope="row" style={{gap:"20px",display:"flex"}}>
       
      <img  style={{height:"80px"}}src={img1}/>
     <div >
      <h4>Dior J'adore</h4>
      <p>quantity:1</p>
      </div>
      
       
      </th>
      <td>$150.00</td>
      <td>- 02 +</td>
      <td >$360.00</td>
      <td colspan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></td>
    

     

    </tr>
                </>

            )
        })
       }
    <tr>
      <th scope="row" style={{gap:"20px",display:"flex"}}>
       
      <img  style={{height:"80px"}}src={img1}/>
     <div >
      <h4>Dior J'adore</h4>
      <p>quantity:1</p>
      </div>
      
       
      </th>
      <td>$150.00</td>
      <td>- 02 +</td>
      <td >$360.00</td>
      <td colspan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></td>
    

     

    </tr>
    <tr>
    <th scope="row" style={{gap:"20px",display:"flex"}}>
       
       <img  style={{height:"80px"}}src={img2}/>
      <div >
       <h4>Apples</h4>
       <p>quantity:2</p>
       </div>
       
        
       </th>
      <td>$65.00</td>
      <td>- 02 +</td>
      <td>$340.00</td>
      <td colspan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </td>

     
    </tr>

    <tr>
    <th scope="row" style={{gap:"20px",display:"flex"}}>
       
       <img  style={{height:"80px"}}src={img3}/>
      <div >
       <h4>Lipstick</h4>
       <p>quantity:5</p>
       </div>
       
        
       </th>
      <td >$360.00</td>
      <td >-  02  +</td>

      <td >$500.00</td>
      <td colspan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </td>
      </tr>


    <tr>
    <th scope="row" style={{gap:"20px",display:"flex"}}>
       
       <img  style={{height:"80px"}}src={img4}/>
      <div >
       <h4>Powder</h4>
       <p>quantity:3</p>
       </div>
       
        
       </th>
      
      <td >$450.00</td>
      <td >-  02  +</td>

      <td>$500.00</td>
      <td colspan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </td>
      
      

    </tr>
  </tbody>
</table>






  )
}

export default Cart
