import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
        useGSAP(() => {
                gsap.utils.toArray('.timeline-card').forEach((card) => {
                        gsap.from(card as any, {
                                xPercent: -100,
                                opacity: 0,
                                transformOrigin: 'left left',
                                duration: 1,
                                ease: 'power2.inOut',
                                scrollTrigger: { trigger: card as any, start: 'top 80%' },
                        })
                })
                gsap.to('.timeline', {
                        transformOrigin: 'bottom bottom',
                        ease: 'power1.inOut',
                        scrollTrigger: {
                                trigger: '.timeline',
                                start: 'top center',
                                end: '70% center',
                                onUpdate: (self) => {
                                        gsap.to('.timeline', { scaleY: 1 - self.progress })
                                },
                        },
                })

                gsap.utils.toArray('.expText').forEach((text) => {
                        gsap.from(text as any, {
                                xPercent: 0,
                                opacity: 0,
                                duration: 1,
                                ease: 'power2.inOut',
                                scrollTrigger: { trigger: text as any, start: 'top 60%' },
                        })
                })
        }, [])
        return (
                <section id='experience' className='w-full mt-20 md:mt-40 section-padding xl:px-0'>
                        <div className='w-full h-full px-5 md:px-20'>
                                <TitleHeader title='Professional Work Experience' sub='💼 My Career Overview' />
                                <div className='relative mt-32'>
                                        <div className='relative z-50 space-y-10 xl:space-y-32'>
                                                {expCards.map((card, id) => {
                                                        return (
                                                                <div className='exp-card-wrapper' key={id}>
                                                                        <div className='xl:w-2/6'>
                                                                                <GlowCard card={card} i={id}>
                                                                                        <div>
                                                                                                <img src={card.imgPath} alt={card.title} className='h-9' />
                                                                                        </div>
                                                                                </GlowCard>
                                                                        </div>
                                                                        <div className='xl:w-4/6'>
                                                                                <div className='flex items-start'>
                                                                                        <div className='timeline-wrapper'>
                                                                                                <div className='timeline' />
                                                                                                <div className='w-1 h-full gradient-line' />
                                                                                        </div>
                                                                                        <div className='relative z-20 flex gap-5 expText xl:gap-20 md:gap-10'>
                                                                                                <div className='timeline-logo'>
                                                                                                        <img src={card.logoPath} alt='logo' />
                                                                                                </div>
                                                                                                <div>
                                                                                                        <h1 className='text-3xl font-semibold'>{card.title}</h1>
                                                                                                        <p className='my-5 text-white-50'>📅 {card.date}</p>
                                                                                                        <p className='text-[#839cb5] italic'>Responsibilities</p>
                                                                                                        <ul className='flex flex-col gap-5 mt-5 list-disc ms-5 text-white-50'>
                                                                                                                {card.responsibilities.map((res, id) => {
                                                                                                                        return (
                                                                                                                                <li key={id} className='text-lg'>
                                                                                                                                        {res}
                                                                                                                                </li>
                                                                                                                        )
                                                                                                                })}
                                                                                                        </ul>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
