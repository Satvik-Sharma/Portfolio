import { useRef } from 'react'
import { projectsList } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export default function Projects () {
  const projectsSectionRef = useRef(null)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          scrub: 1,
          start: isMobile ? 'top -20%' : 'top top',
          end: isMobile ? 'bottom -50%' : 'bottom -50%',
          pin: true,
        }
      })
      .to('.project-card', {
        yPercent: 100,
        xPercent: 100,
        opacity: 0,
        stagger: 1,
        ease: 'power1.in'
      })
  }, [])

  return (
    <section
      ref={projectsSectionRef}
      id='Projects'
      className={`w-full ${isMobile ? 'min-h-[120vh]' : 'min-h-110vh'} flex flex-col gap-10 items-center justify-center py-10 px-4 sm:px-8 md:px-12 bg-[#000001] text-white overflow-hidden`}
    >
      {/* Section Header */}
      <div className='text-center flex flex-col gap-4'>
        <h1 className='text-4xl sm:text-5xl font-extrabold inter-font bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Projects
        </h1>
        <hr className='mt-3 mx-auto w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-none rounded-full' />
        <p className='intro-message text-white/60 text-center max-w-2xl'>
          Here are some of the projects I've worked on, showcasing my skills in
          full-stack development, UI/UX design, and more.
        </p>
      </div>

      {/* Project Stack */}
      <div className='relative w-full max-w-6xl min-h-[600px] sm:min-h-[700px] md:min-h-[800px]'>
        {projectsList.map((project, i) => (
          <div
            key={i}
            className='project-card absolute w-full md:w-[95%] h-[650px] sm:h-[550px] md:h-[400px] rounded-2xl bg-gradient-to-br from-[#3f3f3f] to-[#151516] shadow-sm shadow-white/50 hover:shadow-lg transition-all  overflow-hidden'
            style={{
              transform: isMobile
                ? `translate(0px, 0px)`
                : `translate(${i * 24}px, ${i * 24}px)`,
              zIndex: projectsList.length - i
            }}
          >
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6 p-6 sm:p-8 h-full'>
              {/* Image Section */}
              {project.image && (
                <div className='w-full md:w-1/2 h-64 sm:h-72 md:h-full rounded-lg overflow-hidden border border-white/10 shadow-sm'>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className='w-full h-full object-center hover:scale-105 transition-transform duration-300'
                  />
                </div>
              )}

              {/* Text Section */}
              <div className='flex-1 flex flex-col justify-between h-full'>
                <div>
                  {/* Title */}
                  <h2 className='text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text mb-2'>
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className='text-white/80 text-sm sm:text-base mb-3 line-clamp-3'>
                    {project.description}
                  </p>

                  {/* Key Points */}
                  {project.points?.length > 0 && (
                    <ul className='list-disc list-inside text-white/60 text-sm space-y-1 mb-3'>
                      {project.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tech?.map((tech, j) => (
                      <span
                        key={j}
                        className='text-xs sm:text-sm px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
