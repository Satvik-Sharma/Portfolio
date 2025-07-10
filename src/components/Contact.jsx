import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'
import { personalInfo } from '../../constants'
import { CiMail, CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { IoMdPaperPlane } from 'react-icons/io'
import emailjs from '@emailjs/browser'
import { useMediaQuery } from 'react-responsive'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useForm } from 'react-hook-form'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

export default function Contact () {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const contactSectionRef = useRef(null)
  const rightContentRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const globeEffect = GLOBE({
      el: contactSectionRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: '#000001',
    })
    return () => {
      if (globeEffect) globeEffect.destroy()
    }
  }, [])

  useGSAP(
    () => {
      const split = new SplitText('.intro-message', { type: 'lines' })

      const contactPageTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: 'top 40%',
          end: 'top 3%',
          scrub: 2
        }
      })

      contactPageTl.from(
        split.lines,
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
          stagger: 0.7,
          ease: 'power2.out'
        },
        'a'
      )
      contactPageTl.from(
        headingRef.current,
        {
          y: -100,
          scale: 1.3,
          opacity: 0
        },
        'a'
      )
      contactPageTl.from(
        '.left-h1',
        {
          x: -50,
          opacity: 0,
          ease: 'power3.inOut',
          color: 'pink'
        },
        '-=0.5'
      )
      contactPageTl.from(
        '.left-p',
        {
          opacity: 0
        },
        '-=0.2'
      )
      contactPageTl.from(rightContentRef.current, {
        scale: 0,
        y: 100,
        opacity: 0
      })
      contactPageTl.from(
        '.about-me-item-card',
        {
          y: -100,
          stagger: 0.4,
          opacity: 0,
          scale: 1.4
        },
        '-=0.3'
      )
      return () => {
        split.revert()
      }
    },
    { scope: contactSectionRef }
  )

  const onSubmit = data => {
    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: data.name,
          message: `Sender Name:  ${data.name}\nSender Email:  ${data.email}\n\nMessage:\n${data.message}`
        },
        publicKey
      )
      .then(() => {
        alert('Email sent successfully!')
        reset()
      })
      .catch(error => {
        console.error('Email error:', error)
      })
    reset()
  }

  const getIcon = key => {
    if (key === 'email') return <CiMail />
    else if (key === 'phone') return <IoCallOutline />
    else return <CiLocationOn />
  }
  return (
    <section
      ref={contactSectionRef}
      id='Contact'
      className='overflow-hidden text-white font-inter w-full inter-font min-h-screen py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 flex flex-col gap-16'
    >
      <div className='flex justify-center items-center flex-col gap-8'>
        <h1
          ref={headingRef}
          id='heading'
          className='text-center text-4xl sm:text-5xl font-bold flex items-center flex-col gap-2'
        >
          Get In Touch
        </h1>
        <hr className='w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-none rounded-full' />
        <p className='intro-message text-white/60 text-center max-w-2xl'>
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology.
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:gap-4 gap-20 justify-center'>
        {/* Left Content */}
        <div className='flex-1 flex flex-col gap-6'>
          <h1 className='left-h1 text-2xl font-bold tracking-tighter'>
            Let's Connect
          </h1>
          <p className='left-p text-sm text-white/70'>
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, I'd love to hear from you. Feel free to reach out
            through any of the channels below.
          </p>
          {['email', 'phone', 'location'].map((e, i) => (
            <div
              key={i}
              className='about-me-item-card w-full flex items-start gap-4 backdrop-blur-xs px-4 py-3 rounded-xl'
            >
              <div className='icon text-3xl shrink-0 animate-pulse'>
                {getIcon(e)}
              </div>
              <div>
                <h1 className='font-semibold text-xl'>
                  {e.charAt(0).toUpperCase() + e.slice(1)}
                </h1>
                <p className='text-white/50 text-sm sm:text-base'>
                  {personalInfo[e]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div
          ref={rightContentRef}
          className={`flex-1 flex flex-col md:items-center items-center gap-10 rounded-xl ${
            isMobile ? 'bg-white/6 backdrop-blur-xs px-4 py-4 rounded-xl' : ''
          }`}
        >
          <div className='flex flex-col gap-2 text-center md:text-left'>
            <h1 className='text-3xl font-bold text-white'>Send a Message</h1>
            <p className='text-sm text-white/80'>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='form w-full max-w-md flex flex-col gap-4'
          >
            <input
              {...register('name', { required: 'Name is required' })}
              className='form-input w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all active:scale-105'
              type='text'
              placeholder='Name'
            />
            {errors.name && (
              <span className='text-red-500 text-sm font-bold'>
                {errors.name.message}
              </span>
            )}

            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              className='form-input w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all active:scale-105'
              type='email'
              placeholder='Email'
            />
            {errors.email && (
              <span className='text-red-500 text-sm font-bold'>
                {errors.email.message}
              </span>
            )}

            <textarea
              {...register('message', { required: 'Message is required' })}
              className='form-input w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-32 active:scale-105 transition-all'
              placeholder='Message'
            ></textarea>
            {errors.message && (
              <span className='text-red-500 text-sm font-bold'>
                {errors.message.message}
              </span>
            )}

            <button
              type='submit'
              className='w-full py-3 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:brightness-120 hover:-translate-y-1 active:scale-75 transition flex items-center justify-center gap-2'
            >
              <IoMdPaperPlane size={20} />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
