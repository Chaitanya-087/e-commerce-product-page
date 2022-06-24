import React from 'react'
import { useContext } from 'react';
import Delete from '../../images/icon-delete.svg'
import { CartContext } from '../../helpers/CartContext';
import './cart.css'

const Cart = ({cart,state}) => {
  const {isCartOpen} = state;
  const {setCart} = useContext(CartContext)
  return (
    <div>
        <div className={`cart__container ${isCartOpen ? 'cart-active':''}`} >

          <div className="cart__wrapper">
            <div className='cart-title__box'>
              <h3 className='cart__title'>cart</h3>
            </div>
              <div className='cart__items'>
                {Object.keys(cart).length ?
                  <>
                      <div className='cart-details'>
                        <img src={cart.productThumbnail} alt={`${cart.title}`} className='cart-item-thumbnail' />
                        <div className='item-desc'>
                          <p className='item-title'>{cart.title}</p>
                          <div className='pricing'>
                              <span className='cummulative'>${cart.price} x {cart.items}</span>
                              <b className='total'>${cart.price * cart.items}</b>
                          </div>
                        </div>
                          <div className='delete' onClick={()=>setCart({})}>
                              <img src={Delete} alt="" />
                          </div>
                      </div>
                      <button className='btn-checkout'>checkout</button>
                  </>
                  :
                  <p className='cart-empty'>Your cart is empty</p>
              }
              </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
