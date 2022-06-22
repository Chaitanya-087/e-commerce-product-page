import React from 'react'
import CloseIcon from '../../images/icon-close.svg'
import './sidebar.css'
const sidebar = ({open,toggle}) => {
  return (
    <>
      <aside className={`sidebar__container ${open ? 'sidebar-active':''}`} onClick={toggle}>
        <div className={`sidebar__wrapper ${open ? 'sidebar-active':''}`}>
          <div className='close-icon' onClick={toggle}>
            <img src={CloseIcon} alt="close-icon" />
          </div>
          <nav className="sidebar__menu-wrapper">
            <ul className='sidebar__menu'>
              <li className="sidebar__menu-item">
                <a className="sidebar__menu-link" href='/collections'>Collections</a>
              </li>
              <li className="sidebar__menu-item">
                <a className="sidebar__menu-link" href='/men'>Men</a>
              </li>
              <li className="sidebar__menu-item">
                <a className="sidebar__menu-link" href='/women'>Women</a>
              </li>
              <li className="sidebar__menu-item">
                <a className="sidebar__menu-link" href='/about'>About</a>
              </li>
              <li className="sidebar__menu-item">
                <a className="sidebar__menu-link" href='/contact'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default sidebar
