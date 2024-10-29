import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
return (
    <>
        <div className='bg-purple-900 w-screen flex justify-center '>
            <Navbar />
        </div>

        {/* HERO HEADER SECTION */}
        <section className='bg-purple-800 text-white w-screen h-[1108px] py-[96px] gap-[64px] flex flex-col items-center justify-center'>
            {/* FIRST CONTAINER */}
            <div className='w-[88.89%] md:[70%] h-[416px] md:h-[336px] gap-8 '>
                <div className='w-11/12 gap-[48px]'>
                    {/* SECTION 1 UP */}
                    <div className='h-80 flex flex-col justify-between'>
                        <div className=''>
                            <p className=' text-[36px] md:text-4xl lg:text-6xl leading-10 font-medium h-[144px]'>
                                We design physical <span className='underline underline-offset-8 overflow-hidden text-ellipsis whitespace-nowrap'>experiences</span> that create more happy in the world
                            </p>
                        </div>
                        <p className='h-[60px] '>
                            — We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.
                        </p>

                        {/* SECTION 1 BUTTONS */}
                        <div className='flex flex-col md:flex-row gap-[12px] h-[60px]'>
                            <div className='flex items-center'>
                                <button className='flex justify-center text-purple-900 items-center px-3 py-2 gap-1 bg-white rounded '>
                                    <img src='\image\img1.png' alt='button icon' className=' md:w-4 md:h-4' />
                                    <p className='font-medium'>Showreel</p>
                                </button>
                            </div>

                            <div className='flex items-center'>
                                <button className=' text-white px-3 py-2 gap-1 bg-purple-600 rounded font-medium '>Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECOND CONTAINER */}
            <div className=' flex max-w-[88.89%] h-[516px] justify-center px-[32px] gap-[32px] items-center '>
                <div className='max-w-5/6 h-[516px]'>
                    <img src='\image\img2.png' alt='Interior design example' className=' ' />
                </div>
            </div>
        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className='bg-purple-800 flex justify-center text-white w-screen h-[200px] pt-[96px]'>
            <div className='w-[1280px] h-[104px] flex flex-col gap-[32px] items-center'>
                <div className='w-5/6 h-[24px] text-center'>
                    <p>We’ve worked with some great startups</p>
                </div>

                <div className='flex w-5/6 h-[48px] justify-between'>
                    <img src='/image/img3.png' alt='Startup 1' className='h-8' />
                    <img src='/image/img4.png' alt='Startup 2' className='h-8' />
                    <img src='/image/img5.png' alt='Startup 3' className='h-8' />
                    <img src='/image/img6.png' alt='Startup 4' className='h-8' />
                    <img src='/image/img7.png' alt='Startup 5' className='h-8' />
                    <img src='/image/img8.png' alt='Startup 6' className='h-8' />
                </div>
            </div>
        </section>

        {/* FEATURES SECTION */}
        <section className='w-screen h-[1012px] bg-white'>
            {/* SECTION 3.1 */}
            <div className=' flex justify-center bg-gray-50 h-[396px] pt-[96px] pb-[160px] gap-[64px]'>
                <div className='flex justify-center w-[88.89%] h-[240px]px-32 gap-[96px]'>
                    {/* Heading and Supporting texts */}
                    <div className=' h-[190px] w-[560px] gap-[20px]'>
                        <div className='gap-[12px] w-[560px] h-[80px]'>
                            <p className='text-purple-700 h-[24px] font-semibold text-base'>Who we are</p>
                            <p className='text-black font-semibold h-[44px] text-4xl'>Commercial interior designers</p>
                        </div>
                        <p className='w-[560px] h-[90px] text-xl text-gray-600 leading-[30px]'>
                            Untitled are a commercial interior design studio. We specialise in customised office design, restaurant design, shop design, and studio design.
                        </p>
                    </div>

                    {/* Content */}
                    <div className='w-[560px] h-[240px] gap-[48px]'>
                        <div className='flex w-[560px] h-[96px] gap-[16px]'>
                            <img src='\image\img9.png' alt='Icon' className='w-[48px] h-[48px]' />

                            <div className='w-[496px] h-[96px] gap-[20px]'>
                                <p className='h-[30px] font-semibold text-xl'>Share team inboxes</p>
                                <p className='h-[48px] text-base'>
                                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                                </p>
                            </div>
                        </div>

                        <div className='flex w-[560px] h-[96px] gap-[16px]'>
                            <img src='\image\img10.png' alt='Icon' className='w-[48px] h-[48px]' />

                            <div className='w-[496px] h-[96px] gap-[20px]'>
                                <p className='h-[30px] font-semibold text-xl'>Deliver instant answers</p>
                                <p className='h-[48px] text-base'>
                                    An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3.2 */}
            <div className=' flex justify-center w-screen h-[612px]  pb-[96px]'>
                <div className='w-[1280px] h-[516px] px-[32px]'>
                    <img src='\image\img11.png' alt='Interior design example' className='w-5/6 h-[516px]' />
                </div>
            </div>
        </section>

        {/* Testimonial Content */}
        <section className='flex justify-center items-center w-screen h-[520px] py-[96px] gap-[64px] bg-gray-50'>
            <div className='w-[1280px] h-[328px] px-[32px] gap-[32px]'>
                <div className='flex w-5/6 h-[328px] gap-[128px]'>
                    <img src='\image\img12.png' alt='Testimonial-image' className='w-[328px] h-[328px] rounded-2xl' />

                    <div className='w-[760px] h-[264px] gap-[32px]'>
                        <div className='w-[760px] h-[176px] gap-[24px]'>
                            <img src='\image\img13.png' alt='Five stars' className='w-[116px] h-[20px] gap-[4px]' />

                            <p className='w-[760px] h-[132px] text-gray-900 leading-[44px] text-4xl font-medium'>
                                Untitled really understood the paired-back aesthetic that we were looking for. We couldn’t be happier with our new offices.
                            </p>
                        </div>

                        <div className='w-[760px] h-[56px] gap-[4px]'>
                            <p className='h-[28px] font-semibold text-lg leading-7 text-gray-900'>— Candice Wu</p>
                            <p className='h-[24px] font-normal text-xs leading-6 text-gray-600'>Head of Design, Layers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Metric Section */}
        <section className='flex justify-center items-center w-screen h-[432px] py-24 gap-16 bg-white'>
            <div className='flex justify-center items-center w-[1280px] h-[240px] py-8 gap-16'>
                <div className='flex justify-center items-center w-5/6 h-[240px] border-t border-b border-gray-200 py-16 gap-4'>
                    <div>
                        <div className=' w-[292px] h-[112px] gap-5'>
                            <p className='w-[292px] h-[72px] leading-[72px] text-center font-semibold text-6xl text-gray-900'>400+</p>
                            <p className='w-[292px] h-[28px] text-lg font-medium leading-7 text-center'>Projects completed</p>
                        </div>
                    </div>

                    <div>
                        <div className='w-[292px] h-[112px] gap-5'>
                            <p className='w-[292px] h-[72px] leading-[72px] text-center font-semibold text-6xl text-gray-900'>600%</p>
                            <p className='w-[292px] h-[28px] text-lg font-medium leading-7 text-center'>Return on investment</p>
                        </div>
                    </div>

                    <div>
                        <div className='w-[292px] h-[112px] gap-5'>
                            <p className='w-[292px] h-[72px] leading-[72px] text-center font-semibold text-6xl text-gray-900'>10k</p>
                            <p className='w-[292px] h-[28px] text-lg font-medium leading-7 text-center'>Global downloads</p>
                        </div>
                    </div>

                    <div>
                        <div className='w-[292px] h-[112px] gap-5'>
                            <p className='w-[292px] h-[72px] leading-[72px] text-center font-semibold text-6xl text-gray-900'>200+</p>
                            <p className='w-[292px] h-[28px] text-lg font-medium leading-7 text-center'>5-star reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact sections */}
        <section className=' flex justify-center w-screen h-[960px] pb-[96px] gap-16 bg-white'>
            <div className=' flex w-[1280px] h-[864px] px-8 gap-16'>
                <img src='\image\img14.png' alt='Contact' className='w-[576px] h-[864px]' />

                <div className=' flex justify-center items-center w-[576px] h-[864px]'>
                    <div className='flex flex-col w-[480px] h-[712px] gap-12'>
                        {/* Heading and Supporting text */}
                        <div className='w-[480px] h-[94px] gap-5'>
                            <p className='w-[480px] h-[44px] font-semibold text-4xl leading-11 text-gray-900'>Let's start your project</p>
                            <p className='w-[480px] h-[44px] font-normal text-xl leading-7 text-gray-600'>Our friendly team would love to hear from you.</p>
                        </div>

                        {/* Form */}
                        <form className='flex flex-col w-[480px] h-[570px] gap-8'>
                             {/* Form field  */}
                            <div className='w-[480px] h-[490px] gap-8'>
                                {/* First and Last name */}
                                <div className='flex gap-8 w-[480px] h-[70px] mb-5 '>
                                    <div className='flex flex-col w-[224px] h-[70px] gap-[6px]'>
                                        <label htmlFor='firstName' className='text-gray-700 w-[71px] h-[20px] text-xs leading-5 font-medium'>First Name</label>
                                        <div className='flex justify-center items-center w-[224px] h-[44px] gap-2 border border-gray-300 py-[10px] px-[14px] rounded'>
                                            <input type='text' id='firstName' placeholder='First Name' className='w-[196px] h-[24px] gap-2 outline-none'  /></div>
                                    </div>

                                    <div className='flex flex-col w-[224px] h-[70px] gap-[6px]'>
                                        <label htmlFor='lastName' className='text-gray-700 w-[71px] h-[20px] text-xs leading-5 font-medium'>last Name</label>
                                        <div className='flex justify-center items-center w-[224px] h-[44px] gap-2 border border-gray-300 py-[10px] px-[14px] rounded'>
                                            <input type='text' id='lastName' placeholder='lastName' className='w-[196px] h-[24px] gap-2 outline-none'  /></div>
                                        </div>
                                </div>

                                {/* Email */}
                                <div className='flex flex-col gap-[6px] w-[480px] h-[70px] mb-5 '>
                                    <label htmlFor='email' className='text-gray-700 w-[36px] h-[20px] text-xs leading-5 font-medium'>Email</label>
                                    
                                    <div className='flex justify-center items-center w-[480px] h-[44px] gap-2 border border-gray-300 py-[10px] px-[14px] rounded'>
                                    <input type='email' id='email' placeholder='greggart9@gmail.com' className='w-[452px] h-[24px] gap-2 outline-none p-2 rounded' />
                                    </div>
                                </div>
                                
                                {/* Phone Number */}
                                <div className='flex flex-col  gap-[6px] w-[480px] h-[70px] mb-5'>
                                    <label htmlFor='phone' className='text-gray-700 w-[98px] h-[20px] text-xs leading-5 font-medium'>Phone</label>
                                    <div className='flex gap-2 w-[480px] h-[44px] border border-gray-300 p-2 rounded'>
                                        <select id='countryCode' className='outline-none text-gray-900 text-lg font-normal leading-6'>
                                            <option value='+1'>+1</option>
                                            <option value='+44'>+44</option>
                                            <option value='+91'>+91</option>
                                            {/* Add more country codes as needed */}
                                        </select>
                                        <input type='text' id='phone' placeholder='+1 (555) 000-0000' className=' p-2 rounded flex-grow' />
                                    </div>
                                </div>

                                {/* Text Box */}
                                <div className='w-[480px] h-[160px] gap-[6px] mb-5 '>
                                <div className='flex flex-col w-[480px] h-[160px] gap-[6px]'>
                                    <label htmlFor='message' className='text-gray-700 w-[61px] h-[20px] font-medium text-sm leading-5'>Message</label>
                                    <textarea id='message' rows='4' placeholder='Leave us a message...' className='border border-gray-300 p-2 rounded'></textarea>
                                </div>
                                </div>

                                {/* Check box */}
                                <div className='flex items-center w-[480px] h-[24px] gap-3 mb-5 '>
                                    <input type='checkbox' id='subscribe' className='w-[20px] h-[22px] pt-[2px]' />
                                    <label htmlFor='subscribe' className='text-gray-600 text-lg font-normal leading-6'>You agree to our friendly <span className='underline underline-offset-4'>privacy policy</span>.</label>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className='w-[480px] h-[48px] gap-4'>
                                <button className='w-[480px] h-[48px] bg-purple-600 text-white font-medium rounded-lg border border-purple-600 py-3 px-5'>Send message</button>

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
        <footer className='w-screen h-[320px] pt-16 pb-12 gap-16 flex flex-col items-center justify-center'>
             {/* Container */}
            <div className='w-[1280px] h-[88px] px-[32px] gap-12 flex justify-center'>

                {/* Content */}
                <div className=' flex w-5/6 h-[88px] gap-8'>

                    {/* Logo and Links */}
                    <div className='relative w-[824px] h-[88px] gap-8'>
                    {/* Logo */}
                        <div className='absolute top-0 flex text-center w-[142px] h-[32px]'>
                            <img src="\image\Logo.png" alt="logo" className='w-[32px] h-[32px]'/>
                            <h2 className='w-[100px] h-[32px] text-center text-lg font-semibold '>Untitled UI</h2>
                        </div>

                        {/* footer links */}
                        <div className=' absolute bottom-0 w-[824px] h-[24px] gap-8 flex'>
                            <a href='/' className='text-gray-600 text-lg font-semibold leading-6'>Overview</a>
                            <a href='/' className='text-gray-600 text-lg font-semibold leading-6'>Features</a>
                            <a href='/' className='text-gray-600 text-lg font-semibold leading-6'>Pricing</a>
                            <a href='/' className='text-gray-600 text-lg font-semibold leading-6'>Careers</a>
                            <a href='/' className='text-gray-600 text-lg font-semibold leading-6'>Help</a>
                            <a href='/' className='text-gray-600 text-lg font-semibold leading-6'>Privacy</a>
                        </div>

                    </div>
                     
                     {/* Newsletter */}
                    <div  className='relative  w-[360px] h-[80px] gap-4'>
                        <p className='h-[20px] text-gray-900 leading-5 font-semibold text-sm '>Stay up to date</p>

                        <div className=' absolute bottom-0 flex h-[44px] gap-4'>
                            <div className='w-[229px] border border-gray-300 rounded-lg flex items-center h-[44px] flex justify-center'>
                                <input type='email' id='email' placeholder='Enter your email' className='w-[201px] h-[24px] outline-none bg-transparent'  />
                            </div>
                            
                            <button className='border bg-purple-600 text-white border-purple-600 h-[44px] w-[115px] rounded-lg px-[18px] py-[10px]'>Subscribe</button>

                        </div>

                    </div>
                    

                </div>


            </div>
             
             {/* Container 2 */}
            <div className=' w-[1280px] h-[56px] px-[32px] gap-8 flex justify-center'>
                <div className=' flex w-5/6 h-[56px] border-t-2 border-gray-200 pt-8 gap-8 '>
                    <p className='text-gray-500 text-lg font-normal leading-6 w-[988px] h-[24px]'>© 2024 Untitled UI. All rights reserved.</p>

                    <div className='w-[196px] h-[24px] gap-4 flex'>
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