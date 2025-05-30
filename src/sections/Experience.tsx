import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'

export default function Experience() {
        return (
                <div id='expeirience' className='w-full mt-20 md:mt-40 section-padding xl:px-0'>
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
                                                                                                <img src={card.imgPath} alt={card.title} />
                                                                                        </div>
                                                                                </GlowCard>
                                                                        </div>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
