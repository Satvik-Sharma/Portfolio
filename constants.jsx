import { RiGraduationCapLine } from 'react-icons/ri'
import { IoCodeSharp } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiPython,
  SiPostman,
  SiGreensock
} from 'react-icons/si'
import { VscVscodeInsiders } from 'react-icons/vsc'
import { TbBrandCpp } from 'react-icons/tb'
import { MdOutlineDeviceHub } from 'react-icons/md'

export const aboutMeList = [
  {
    icon: <RiGraduationCapLine size={34} className='text-[#9333ea]' />,
    iconBgColor: '#9333ea',
    title: 'Education',
    desc: 'Currently pursuing BTech in Computer Science Engineering. Focused on software development, algorithms, and modern web technologies.'
  },
  {
    icon: <IoCodeSharp size={34} className='text-[#db2777]' />,
    iconBgColor: '#9333ea',
    title: 'Development',
    desc: 'Passionate about full-stack development with expertise in React, Next.js, Node.js, and modern JavaScript frameworks.'
  },
  {
    icon: <FaRegUser size={34} className='text-[#2563eb]' />,
    iconBgColor: '#9333ea',
    title: 'Personal',
    desc: 'Always eager to learn new technologies and solve complex problems. Enjoy collaborating on innovative projects and contributing to open source.'
  }
]

export const quickFactsList = [
  '🎓 BTech Computer Science Student',
  '💻 Full-Stack Developer',
  '🚀 React & Next.js Enthusiast',
  '☕ Java Programming',
  '🎨 UI/UX with Tailwind CSS',
  '📱 Responsive Web Design'
]

export const skillsList = [
  {
    type: 'Frontend',
    bg: '#000000',
    name: 'Next.js',
    icon: <SiNextdotjs />
  },
  {
    type: 'Frontend',
    bg: '#3b82f6',
    name: 'React',
    icon: <FaReact />
  },
  {
    type: 'Frontend',
    bg: '#f59e0b',
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />
  },
  {
    type: 'Frontend',
    bg: '#ec4899',
    name: 'HTML5',
    icon: <FaHtml5 />
  },
  {
    type: 'Frontend',
    bg: '#eab308',
    name: 'CSS3',
    icon: <FaCss3Alt />
  },
  {
    type: 'Language',
    bg: '#facc15',
    name: 'JavaScript',
    icon: <FaJs />
  },
  {
    type: 'Language',
    bg: '#f97316',
    name: 'C++',
    icon: <TbBrandCpp />
  },
  {
    type: 'Language',
    bg: '#6366f1',
    name: 'Python',
    icon: <SiPython />
  },
  {
    type: 'Backend',
    bg: '#4ade80',
    name: 'Express.js',
    icon: <SiExpress />
  },
  {
    type: 'Database',
    bg: '#10b981',
    name: 'MongoDB',
    icon: <SiMongodb />
  },
  {
    type: 'Database',
    bg: '#64748b',
    name: 'Firebase',
    icon: <SiFirebase />
  },
  {
    type: 'Automation',
    bg: '#8b5cf6',
    name: 'n8n',
    icon: <MdOutlineDeviceHub />
  },
  {
    type: 'Core CS',
    bg: '#0ea5e9',
    name: 'DSA',
    icon: <MdOutlineDeviceHub />
  },
  {
    type: 'Animation',
    bg: '#f43f5e',
    name: 'GSAP',
    icon: <SiGreensock />
  },
  {
    type: 'Tools',
    bg: '#6b7280',
    name: 'Git',
    icon: <FaGitAlt />
  },
  {
    type: 'Tools',
    bg: '#1f2937',
    name: 'GitHub',
    icon: <FaGithub />
  },
  {
    type: 'Tools',
    bg: '#7dd3fc',
    name: 'VS Code',
    icon: <VscVscodeInsiders />
  },
  {
    type: 'Tools',
    bg: '#fb923c',
    name: 'Postman',
    icon: <SiPostman />
  }
]

export const personalInfo = {
  name: 'Satvik Sharma',
  StudentOf: 'Shri Mata Vaishno Devi University',
  email: 'satviksharma003@gmail.com',
  phone: '+91 60061 30782',
  location: 'Jammu, India'
}

export const projectsList = [
  {
    title: 'Z-Chat',
    description:
      'A feature-rich real-time chat application using Firebase. Supports smart replies, voice input/output, and seamless file sharing.',
    image: '/images/zchat.png',
    points: [
      'Built with React and Firebase Realtime Database',
      'Google OAuth-based authentication',
      'File sharing via Appwrite Storage',
      'Voice-to-text input and text-to-voice playback',
      'Smart reply suggestions using Gemini API',
      'Supports emojis using react-emoji'
    ],
    tech: [
      'Next.js',
      'TailwindCSS',
      'Firebase Firestore',
      'Google OAuth',
      'Appwrite Storage',
      'Gemini API',
      'react-emoji'
    ]
  },
  {
    title: 'Songify',
    description:
      'A full-stack music streaming web app built using Next.js. Users can explore music, create playlists, and browse artist pages. Seamlessly integrates with the Saavn API for fetching tracks.',
    image: '/images/songify.png',
    points: [
      'Built with Next.js and TailwindCSS',
      'Used MongoDB for storing playlists user data',
      'Integrated Saavn API to stream and explore music',
      'Users can create, edit, and manage custom playlists',
      'Artist detail pages with related songs and albums',
      'Used Nodemailer for otp verification during signup',
      'Implemented secure login with bcrypt hashing'
    ],
    tech: ['Next.js', 'TailwindCSS', 'MongoDB', 'Nodemailer', 'Saavn API']
  },
  {
    title: 'Attendance Management System',
    description:
      'A desktop-based attendance solution built using Java Swing. It enables attendance marking through QR codes assigned to each student.',
    image: '/images/attendance.png',
    points: [
      'Java Swing GUI for desktop environment',
      'Each student assigned a unique QR code',
      'Scans QR to mark attendance efficiently',
      'Auto-generates attendance logs',
      'Useful for classroom and event check-ins'
    ],
    tech: ['Java', 'Java Swing', 'QR Code', 'MySQL', 'JDBC']
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies for a responsive design.',
    image: '/images/portfolio.png',
    points: [
      'Responsive design using TailwindCSS',
      'Smooth scrolling and animations with GSAP',
      'Dynamic project showcase using React',
      'Contact form with emailjs for inquiries',
      'Lightweight and fast-loading'
    ],
    tech: ['React', 'TailwindCSS', 'GSAP', 'EmailJS', 'VantaJS', 'React Icons', 'React Responsive']
  },
]
