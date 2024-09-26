import React from 'react'
// import Navitems from './Navitems'

const Header = () => {
  return (
    <div className='navMax'>
        
    <div className='logo-div'>
        <div className='logo'>
            <img src='https://goodbois.de/cdn/shop/files/GOODBOIS_CLASSIC_LOGO_2018_PNG.png?v=1613767613' alt=''/>
        </div>
        <div className='searchBox'>
        <input type='search' placeholder='Search..'/>
      <div className='inp-inside-icon'>
      <i className='bi bi-search'></i>
      </div>
        </div>
    </div>

    <div className='icons'>
        <div className='icon-dollar icon inp-inside-icon'>
            <i className='"bi bi-currency-dollar'></i>
        </div>
        <div className='icon-light-theme icon inp-inside-icon'>
            <i className='bi bi-moon'></i>
        </div>
        <div className='icon-wishlist icon'>
            <div className='inp-inside-icon'>
                <i className='bi bi-heart'></i>
            </div>
            <div className='icon-data'>
                <h6>Wishlist</h6>
                <p>0 items</p>
            </div>
        </div>
        <div className='icon-compare icon'>
        <div className='inp-inside-icon '>
                <i className='bi bi-sliders'></i>
            </div>
            <div className='icon-data'>
                <h6>Compare</h6>
                <p>0 items</p>
            </div>
        </div>
        <div className='icon-cart icon'>
        <div className='inp-inside-icon'>
                <i className='bi bi-bag'></i>
            </div>
            <div className='icon-data'>
                <h6>Cart(0)</h6>
                <p>$0.0</p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Header