import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function CursorFollower () {
  const cursorFollower = useRef(null)

  useEffect(() => {
    const handleMouseMove = e => {
      gsap.to(cursorFollower.current, {
        x: e.clientX || 0,
        y: e.clientY || 0,
        duration: 0.8
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div
      ref={cursorFollower}
      id='cursor-follower'
      className='w-[15px] h-[15px] rounded-full bg-amber-500 fixed z-50 pointer-events-none'
    />
  )
}
