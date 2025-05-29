import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Showcase() {
        const sectionRef = useRef(null)
        const project1Ref = useRef(null)
        const project2Ref = useRef(null)
        const project3Ref = useRef(null)

        useGSAP(() => {
                gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
                const projects: any[] = [sectionRef.current, project1Ref.current, project2Ref.current, project3Ref.current]

                projects.forEach((project, index) => {
                        gsap.fromTo(
                                project,
                                { opacity: 0, y: 50 },
                                {
                                        opacity: 1,
                                        y: 0,
                                        duration: 1,
                                        delay: 0.3 * (index),
                                        scrollTrigger: {
                                                trigger: project,
                                                start: 'top bottom-=100',
                                        },
                                }
                        )
                })
        }, [])
        return (
                <div id='work' className='app-showcase' ref={sectionRef}>
                        <div className='w-full'>
                                <div className='showcaselayout'>
                                        <div className='first-project-wrapper' ref={project1Ref}>
                                                <div className='image-wrapper'>
                                                        <img src='/img/project1.png' alt='Ryde' />
                                                </div>
                                                <div className='text-content'>
                                                        <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                                                        <p className='text-white-50 md:text-xl'>An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
                                                </div>
                                        </div>
                                        <div className='overflow-hidden project-list-wrapper'>
                                                <div className='project' ref={project2Ref}>
                                                        <div className='image-wrapper bg-[#ffefdb]'>
                                                                <img src='/img/project2.png' alt='Library Management Platform' />
                                                        </div>
                                                        <h2>The Library Management Platform</h2>
                                                </div>
                                                <div className='project' ref={project3Ref}>
                                                        <div className='image-wrapper bg-[#ffe7eb]'>
                                                                <img src='/img/project3.png' alt='YC Directory' />
                                                        </div>
                                                        <h2>YC Directory - A Startup Showcase App</h2>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
