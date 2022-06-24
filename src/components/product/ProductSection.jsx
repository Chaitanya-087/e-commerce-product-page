import "./productsection.css";
import LightBox from "../product/LightBox";
import { CartContext } from "../../helpers/CartContext";
import Plus from "../../images/icon-plus.svg";
import Minus from "../../images/icon-minus.svg";
import { useMediaQuery } from "react-responsive";
import { React,useContext, useReducer } from "react";
import { productImages, productdetails } from "./productdata";


function productReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    case "DECREMENT":
      return { ...state, count: (state.count === 1 ? 1 : state.count - 1) }
    case "TRIGGER_LIGHTBOX":
      return { ...state, isLightBoxOpen: !state.isLightBoxOpen }
    case "GO_PREV":
      if (state.imageIndex === 0) return {...state,imageIndex:payload.length - 1}
      else return {...state,imageIndex:state.imageIndex - 1}
    case "GO_NEXT":
      if (state.imageIndex === payload.length - 1) return {...state,imageIndex:0}
      else return {...state,imageIndex:state.imageIndex + 1}
    case "CHANGE_IMAGE":
      productImages.forEach(product=>product.render = false)
      productImages.filter(product=>product.id === payload.id).forEach(product=>product.render = true)
      return {...state,imageIndex:payload.id}
    default:
      return new Error('use included actions!')
  }
}


const ProductSection = () => {
  const [state, dispatch] = useReducer(productReducer, { count: 1, imageIndex: 0, isLightBoxOpen: false })
  const isdesktop = useMediaQuery({ query: "(min-width:900px)" })
  const isMobile = useMediaQuery({ query: "(max-width:48em)" })
  const { cart, setCart,setCartNotify } = useContext(CartContext)
  return (
    <section className='product__container'>
      <div className='product__wrapper'>
        <div className='product-image__wrapper'>
          <div className='product-image center' >
            <img src={productImages[state.imageIndex].img} alt='product' className='fit-image' onClick={() => dispatch({ type: 'TRIGGER_LIGHTBOX' })} />
            {isMobile && (
              <>
                <div className='mobile-prev' onClick={()=>{dispatch({type:'GO_PREV',payload:productImages}); state.isLightBoxOpen=false}}>
                  <svg
                    width='12'
                    height='18'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M11 1 3 9l8 8'
                      stroke='#1D2026'
                      strokeWidth='3'
                      fill='none'
                      fillRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='mobile-next' onClick={()=>dispatch({type:'GO_NEXT',payload:productImages})}>
                  <svg
                    width='13'
                    height='18'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='m2 1 8 8-8 8'
                      stroke='#1D2026'
                      strokeWidth='3'
                      fill='none'
                      fillRule='evenodd'
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
          {isdesktop && (
            <div className='thumbnails center'>
              {productImages.map((product) => (
                <div
                  key={product.id}
                  onClick={() => dispatch({type:'CHANGE_IMAGE',payload:product})}
                  className={`thumbnail-img__wrapper ${product.render ? "img-active" : ""
                    }`}>
                  <img src={product.thumbnail} alt={`${product.thumbnail}`} />
                </div>
              ))}
            </div>
          )}
        </div>
        {isdesktop && state.isLightBoxOpen && (
          <LightBox
            state={state}
            dispatch={dispatch}
            productImages={productImages}
          />
        )}
        <div className='product-details__wrapper'>
          <div className='product-details'>
            <span className='product-company'>{productdetails.company}</span>
            <h1
              className='product-title'
              >
              {productdetails.title}
            </h1>
            <p className='product-desc'>{productdetails.desc}</p>
            <div className='price__wrapper'>
              <div className='discount-price'>
                <h2>${productdetails.discountedPrice}.00</h2>
                <span className='discount center'>
                  {productdetails.discount}%
                </span>
              </div>
              <div className='original-price'>
                <s>${productdetails.originalPrice}.00</s>
              </div>
            </div>
            <div className='cart-control'>
              <div className='counter'>
                <img src={Minus} onClick={() => dispatch({ type: 'DECREMENT' })} alt='minus-icon' className='dec' />
                <span>{state.count}</span>
                <img src={Plus} onClick={() => dispatch({ type: 'INCREMENT' })} alt='plus-icon' className='inc' />
              </div>
              <button className='add-to-cart' onClick={() => {setCart({...cart,items: state.count, productThumbnail:productImages[0].thumbnail, title:productdetails.title, price:productdetails.discountedPrice});setCartNotify(true)}}>
                <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                    fill='#fff'
                    fillRule='nonzero'
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
