import React from 'react'
import { useState } from 'react'
import { productImages } from './productdata'
import './lightbox.css'

const LightBox = ({ dispatch ,state }) => {
    const [currentImg,setCurrentImg] = useState(0)
    function changeMask(curr){
        productImages.forEach(product=>product.render = false)
        productImages.filter(product => product.id  === curr)[0].render = true
    }
    function goNext(){
        if (currentImg === productImages.length - 1) setCurrentImg(0)
        else setCurrentImg(currentImg + 1)
        changeMask(currentImg)
        
    }
    function goPrev(){
        if (currentImg === 0) setCurrentImg(productImages.length - 1)
        else setCurrentImg(currentImg - 1)
        changeMask(currentImg)
    }
    return (
        <div className={`lightbox__container ${state.isLightBoxOpen ? 'lightbox-active' : ''}`}>
            <div className='lightbox__wrapper'>
                <div className='lightbox-main-image'>
                    <div className='lightbox-prev' onClick={goPrev}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    </div>
                    <img src={productImages[currentImg].img} alt="lightbox-sneaker" />
                    <div className='lightbox-next' onClick={goNext}>
                        <svg  width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    </div>
                </div>
                <div className='lightbox-thumb-images'>
                    {
                        productImages.map((product) =>
                            <div  className={`lightbox-thumb-image__wrapper ${product.render ? 'lightbox-img-active' : ''}`} key={product.id} >
                                <img src={product.thumbnail} alt="thumbnail" className='lightbox-thumb-image' />
                            </div>
                        )
                    }
                </div>
                <div className='close-lightbox' onClick={()=> dispatch({type:'TRIGGER_LIGHTBOX'})}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill={`#fff`} fillRule="evenodd" /></svg>
                </div>
            </div>
        </div>
    )
}

export default LightBox;