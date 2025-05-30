import { socialImgs } from '../constants'

export default function Footer() {
        return (
                <footer className='footer'>
                        <div className='footer-container'>
                                <div className='flex flex-col items-center justify-center md:items-start'>
                                        <a href='/'>Visit my vlog</a>
                                </div>
                                <div className='socials'>
                                        {socialImgs.map((img, index) => (
                                                <a href={img.url} key={index} className='icon' target='_blank'>
                                                        <img src={img.imgPath} />
                                                </a>
                                        ))}
                                </div>
                                <div className='flex flex-col justify-center'>
                                        <p className='text-center md:text-end'>{new Date().getFullYear()} © All rights reserved.</p>
                                </div>
                        </div>
                </footer>
        )
}
