


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';






import Pro from './Pages/Pro';

import Categories from './Pages/Categories';
import Cat from './components/Cat';
import Cat2 from './components/Cat2';
import Cat3 from './components/Cat3';
import Cat4 from './components/Cat4';

import Add from './Pages/Add';
import CartPage from './Pages/CartPage';

















function App() {
  return (
    <div>
    
     
      <BrowserRouter>
      <Navbar/>
      
     
   
   
     
     
    
      
     
      
      <Routes>
    
      <Route path="/" element={<Home/>}/>

      
     



    
      

     <Route path="/pro" element={<Pro/>}/>
     <Route path="/categories" element={<Categories/>}/>
     <Route path="/Cat" element={<Cat/>}/>
     <Route path="/Cat2" element={<Cat2/>}/>
     <Route path="/Cat3" element={<Cat3/>}/>
     <Route path="/Cat4" element={<Cat4/>}/>
     <Route path="/Add" element={<Add/>}/>
     <Route path="/CartPage" element={<CartPage/>}/>



     
    



     


    





   
     
      </Routes>
      
      </BrowserRouter>
      
      

     
    </div>
  );
}

export default App;
