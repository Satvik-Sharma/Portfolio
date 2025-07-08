import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.halo.min'
import { aboutMeList, quickFactsList } from '../../constants.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger);

export default function About () {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const aboutRef = useRef(null)
  useEffect(() => {
    const globeEffect = GLOBE({
      el: aboutRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: '#000001'
    })

    return () => {
      if (globeEffect) globeEffect.destroy()
    }
  }, [])

  useGSAP(() => {
    const aboutSectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        scrub: 2,
        start: 'top 50%',
        end: 'top 10%',
      }
    });
    aboutSectionTl.from('.about-me-item-card', {
      x: -400,
      opacity: 0,
      stagger: 2,
      ease: 'linear',
    }, 'a');
    aboutSectionTl.from('.quick-facts-card', {
      opacity: 0,
      scale: 0,
    }, 'a')
  })

  return (
    <section
      id='About'
      ref={aboutRef}
      className='text-white w-full inter-font min-h-screen py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 flex flex-col gap-16'
    >
      <h1 className='text-center text-4xl sm:text-5xl font-bold flex items-center flex-col gap-2'>
        About Me
        <hr className='w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-none rounded-full' />
      </h1>

      <div className='flex flex-col md:flex-row'>
        {/* Left Content */}
        <div className='flex-1 flex flex-col gap-6'>
          {aboutMeList.map((e, i) => (
            <div
              key={i}
              className='about-me-item-card w-full flex items-start gap-4 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl'
            >
              <div className='icon text-3xl shrink-0'>{e.icon}</div>
              <div>
                <h1 className='font-semibold text-xl'>{e.title}</h1>
                <p className='text-white/80 text-sm sm:text-base'>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className='flex-1 p-6 rounded-xl flex pb-20 flex-col items-center'>
          <div className='quick-facts-card w-fit pr-20 py-10 px-10 rounded-2xl bg-gradient-to-br from-purple-500 via-white-200/50 to-red-500/50 flex flex-col items-center justify-center'>
            <h1 className='mb-4 text-3xl font-bold inter-font'>Quick Facts</h1>
            <ul className={`flex flex-col gap-4 ${isMobile ? 'items-center' : ''}`}>
              {quickFactsList.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
