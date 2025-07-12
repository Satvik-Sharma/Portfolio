import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.globe.min'
import { personalInfo } from '../../constants'
gsap.registerPlugin(SplitText)

export default function Hero () {
  const nameSpanRef = useRef()
  const h2Ref = useRef()
  const heroRef = useRef(null)
  useEffect(() => {
    const netEffect = HALO({
      el: heroRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      highlightColor: 0x8b5cf6, // purple-500
      midtoneColor: 0x6366f1, // indigo-500
      lowlightColor: 0x7c3aed, // violet-600
      baseColor: 0x1e1b4b, // slate-violet dark background
      backgroundColor: '#000001'
    })

    return () => {
      if (netEffect) netEffect.destroy()
    }
  }, [])
  useGSAP(() => {
    const split = new SplitText(nameSpanRef.current, { type: 'chars' })
    split.chars.forEach(char => {
      char.classList.add(
        'bg-gradient-to-r',
        'from-purple-400',
        'via-pink-500',
        'to-red-500',
        'bg-clip-text',
        'text-transparent',
        'inline-block'
      )
    })
    const introTl = gsap.timeline({ delay: 1 })
    introTl.from('.intro h1', {
      opacity: 0,
      scale: 0,
      duration: 0.5
    })
    introTl.from(split.chars, {
      y: 80,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      stagger: 0.06
    })
    introTl.from(
      h2Ref.current,
      {
        y: 50,
        opacity: 0
      },
      '-=0.4'
    )
    return () => {
      split.revert()
    }
  }, [])

  return (
    <section
      id='Home'
      ref={heroRef}
      className='w-full inter-font h-full min-h-screen flex items-center justify-center'
    >
      <div className='intro text-white md:w-1/2 w-full flex flex-col gap-4 py-20 px-10 rounded-md'>
        <h1 className='w-full text-6xl text-center overflow-hidden'>
          Hi, I'm{' '}
          <span ref={nameSpanRef} className='inline-block font-bold'>
            {personalInfo.name}
          </span>
        </h1>
        <p className='text-2xl text-center text-white/70'>
          Passionate about creating innovative solutions with modern web
          technologies. Specializing in full-stack development with React,
          Next.js, and Node.js.
        </p>
      </div>
    </section>
  )
}
