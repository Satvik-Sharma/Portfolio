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
import { VscVscodeInsiders } from "react-icons/vsc";
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

