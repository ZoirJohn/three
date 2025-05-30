import { useRef, type MouseEvent, type ReactNode } from 'react'

export default function GlowCard({
        card,
        children,
        i,
}: {
        children: ReactNode
        card: {
                review: string
                imgPath: string
                logoPath?: string
                title?: string
                date?: string
                responsibilities?: string[]
        }
        i: number
}) {
        const cardRefs = useRef<HTMLDivElement[]>([])

        const handleMouseMove = (index: number) => (e: MouseEvent<HTMLDivElement>) => {
                const card = cardRefs.current[index]
                if (!card) return

                const rect = card.getBoundingClientRect()
                const mouseX = e.clientX - rect.left - rect.width / 2
                const mouseY = e.clientY - rect.top - rect.height / 2

                let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)

                angle = (angle + 360) % 360

                card.style.setProperty('--start', angle + 60 + '')
        }
        return (
                <div ref={(e) => (cardRefs.current[i] = e! as any)} onMouseMove={handleMouseMove(i)} className='p-10 mb-5 card card-border timeline-card rounded-xl break-inside-avoid-column'>
                        <div className='glow' />
                        <div className='flex items-center gap-1 mb-5 '>
                                {Array.from({ length: 5 }, (_, i) => {
                                        return <img src='/img/star.png' alt='star' key={i} />
                                })}
                        </div>

                        <div className='mb-5'>
                                <p className='text-lg text-white-50'>{card.review}</p>
                        </div>
                        {children}
                </div>
        )
}
