import { counterItems } from '../constants'
import CountUp from 'react-countup'

export default function AnimatedCounter() {
        return (
                <div id='counter' className='mt-32 padding-x-lg xl:mt-0'>
                        <div className='max-auto grid-4-cols'>
                                {counterItems.map((item) => {
                                        return (
                                                <div className='flex flex-col justify-center p-10 rounded-lg bg-zinc-900' key={item.label}>
                                                        <div key={item.label} className='mb-2 text-5xl font-bold text-white counter-number'>
                                                                <CountUp end={item.value} suffix={item.suffix} />
                                                        </div>
                                                        <div className='text-lg text-white-50'>{item.label}</div>
                                                </div>
                                        )
                                })}
                        </div>
                </div>
        )
}
