import { useGSAP } from '@gsap/react'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import { gsap } from 'gsap'

export default function TechStack() {
        useGSAP(() => {
                gsap.fromTo(
                        '.tech-card',
                        { y: 50, opacity: 0 },
                        {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                                ease: 'power2.inOut',
                                stagger: 0.2,
                                scrollTrigger: {
                                        trigger: '#skills',
                                        start: 'top center',
                                },
                        }
                )
        }, [])
        return (
                <section id='skills' className='flex flex-center section-padding'>
                        <div className='w-full h-full px-5 md:px-10'>
                                <TitleHeader title='My Preferred Tech Stack' sub='The skills I Bring to the table' />
                                <div className='tech-grid'>
                                        {techStackIcons.map((icon, id) => (
                                                <div key={id} className='relative overflow-hidden rounded-lg card-border tech-card group xl:rounded-full '>
                                                        <div className='tech-card-animated-bg' />
                                                        <div className='tech-card-content'>
                                                                <div className='tech-icon-wrapper'>
                                                                        <TechIcon model={icon} />
                                                                </div>
                                                                <div className='w-full padding-x'>
                                                                        <p>{icon.name}</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        )
}
