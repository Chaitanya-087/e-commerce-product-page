import './navbar.css'
import React, { useContext, useState } from "react";
import { CartContext } from "../../helpers/CartContext";
import Cart from "./Cart";
import HeroAvatar from '../../images/image-avatar.png';
import MenuIcon from '../../images/icon-menu.svg';
import Logo from '../../images/logo.svg';

const Navbar = ({ toggle }) => {


    const { cart } = useContext(CartContext)
    const [isCartOpen, setCartOpen] = useState(false)
    const [isLoginBoxOpen, setLoginBoxOpen] = useState(false)

    return (
        <>
            <header className="navbar__container">
                <div className="navbar__wrapper">
                    <div className="menu-icon" onClick={toggle}>
                        <img src={MenuIcon} alt="menu-icon" />
                    </div>
                    <a className="navbar__brand" href="/" title='home'>
                        <img src={Logo} alt="" />
                    </a>
                    <nav className="menu__wrapper">
                        <ul className="menu">
                            <li className="menu__item">
                                <a className="menu__link" href='collections'>Collections</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href='men'>Men</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href='women'>Women</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href='about'>About</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href='contact'>Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="user">
                        <div className="cart" >
                            <svg onClick={() => { setCartOpen(!isCartOpen) }} width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#808080" fillRule="nonzero" /></svg>
                            <Cart cart={cart} state={{ isCartOpen, setCartOpen }} />
                            {cart.items &&
                                <span className="cart-notification">
                                    {cart.items > 9 ? '9+' : cart.items}
                                </span>}
                        </div>
                        <div className="user__signin">
                            <img src={HeroAvatar} alt="userpic" onClick={() => setLoginBoxOpen(!isLoginBoxOpen)} />
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Navbar;
