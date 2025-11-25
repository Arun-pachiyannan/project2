import React from 'react'
import nspng from '../../assets/ns2.png'
import bgPng from '../../assets/bg1.png'
import { FaArrowRight } from 'react-icons/fa'
import Navebar from '../Navbar/Navbar'
import { motion, spring } from "framer-motion"

const bgImg = {
  backgroundImage: `url(${bgPng})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const Hero = () => {
  return (
    <main style={bgImg}>
      <div className='bg-gradient-to-r from-red-500 to-gray-200/90'>
        <div className="container text-gray-100">
          {/* Navebar Section Here */}
          <Navebar />
          {/* Hero Section Here */}

          <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
            {/* Text Content Here */}
            <div className='space-y-8 mt-[100px] md:mt-[20px]'>
              <motion.h1 initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:1,
                  duration:0.4
                }}
                className='text-5xl lg:text-7xl font-bold landing-tight'>Bajaj Pulsar <br /> {" "}<span className='uppercase text-transparent text-outline'>Ns 200 </span></motion.h1>
              <motion.button initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:1.6,
                  duration:0.6
                }} className='outline-btn flex justify-center items-center gap-4 group '>Explore
                <FaArrowRight className='group-hover:translate-x-2 transition' />
              </motion.button>
              <motion.div initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:2,
                  duration:0.8
                }} className='bg-black/40 p-6  space-y-2 lg:max-w-[350px] !mt-[60px]'>
                <h1 className='text-xl uppercase'> Pulsar NS200 features</h1>
                <p className='text-xs landing-loose'>The Bajaj Pulsar NS200 is a powerful naked-sports bike known for its aggressive styling and strong performance. It is powered by a 199.5cc liquid-cooled, triple-spark engine that delivers quick acceleration and smooth power delivery.</p>
              </motion.div>
            </div>

            {/* Image Seaction here */}
            <div className='relative'>
              <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{opacity:1,x:0,scale:1.2}}
              transition={{duration:1}}
                src={nspng} alt="Bajaj Pulsar NS 200" className='relative z-30' style={{ width: 'calc(100% - 20px)' }} />

              {/* glowing circle */}
              <div>
                <motion.div 
                initial={{opacity:0, y:0,scale:0.5}}
                whileInView={{opacity:1,y:0,scale:1}}
                transition={{type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.8,
                  duration:0.8
                }}
                className='border-[12px] sm:border-[16px] md:border-[20px] border-cyan-200 rounded-full h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] md:h-[390px] md:w-[400px] absolute top-10 right-5 sm:right-6 md:right-[30px] glowing-shadow-sm md:glowing-shadow-md pointer-events-none'></motion.div>
              </div>
              {/* bg text-here */}
              <div className='absolute -top-40 left-0 z-[1] overflow-hidden'>
                <h1 className='text-[120px] md:text-[180px] font-bold text-cyan-200/20 '>Arun</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Hero
