import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar'
import ProductSection from './components/product/ProductSection';
import { CartContext } from './helpers/CartContext';

const App = () => {
  const [open, setOpen] = useState(false)
  const [cart,setCart] = useState({})
  

  const toggle = () => {
    setOpen(!open)
  }

  const value = 
  {
    cart,
    setCart,
  }

  return (
    <>
      <CartContext.Provider value={value}>
        <Sidebar open={open} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ProductSection />
      </CartContext.Provider>
    </>
  );
}

export default App;