import { abilities } from '../constants'

export default function FeatureCards() {
        return (
                <div className='w-full padding-x-lg'>
                        <div className='mx-auto grid-3-cols'>
                                {abilities.map((ability, id) => {
                                        return (
                                                <div className='flex flex-col gap-4 p-8 card-border rounded-xl' key={id}>
                                                        <div className='items-center justify-center rounded-full size-14'>
                                                                <img src={ability.imgPath} alt={ability.title} />
                                                        </div>
                                                        <h3 className='text-2xl font-semibold text-white'>{ability.title}</h3>
                                                        <p className='text-lg text-white-50'>{ability.desc}</p>
                                                </div>
                                        )
                                })}
                        </div>
                </div>
        )
}
