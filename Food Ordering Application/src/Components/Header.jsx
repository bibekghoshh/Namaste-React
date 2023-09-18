import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-logo'>
            <img className='app-logo' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392527.jpg" alt="App Logo" />
        </div>
        <div>
            <ul className='list-item'>
                <li>Offers</li>
                <li>Help</li>
                <li>Sign In</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
};

export default Header;