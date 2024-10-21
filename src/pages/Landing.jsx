import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <>
    <div className='bg-purple-900 w-screen flex justify-center '>
        <Navbar />
     </div>
    
    {/* BEGINNING OF LANDING PAGE */}

    <section className='bg-purple-900 text-white w-screen flex flex-col justify-center items-center'>

        {/* EMPTY SPACE */}
        <div className='w-screen h-[5rem]'>

        </div>

        {/* FIRST CONTAINER */}
        <div className='w-4/5'>

            {/* SECTION 1 UP */}
            <div className='w-4/5 flex flex-col gap-7'>
                <div >
                    <p className='text-5xl font-medium'>We design physical experiences that create more happy in the world</p>
                </div>
                <p className='w-3/5'>
                — We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.
                </p>

                {/* SECTION 1 BUTTONS */}
                <div className='flex gap-3'>
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

        {/* SECOND CONTAINER */}
        <div className=' flex justify-center py-16 items-center '>
            <div>
                <img src="\image\img2.png" alt="Interior design example" className=' w-12/12'/>
            </div>
        </div>
    </section> 

    {/* SECTION 2   */}
    <section className='bg-purple-900 pt-6 pb-16 text-white w-screen flex justify-center items-center'>
        <div className='w-4/5 flex flex-col gap-4 items-center'>
            <div><p>We’ve worked with some great startups</p></div>

            <div className='flex gap-5'>
                <img src="\image\img3.png" alt="Startup 1" className='h-10'/>
                <img src="\image\img4.png" alt="Startup 2" className='h-10'/>
                <img src="\image\img5.png" alt="Startup 3" className='h-10'/>
                <img src="\image\img6.png" alt="Startup 4" className='h-10'/>
                <img src="\image\img5.png" alt="Startup 3" className='h-10'/>
                <img src="\image\img6.png" alt="Startup 4" className='h-10'/>
            </div>
        </div>
    </section>
        
    </>
  )
}

export default Landing