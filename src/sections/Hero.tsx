import { useGSAP } from '@gsap/react'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { words } from '../constants/index'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'

export default function Hero() {
        useGSAP(() => {
                gsap.fromTo(
                        '.hero-text h1',
                        {
                                y: 50,
                                opacity: 0,
                        },
                        {
                                y: 0,
                                opacity: 1,
                                stagger: 0.2,
                                duration: 1,
                                ease: 'power2.inOut',
                        }
                )
        }, [])
        return (
                <section id='hero' className='relative overflow-hidden'>
                        <div className='absolute top-0 left-0 z-10'>
                                <img src='/img/bg.png' alt='background' />
                        </div>
                        <div className='hero-layout'>
                                <header className='flex flex-col justify-center w-screen px-5 md:w-full md:px-20'>
                                        <div className='flex flex-col gap-7'>
                                                <div className='hero-text'>
                                                        <h1>
                                                                Shaping
                                                                <span className='slide'>
                                                                        <span className='wrapper'>
                                                                                {words.map((word, key) => {
                                                                                        return (
                                                                                                <span key={key} className='flex items-center gap-1 pb-2 md:gap-3'>
                                                                                                        <img
                                                                                                                src={word.imgPath}
                                                                                                                alt={word.text}
                                                                                                                className='p-1 bg-white rounded-full xl:size-12 md:size-10 size-7 md:p-2'
                                                                                                        />
                                                                                                        <span>{word.text}</span>
                                                                                                </span>
                                                                                        )
                                                                                })}
                                                                        </span>
                                                                </span>
                                                        </h1>
                                                        <h1>into Real Projects</h1>
                                                        <h1>that deliver Results</h1>
                                                </div>
                                                <p className='relative z-10 text-white pointer-events-none md:text-xl'>Hi, I'm Zoirjon, a developer based in Uzbekistan with passion for code</p>
                                                <Button className='h-12 md:w-80 md:h-16 w-60' id='button' text='See my work' />
                                        </div>
                                </header>
                                <figure>
                                        <div className='hero-3d-layout'>
                                                <HeroExperience />
                                        </div>
                                </figure>
                        </div>
                        <AnimatedCounter />
                </section>
        )
}
