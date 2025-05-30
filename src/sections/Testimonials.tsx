import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'

export default function Testimonials() {
        return (
                <section id='testimonials' className='flex-center section-padding'>
                        <div className='w-full h-full px-5 md:px-10'>
                                <TitleHeader title='What People Say About Me?' sub='⭐ Client Feedback Highlights' />
                                <div className='mt-16 lg:columns-3 md:columns-2 colums-16'>
                                        {testimonials.map((testimonial, id) => (
                                                <GlowCard card={testimonial} i={id}>
                                                        <div className='flex items-center gap-3'>
                                                                <div>
                                                                        <img src={testimonial.imgPath} alt={testimonial.name} />
                                                                </div>
                                                                <div>
                                                                        <p className='font-bold'>{testimonial.name}</p>
                                                                        <p className='text-white-50'>{testimonial.mentions}</p>
                                                                </div>
                                                        </div>
                                                </GlowCard>
                                        ))}
                                </div>
                        </div>
                </section>
        )
}
