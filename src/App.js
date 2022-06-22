import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar'
import ProductSection from './components/product/ProductSection';
import { CartContext } from './components/CartContext';

const App = () => {
  const [open, setOpen] = useState(false)
  const [cart,setCart] = useState({})
  const [cartNotify,setCartNotify] = useState(false)
  function toggle() {
    setOpen(!open)
  }
  
  return (
    <>
      <CartContext.Provider value={{cart,setCart,cartNotify,setCartNotify}}>
        <Sidebar open={open} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ProductSection />
      </CartContext.Provider>
    </>
  );
}

export default App;