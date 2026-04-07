import React from 'react'

const Header = () => {

  return (
    <div>
        <div className="flex items-center justify-around">
            <div className="img-container">
                <img src="./logo.png" alt="Logo" height={100} width={200}/>
            </div>

            <div className=''>
                <nav className=''>
                    <ul className='flex gap-2'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header