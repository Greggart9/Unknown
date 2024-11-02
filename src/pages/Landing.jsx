import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const Landing = () => {
return (
    <>
        <div className='bg-purple-900 w-screen flex justify-center '>
            <Navbar />
        </div>

        {/* HERO HEADER SECTION */}
        <section className='bg-purple-800 text-white w-screen h-[848px] md:h-[1108px] py-[64px] md:py-[96px] gap-[64px] flex flex-col items-center justify-center'>
            {/* FIRST CONTAINER */}
            <div className=' flex justify-center w-[90%] h-[416px] md:h-[336px] md:gap-8 '>
                <div className='w-[95%] h-[100%] gap-8 md:gap-[48px]'>
                    {/* SECTION 1 UP */}
                    <div className='w-[100%] md:w-[85%] h-[100%] flex flex-col justify-between'>
                        <div className='w-[100%] h-[258px] md:h-[228px] flex flex-col md:justify-between'>
                            <p className=' text-3xl md:text-4xl lg:text-5xl w-[100%] md:leading-10 font-medium h-[60%]'>
                                We design physical <span className='underline underline-offset-8 '>experiences</span> that create more happy in the world
                            </p>
                        
                            <p className='h-[40%] md:max-w-[80%] lg:max-w-[60%]'>
                                — We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.
                            </p>
                        </div>
                        

                        {/* SECTION 1 BUTTONS */}
                        <div className='flex flex-col md:flex-row gap-[12px] w-[100%] h-[108px] md:h-[60px]'>
                            <div className='flex items-center'>
                                <button className='flex justify-center w-[100%] h-[48px] md:h-[38px] text-purple-900 items-center px-3 py-2 gap-1 bg-white rounded '>
                                    <img  src={img1} alt='button icon' className=' md:w-4 md:h-4' />
                                    <p className='font-medium'>Showreel</p>
                                </button>
                            </div>

                            <div className='flex items-center'>
                                <button className=' text-white w-[100%] h-[48px] md:h-[38px] px-3 py-2 gap-1 bg-purple-600 rounded font-medium '>Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECOND CONTAINER */}
            <div className=' flex justify-center w-[90%] h-[240px] md:h-[516px] items-center '>
                <div className='w-[95%] h-[100%]'>
                    <img  src={img2} alt='Interior design example' className='w-[100%] h-[100%]' />
                </div>
            </div>
        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className='bg-purple-800 flex justify-center text-white w-screen pb-[64px] md:pb-[96px] h-[260px] md:h-[200px]'>
            <div className=' w-[90%] h-[196] md:h-[104px] flex flex-col gap-[32px] items-center'>
                <div className=' max-w-[95%] h-[24px] text-center'>
                    <p className='font-medium text-lg'>We’ve worked with some great startups</p>
                </div>

                <div className=' flex flex-wrap items-center w-[95%] h-[48px] gap-4 justify-between'>
                    <img src='/image/img3.png' alt='Startup 1' className='w-[46%] md:w-[14%]' />
                    <img src='/image/img4.png' alt='Startup 2' className='w-[46%] md:w-[14%]' />
                    <img src='/image/img5.png' alt='Startup 3' className='w-[46%] md:w-[14%]' />
                    <img src='/image/img6.png' alt='Startup 4' className='w-[46%] md:w-[14%]' />
                    <img src='/image/img7.png' alt='Startup 5' className='w-[46%] md:w-[14%]' />
                    <img src='/image/img8.png' alt='Startup 6' className='w-[46%] md:w-[14%]' />
                </div>
            </div>
        </section>

        {/* FEATURES SECTION */}
        <section className='bg-gray-50 w-screen h-[1008px] pb-16 md:pb-0 md:h-[1012px] flex flex-col items-center justify-center'>
            {/* SECTION 3.1 */}
            <div className='w-[100%] flex justify-center h-[768px] md:h-[496px] pt-[64px] md:pt-[96px] pb-[112px] md:pb-[160px] gap-12 md:gap-[64px]'>
                <div className='flex flex-col md:flex-row justify-between gap-6 w-[90%] h-[100%]'>
                    {/* Heading and Supporting texts */}
                    <div className='w-[100%] md:w-[45%] h-[35%] md:h-[90%] md:gap-[20px]'>
                        <div className='gap-[12px] w-[100%] md:h-[40%]'>
                            <p className='text-purple-700 h-[30%] md:h-[40%] font-semibold text-lg md:text-base'>Who we are</p>
                            <p className=' flex items-center text-black font-bold h-[70%] md:h-[60%] text-2xl lg:text-2xl md:text-xl'>Commercial interior designers</p>
                        </div>
                        <p className='w-[100%] h-[60%] mt-2 text-lg md:text-xs lg:text-base text-gray-600 '>
                            Untitled are a commercial interior design studio. We specialise in customised office design, restaurant design, shop design, and studio design.
                        </p>
                    </div>

                    {/* Content */}
                    <div className=' w-[100%] md:w-[45%] h-[65%] md:h-[100%] flex flex-col gap-3 md:justify-between'>
                        <div className='flex w-[100%] h-[45%] gap-4'>
                            <img src='/image/img9.png' alt='Icon' className='w-[48px] h-[48px]' />

                            <div className='w-[90%] h-[100%] gap-[20px]'>
                                <p className='h-[30%] flex items-center font-bold text-xl md:text-lg lg:text-xl'>Share team inboxes</p>
                                <p className='h-[70%] text-lg md:text-xs lg:text-base'>
                                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                                </p>
                            </div>
                        </div>

                        <div className='flex w-[100%] h-[45%] gap-4'>
                            <img src='/image/img10.png' alt='Icon' className='w-[48px] h-[48px]' />

                            <div className='w-[90%] h-[100%] gap-[20px]'>
                                <p className='h-[30%] flex items-center font-bold text-xl md:text-lg lg:text-xl'>Deliver instant answers</p>
                                <p className='h-[70%] text-lg md:text-xs lg:text-base'>
                                    An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3.2 */}
            <div className=' flex bg-white justify-center w-screen h-[240px] md:h-[612px] -mt-20 md:pb-[96px]'>
                <div className='flex justify-center  w-[100%] h-[100%]'>
                    <img src='/image/img11.png' alt='Interior design example' className='w-[90%] h-[100%]'/>
                </div>
            </div>
        </section>

        {/* Testimonial Content */}
        <section className='flex justify-center items-center w-screen h-[652px] md:h-[520px] py-[64px] md:py-[96px] bg-gray-50'>
            <div className='flex justify-center w-[90%] h-[524px] md:h-[328px]'>
                <div className='flex flex-col md:flex-row w-[100%] h-[100%] justify-between'>
                    <img src='/image/img12.png' alt='Testimonial-image' className=' max-w-[200px] md:max-w-[328px] max-h-[200px] md:max-h-[328px] rounded-2xl' />

                    <div className=' w-[100%] md:w-[50%] h-[50%] md:h-[80%]'>
                        <div className=' w-[100%] h-[70%] flex flex-col'>
                            <img src='/image/img13.png' alt='Five stars' className='max-w-[116px] max-h-[20px] mb-3 ' />

                            <p className=' text-gray-900 md:leading-tight text-xl lg:text-3xl font-medium w-[100%]'>
                                Untitled really understood the paired-back aesthetic that we were looking for. We couldn’t be happier with our new offices.
                            </p>
                        </div>

                        <div className=' w-[100%] h-[30%] gap-[4px]'>
                            <p className='h-[28px] font-semibold text-xl md:text-lg leading-7 text-gray-900'>— Candice Wu</p>
                            <p className='h-[24px] font-normal text-xl md:text-xs leading-6 text-gray-600'>Head of Design, Layers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Metric Section */}
        <section className='flex justify-center items-center w-screen h-[624px] md:h-[432px] py-12 md:py-24 gap-12 md:gap-16 bg-white'>
            <div className='flex justify-center  items-center w-[90%] h-[550px] md:h-[240px] md:py-8 gap-4 md:gap-16'>
                <div className='flex flex-col md:flex-row justify-between items-center md:w-[95%] w-[100%] h-[100%] md:h-[240px] md:border-t md:border-b border-gray-200 py-8 md:py-16 '>
                    <div>
                        <div className=' h-[112px] gap-5'>
                            <p className='h-[72px] leading-[72px] text-center font-semibold text-6xl md:text-4xl lg:text-[3.75rem] text-gray-900'>400+</p>
                            <p className='h-[28px] text-xl md:text-lg font-medium leading-7 text-center'>Projects completed</p>
                        </div>
                    </div>

                    <div>
                        <div className='h-[112px] gap-5'>
                            <p className=' h-[72px] leading-[72px] text-center font-semibold text-6xl md:text-4xl lg:text-[3.75rem] text-gray-900'>600%</p>
                            <p className=' h-[28px] text-xl md:text-lg  font-medium leading-7 text-center'>Return on investment</p>
                        </div>
                    </div>

                    <div>
                        <div className=' h-[112px] gap-5'>
                            <p className=' h-[72px] leading-[72px] text-center font-semibold text-6xl md:text-4xl lg:text-[3.75rem] text-gray-900'>10k</p>
                            <p className='h-[28px] text-xl md:text-lg  font-medium leading-7 text-center'>Global downloads</p>
                        </div>
                    </div>

                    <div>
                        <div className='h-[112px] gap-5'>
                            <p className=' h-[72px] leading-[72px] text-center font-semibold text-6xl md:text-4xl lg:text-[3.75rem] text-gray-900'>200+</p>
                            <p className='h-[28px] text-xl md:text-lg font-medium leading-7 text-center'>5-star reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact sections */}
        <section className=' flex justify-center w-screen h-[886px] md:h-[960px] pb-16 md:pb-[96px] gap-12 md:gap-16 '>
            <div className=' flex justify-center w-[98%] md:w-[95%] h-[864px] px-8 gap-8 lg:gap-32'>
                <img src='/image/img14.png' alt='Contact' className='hidden md:block  md:w-[52%] lg:w-[40%] md:h-[864px]' />

                <div className='flex justify-center items-center w-[100%] md:w-[50%] lg:w-[30%] h-[100%] md:h-[864px]'>
                    <div className='flex flex-col w-[100%] h-[100%] gap-12'>

                        {/* Heading and Supporting text */}
                        <div className=' w-[100%] flex flex-col gap-3 h-[110px] md:h-[15%]'>
                            <p className='w-[100%] h-[45%] font-semibold text-3xl leading-7 text-gray-900'>Let's start your project</p>
                            <p className='w-[100%] h-[45%] font-normal text-xl md:leading-5 text-gray-600'>Our friendly team would love to hear from you.</p>
                        </div>

                        {/* Form */}
                        <form className=' flex flex-col w-[100%] h-[664px] md:h-[85%] gap-8'>
                             {/* Form field  */}
                            <div className='w-[100%] h-[584px] md:h-[490px] gap-[24px] justify-between'>
                                {/* First and Last name */}
                                <div className=' flex flex-col md:flex-row gap-[24px] md:gap-11 w-[100%]  md:h-[70px]  mb-5'>
                                    <div className='flex flex-col w-[100%] md:w-[45%] h-[70px] gap-[6px]'>
                                        <label htmlFor='firstName' className='text-gray-700 w-[71px] h-[20px] text-xs leading-5 font-medium'>First Name</label>
                                        <div className='flex justify-center items-center w-[100%] h-[44px] gap-2 border border-gray-300 py-[10px] px-[14px] rounded'>
                                            <input type='text' id='firstName' placeholder='First Name' className='w-[100%] bg-transparent h-[24px] gap-2 outline-none'  /></div>
                                    </div>

                                    <div className='flex flex-col w-[100%] md:w-[45%]  h-[70px] gap-[6px] '>
                                        <label htmlFor='lastName' className='text-gray-700 w-[71px] h-[20px] text-xs leading-5 font-medium'>last Name</label>
                                        <div className='flex justify-center items-center w-[100%] h-[44px] gap-2 border border-gray-300 py-[10px] px-[14px] rounded'>
                                            <input type='text' id='lastName' placeholder='lastName' className='w-[100%]  bg-transparent h-[24px] gap-2 outline-none'  /></div>
                                        </div>
                                </div>

                                {/* Email */}
                                <div className='flex flex-col gap-[6px] w-[100%] h-[70px] mb-5 '>
                                    <label htmlFor='email' className='text-gray-700 w-[36px] h-[20px] text-xs leading-5 font-medium'>Email</label>
                                    
                                    <div className='flex justify-center items-center w-[100%] h-[44px] gap-2 border border-gray-300 py-[10px] px-[14px] rounded'>
                                    <input type='email' id='email' placeholder='greggart9@gmail.com' className='w-[100%]  bg-transparent h-[24px] gap-2 outline-none p-2 rounded' />
                                    </div>
                                </div>
                                
                                {/* Phone Number */}
                                <div className='flex flex-col  gap-[6px] w-[100%] h-[70px] mb-5'>
                                    <label htmlFor='phone' className='text-gray-700 w-[98px] h-[20px] text-xs leading-5 font-medium'>Phone</label>
                                    <div className='flex gap-2 w-[100%] h-[44px] border border-gray-300 p-2 rounded'>
                                        <select id='countryCode' className='outline-none text-gray-900 text-lg  bg-transparent font-normal leading-6'>
                                            <option value='+1'>+1</option>
                                            <option value='+44'>+44</option>
                                            <option value='+91'>+91</option>
                                            {/* Add more country codes as needed */}
                                        </select>
                                        <input type='text' id='phone' placeholder='+1 (555) 000-0000' className=' bg-transparent outline-none p-2 rounded flex-grow' />
                                    </div>
                                </div>

                                {/* Text Box */}
                                <div className='w-[100%] h-[160px] gap-[6px] mb-5 '>
                                <div className='flex flex-col w-[100%] h-[160px] gap-[6px]'>
                                    <label htmlFor='message' className='text-gray-700 w-[61px] h-[20px] font-medium text-sm leading-5'>Message</label>
                                    <textarea id='message' rows='4' placeholder='Leave us a message...' className='border border-gray-300 p-2 rounded'></textarea>
                                </div>
                                </div>

                                {/* Check box */}
                                <div className=' flex items-center w-[100%] h-[24px] gap-3 mb-5'>
                                    <input type='checkbox' id='subscribe' className='w-[20px] h-[22px] pt-[2px]' />
                                    <label htmlFor='subscribe' className='text-gray-600 md:text-lg font-normal leading-6'>You agree to our friendly <span className='underline underline-offset-4'>privacy policy</span>.</label>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className='w-[1005] h-[48px] md:h-[48px] gap-4'>
                                <button className='w-[100%] h-[48px] bg-purple-600 text-white font-medium rounded-lg border border-purple-600 py-3 px-5'>Send message</button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* ---------Section divider--------- */}
        <section className='w-screen h-[1px] flex justify-center'>
            <div className='w-[1280px] h-[2px] px-8'>
                <hr/>

            </div>
        </section>

        {/* Footer */}
        <footer className='w-screen h-[588px] md:h-[320px] py-12 md:pt-16 md:pb-12 gap-12 md:gap-16 flex flex-col items-center justify-center'>
             {/* Container */}
            <div className=' w-[90%] h-[50%] flex justify-center'>

                {/* Content */}
                <div className=' flex  flex-col md:flex-row w-[100%] md:w-[93%] h-[88px] justify-between'>

                    {/* Logo and Links */}
                    <div className='flex flex-col md:justify-between w-[100%] md:w-[58%] h-[160px] md:h-[88px] md:gap-8'>
                      {/* Logo */}
                        <div className=' flex text-center items-center w-[100%] h-[32px]'>
                            <img src="/image/Logo.png" alt="logo" className='w-[32px] h-[32px]'/>
                            <h2 className='w-[100px] h-[32px] text-center text-lg md:text-normal lg:text-lg font-semibold '>Untitled UI</h2>
                        </div>

                        {/* footer links */}
                        
                        <div className='md:w-[100%] h-[96px] md:h-[24px] justify-between flex flex-wrap items-center'>
                            <a href='/' className='text-gray-600  lg:text-lg font-semibold leading-6'>Overview</a>
                            <a href='/' className='text-gray-600 lg:text-lg font-semibold leading-6'>Features</a>
                            <a href='/' className='text-gray-600 lg:text-lg font-semibold leading-6'>Pricing</a>
                            <a href='/' className='text-gray-600 lg:text-lg font-semibold leading-6'>Careers</a>
                            <a href='/' className='text-gray-600 lg:text-lg font-semibold leading-6'>Help</a>
                            <a href='/' className='text-gray-600 lg:text-lg font-semibold leading-6'>Privacy</a>
                        </div>

                    </div>
                     
                     {/* Newsletter */}
                    <div  className='flex flex-col justify-between w-[100%] md:w-[38%] h-[140px] md:h-[100%] gap-4'>
                        <p className='h-[20px] text-gray-900 leading-5 font-semibold md:text-sm '>Stay up to date</p>

                        <div className=' flex flex-col md:flex-row w-[100%] h-[104px] md:h-[44px] gap-4'>
                            <div className='w-[100%] md:w-[229px] border border-gray-300 rounded-lg flex items-center h-[44px] justify-center'>
                                <input type='email' id='email' placeholder='Enter your email' className='w-[90%] h-[24px] outline-none bg-transparent'  />
                            </div>
                            
                            <button className='border bg-purple-600 text-white border-purple-600 h-[44px] text-lg md:text-sm  md:w-[30%] rounded-lg px-[18px] py-[10px]'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
             
             {/* Container 2 */}
            <div className='w-[90%] md:w-[90%] h-[96px] md:h-[40%] flex justify-center'>
                <div className=' flex flex-col-reverse md:flex-row justify-between w-[93%] h-[100%] md:h-[56px] md:border-t-2 border-gray-200 pt-8'>
                    <p className='text-gray-500 text-lg font-normal leading-6 md:w-[60%] h-[24px]'>© 2024 Untitled UI. All rights reserved.</p>

                    <div className='md:w-[30%] h-[24px] md:justify-end gap-4 flex'>
                        <a href='/' className='text-gray-500 text-lg font-normal leading-6'>Terms</a>
                        <a href='/' className='text-gray-500 text-lg font-normal leading-6'>Privacy</a>
                        <a href='/' className='text-gray-500 text-lg font-normal leading-6'>Cookies</a>
                    </div>

                </div>  
            </div>

        </footer>
    </>
)
}

export default Landing