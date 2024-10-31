import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ className, style }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
return (
    <>
    <nav className="flex justify-between items-center w-screen h-[80px] gap-8 text-white py-3 navbar navbar-expand-lg navbar-light bg-purple-800">
        <header className='flex justify-center items-center w-[100%] h-[100%]'>
            <div className='w-[90%] h-[44px] flex justify-between items-center'>
                <div className=' flex justify-center items-center h-[32px] gap-[40px]'>
                {/* Logo */}
                    <div className='flex text-center w-[142px] h-[32px]'>
                        <img src="\image\Logo.png" alt="logo" className='w-[32px] h-[32px]'/>
                        <h2 className='w-[100px] h-[32px] left-[42px]'>Untitled UI</h2>
                    </div>

                    {/* Navigation */}
                    <div className='hidden md:flex'>
                        <ul className='flex items-center h-[32px] gap-[32px]'>
                            <li className='W-[46px] h-[24px] gap-[8px]'> <a href='#'>Home</a></li>
                            <li className='W-[98px] h-[32px] py-[4px]'>
                                <select name="Products" id="Products" className='bg-purple-800 outline-none'>
                                    <option value="">Products</option>
                                    <option value="/home">Product 1</option>
                                    <option value="/home">Product 2</option>
                                    <option value="/home">Product 3</option>
                                </select>   
                            </li>
                            <li className='W-[110px] h-[32px] py-[4px]'>
                                <select name="Resources" id="Resources" className='bg-purple-800  outline-none'>
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
                <div className=' hidden md:flex h-[44px] gap-[12px]'>
                        <button className=' hover:bg-purple-600 w-[83px] h-[44px] px-[18px] py-[10px] rounded-lg'>Log in</button>
                        <button className='hover:bg-purple-600  w-[95px] h-[44px] px-[18px] py-[10px] rounded-lg'>Sign up</button>
                </div>

                {/* BURGER ICON - Show only on screens smaller than 'sm' */}
            <button 
                className="sm:hidden flex items-center justify-center w-[44px] h-[44px] rounded-lg hover:bg-purple-600"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <GiHamburgerMenu className="w-6 h-6 text-white" /> 
            </button>

                
            </div>
        </header>
     </nav>
    </>
)
}

export default Navbar