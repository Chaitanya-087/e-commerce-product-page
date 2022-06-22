import Thumbnail1 from  '../../images/image-product-1-thumbnail.jpg';
import Thumbnail2 from '../../images/image-product-2-thumbnail.jpg';
import Thumbnail3 from '../../images/image-product-3-thumbnail.jpg';
import Thumbnail4 from '../../images/image-product-4-thumbnail.jpg';
import Img1 from '../../images/image-product-1.jpg';
import Img2 from '../../images/image-product-2.jpg';
import Img3 from '../../images/image-product-3.jpg';
import Img4 from '../../images/image-product-4.jpg';


export const productdetails = {
    company:'sneaker company',
    title:'Fall Limited Edition Sneakers',
    desc:"These low-profile sneakers are your perfect causal wear companion. Featuring a durable rubber outer sole,they'll withstand everything the weather can offer.",
    originalPrice : 250,
    discountedPrice : 125,
    discount:50,
}

export const productImages = [
    {
        'id':0,
        'thumbnail': Thumbnail1,
        'img':Img1,
        'render':true
    },
    {
        'id':1,
        'thumbnail': Thumbnail2,
        'img':Img2,
        'render':false
    },
    {
        'id':2,
        'thumbnail': Thumbnail3,
        'img':Img3,
        'render':false
    },
    {
        'id':3,
        'thumbnail': Thumbnail4,
        'img':Img4,  
        'render':false
    }
]
