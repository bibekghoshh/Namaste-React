import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-gradient-to-b from-black'>
      <div>
        <img className='w-36' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      </div>
      <div className='mr-10'>
        <div className='flex items-center gap-2'>
          <img className='w-12 rounded' src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="" />
          <button className='px-1 py-1 font-medium text-white rounded bg-rose-500'>Sign out</button>
        </div>
      </div>
    </div>
  )
}

export default Header;