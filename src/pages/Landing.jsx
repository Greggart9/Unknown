import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <>
    <div className='bg-purple-900 w-screen flex justify-center '>
        <Navbar />
     </div>
    
    {/* HERO HEADER SECTION */}

    <section className='bg-purple-800 text-white w-screen h-[1108px] py-[96px] gap-[64px] flex flex-col justify-center items-center'>

        {/* FIRST CONTAINER */}
        <div className='w-[1280px] h-[336px] px-[32px] gap[32px]'>
            <div className='w-[1216px] gap-[48px]'>

                {/* SECTION 1 UP */}
                <div className='w-[1024px] h-[228px] flex flex-col gap-[24px]'>
                    <div >
                        <p className='text-6xl leading-[72px] font-medium w-[1024px] h-[144px]'>We design physical experiences that create more happy in the world</p>
                    </div>
                    <p className='w-[640px] h-[60px]'>
                    — We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.
                    </p>

                    {/* SECTION 1 BUTTONS */}
                    <div className='flex gap-[12px] w-[348px] h-[60px]'>
                        <div>
                        <button  className='flex justify-center text-purple-900 items-center px-3 py-2 gap-1 bg-white rounded '>
                        <img src="\image\img1.png" alt="button icon" className='w-4 h-4 '/>
                        <p className='font-medium'>Showreel</p>
                        </button>
                        </div>

                        <div className='flex'>
                        <button className=' text-white px-3 py-2 gap-1 bg-purple-600 rounded font-medium '>Get in touch</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* SECOND CONTAINER */}

        <div className=' flex max-w-[1280px] h-[516px] justify-center px-[32px] gap-[32px] items-center '>
            <div className='max-w-[1216px] h-[516px]'>
                <img src="\image\img2.png" alt="Interior design example" className=' '/>
            </div>
        </div>
    </section> 

    {/*SOCIAL PROOF SECTION*/}
    <section className='bg-purple-800  flex justify-center text-white w-screen h-[200px] pt-[96px]'>
        <div className='w-[1280px] h-[104px] flex flex-col px-[32px] gap-[32px] items-center'>
            <div className='w-[1216px] h-[24px] text-center'><p>We’ve worked with some great startups</p></div>

            <div className='flex w-[1216px] h-[48px] justify-between'>
                <img src="\image\img3.png" alt="Startup 1" className='h-8'/>
                <img src="\image\img4.png" alt="Startup 2" className='h-8'/>
                <img src="\image\img5.png" alt="Startup 3" className='h-8'/>
                <img src="\image\img6.png" alt="Startup 4" className='h-8'/>
                <img src="\image\img7.png" alt="Startup 5" className='h-8'/>
                <img src="\image\img8.png" alt="Startup 6" className='h-8'/>
            </div>
        </div>
    </section>

    {/* FEATURES SECTION */}
    <section className='w-screen h-[1012px] bg-white'>

        {/* SECTION 3.1 */}

        <div className=' flex justify-center bg-gray-50 w-screen h-[396px] pt-[96px] pb-[160px] gap-[64px]'>
            <div className='flex justify-center w-[1280px] h-[240px]px-32 gap-[96px]'>

                {/* Heading and Supporting texts */}
                <div className=' h-[190px] w-[560px] gap-[20px]'>
                    
                        <div className='gap-[12px] w-[560px] h-[80px]'>
                            <p className='text-purple-700 h-[24px] font-semibold text-base'>Who we are</p>
                            <p className='text-black font-semibold h-[44px] text-4xl'>Commercial interior designers</p>
                        </div>
                        <p className='w-[560px] h-[90px] text-xl text-gray-600 leading-[30px]'>Untitled are a commercial interior design studio. We specialise in customised office design,
                            restaurant design, shop design, and studio design.  </p>

                </div>

                {/* Content */}
                <div className='w-[560px] h-[240px] gap-[48px]'>
                    <div className='flex w-[560px] h-[96px] gap-[16px]'>
                        <img src="\image\img9.png" alt="Icon" className='w-[48px] h-[48px]'/>

                        <div className='w-[496px] h-[96px] gap-[20px]'>
                            <p className='h-[30px] font-semibold text-xl'>Share team inboxes</p>
                            <p className='h-[48px] text-base'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>

                        </div>

                    </div>

                    <div className='flex w-[560px] h-[96px] gap-[16px]'>
                        <img src="\image\img10.png" alt="Icon" className='w-[48px] h-[48px]'/>

                        <div className='w-[496px] h-[96px] gap-[20px]'>
                            <p className='h-[30px] font-semibold text-xl'>Deliver instant answers</p>
                            <p className='h-[48px] text-base'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>

        {/* SECTION 3.2 */}
        <div className=' flex justify-center w-screen h-[612px]  pb-[96px]'>
            <div className='w-[1280px] h-[516px] px-[32px]'>
                <img src="\image\img11.png" alt="Interior design example" className='w-[1216px] h-[516px]'/>

            </div>

        </div>

    </section>

    {/* Testimonial Content */}
    <section className='flex justify-center items-center w-screen h-[520px] py-[96px] gap-[64px] bg-gray-50'>
        <div className='w-[1280px] h-[328px] px-[32px] gap-[32px]'>
            <div className='flex w-[1216px] h-[328px] gap-[128px]'>
                <img src='\image\img12.png' alt='Testimonial image' className='w-[328px] h-[328px] rounded-2xl'/>

                <div className='w-[760px] h-[264px] gap-[32px]'>
                    <div className='w-[760px] h-[176px] gap-[24px]'>
                        <img src='\image\img13.png' alt='Five stars' className='w-[116px] h-[20px] gap-[4px]' />

                        <p className='w-[760px] h-[132px] text-gray-900 leading-[44px] text-4xl font-medium'>Untitled really understood the paired-back aesthetic that we were looking
                        for. We couldn’t be happier with our new offices.</p>

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
            <div className='w-[1216px] h-[240px] border-t border-b border-gray-200 py-16 gap-4'>

            </div>
            
        </div>

    </section>


        
    </>
  )
}

export default Landing