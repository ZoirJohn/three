export default function TitleHeader({ title, sub }: { title: string; sub: string }) {
        return (
                <div className='flex flex-col items-center gap-5'>
                        <div className='hero-badge'>
                                <p>{sub}</p>
                        </div>
                        <div className='text-3xl font-semibold text-center md:text-5xl'>{title}</div>
                </div>
        )
}
