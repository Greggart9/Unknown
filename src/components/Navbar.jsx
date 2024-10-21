import React from 'react'

const Navbar = ({ className, style }) => {
return (
    <>
    <nav className="flex justify-between items-center w-5/6 gap-8 text-white p-3 navbar navbar-expand-lg navbar-light bg-light">
        <div className='flex justify-center items-center gap-4'>
        {/* Title */}
            <div className='flex justify-end items-center'>
                <img src="\image\Logo.png" alt="logo" className='w-8 h-8 '/>
                <h2 className=''>Untitled UI</h2>
            </div>

            {/* NAVBAR LINK */}
            <div>
                <ul className='flex justify-between gap-8 items-center'>
                    <li> <a href='#'>Home</a></li>
                    <li>
                        <select name="Products" id="Products" className='bg-purple-900 outline-none'>
                            <option value="">Products</option>
                            <option value="/home">Product 1</option>
                            <option value="/home">Product 2</option>
                            <option value="/home">Product 3</option>
                        </select>   
                    </li>
                    <li>
                        <select name="Resources" id="Resources" className='bg-purple-900  outline-none'>
                            <option value="">Resources</option>
                            <option value="/home">Resource 1</option>
                            <option value="/home">Resource 2</option>
                            <option value="/home">Resource 3</option>
                        </select>   
                    </li>
                </ul>
            </div>
        </div>

            {/* NAVBAR BUTTON */}
            <div>
                <button className=' hover:bg-purple-600  px-4 py-2 rounded-lg'>Log in</button>
                <button className='hover:bg-purple-600 px-4 py-2 rounded-lg'>Sign up</button>
            </div>
        
     </nav>
    </>
)
}

export default Navbar