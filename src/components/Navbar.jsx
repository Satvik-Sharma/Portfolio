import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function Navbar () {
  const navRef = useRef(null)
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: navRef.current,
            scrub: 2,
            start: 'bottom top'
          }
        })
        .to(navRef.current, {
          backgroundColor: '#00000080',
          backdropFilter: 'blur(10px)'
        })
      gsap
        .timeline()
        .from('nav h1', {
          opacity: 0,
          y: -30,
          duration: 0.5,
          scale: 0,
          ease: 'power1.inOut'
        })
        .from('nav ul li', {
          y: 40,
          opacity: 0,
          scale: 0,
          duration: 0.3,
          stagger: 0.2
        })
    },
    { scope: [navRef] }
  )
  return (
    <nav
      ref={navRef}
      className='text-white inter-font fixed left-0 right-0 top-0 px-38 py-4 flex md:justify-between md:flex-row flex-col z-50 gap-2'
    >
      <div className='nav-left flex items-center justify-center'>
        <h1 className='font-bold text-2xl'>Portfolio</h1>
      </div>
      <div className='nav-right flex items-center justify-center'>
        <ul className='flex md:gap-9 gap-4 text-white/80'>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((e, i) => (
            <li key={i} className='cursor-pointer'>
              <a href={`#${e}`}>{e}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
