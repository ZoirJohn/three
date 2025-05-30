import { useEffect, useState } from 'react'
import { navLinks } from '../constants'

export default function Navbar() {
        const [scrolled, setScrolled] = useState(false)
        useEffect(() => {
                const handleScroll = () => {
                        const isScrolled = window.scrollY > 10
                        setScrolled(isScrolled)
                }
                window.addEventListener('scroll', handleScroll)
                return () => window.removeEventListener('scroll', handleScroll)
        }, [])
        return (
                <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
                        <div className='inner'>
                                <a href='#hero' className='logo'>
                                        Zoirjon
                                </a>
                                <nav className='desktop'>
                                        <ul>
                                                {navLinks.map((link, id) => {
                                                        return (
                                                                <li key={id} className='group'>
                                                                        <a href={link.link}>
                                                                                {link.name}
                                                                                <span className='underline'></span>
                                                                        </a>
                                                                </li>
                                                        )
                                                })}
                                        </ul>
                                </nav>
                                <a href='#contact' className='contact-btn group'>
                                        <div className='inner'>
                                                <span>Contact Me</span>
                                        </div>
                                </a>
                        </div>
                </header>
        )
}
