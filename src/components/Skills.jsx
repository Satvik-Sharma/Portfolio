import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.rings.min'
import { skillsList } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Skills () {
  const skillsRef = useRef(null)
  const headingRef = useRef(null)

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 50%',
          end: 'top 35%',
          scrub: 2
        },
        y: 100,
        opacity: 0,
        color: 'purple'
      })

      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
          end: 'top 10%',
          scrub: true
        },
        opacity: 0,
        stagger: 0.3
      })
    },
    { scope: skillsRef }
  )

  useEffect(() => {
    const globeEffect = GLOBE({
      el: skillsRef.current,
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
    // Hover animation per skill card
    const cards = document.querySelectorAll('.skill-card')
    cards.forEach(card => {
      const icon = card.querySelector('.text-4xl')

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect()
        const offsetX = e.clientX - rect.left
        const offsetY = e.clientY - rect.top
        gsap.to(icon, {
          x: (offsetX - rect.width / 2) * 0.2,
          y: (offsetY - rect.height / 2) * 0.2,
          ease: 'power3.out',
          boxShadow: '0px 8px 20px rgba(255, 255, 255, 0.2)',
          borderRadius: '100%',
          scale: 1.1,
          duration: 0.3
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          x: 0,
          y: 0,
          ease: 'power3.out',
          boxShadow: 'none',
          duration: 0.3
        })
      })
    })

    return () => {
      if (globeEffect) globeEffect.destroy()
    }
  }, [])

  return (
    <section
      id='Skills'
      ref={skillsRef}
      className='text-white font-inter w-full inter-font min-h-screen py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 flex flex-col gap-16'
    >
      <div className='flex justify-center items-center flex-col gap-8'>
        <h1
          ref={headingRef}
          id='heading'
          className='text-center text-4xl sm:text-5xl font-bold flex items-center flex-col gap-2'
        >
          Skills & Technologies
        </h1>
        <hr className='w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-none rounded-full' />
        <p className='text-white/60 text-center max-w-2xl'>
          Here are the technologies and tools I use to build and automate modern
          web solutions.
        </p>
      </div>

      <div className='skills-container w-full flex flex-wrap items-center justify-center gap-6'>
        {skillsList.map((e, i) => (
          <div
            key={i}
            className='skill-card w-40 h-32 flex flex-col gap-3 py-5 px-4 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm hover:scale-110 transition-transform duration-300'
          >
            <div
              className='text-xs font-semibold px-2 py-1 rounded-full text-white'
              style={{ backgroundColor: e.bg }}
            >
              {e.type}
            </div>
            <div className='text-4xl'>{e.icon}</div>
            <h1 className='text-lg font-bold text-white/90'>{e.name}</h1>
          </div>
        ))}
      </div>

      <h1 className='text-white/70 text-center'>
        Always learning and exploring new technologies!
      </h1>
    </section>
  )
}
