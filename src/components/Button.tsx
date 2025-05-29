export default function Button({ className, text, id }: { className: string; text: string; id: string }) {
        function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
                e.preventDefault()
                const target = document.getElementById('counter')
                if (target && id) {
                        // const offset = window.innerHeight * 0.15
                        const top = target.getBoundingClientRect().top
                        window.scrollTo({ top, behavior: 'smooth' })
                }
        }
        return (
                <a className={`${className} cta-wrapper`} id={id} onClick={handleClick}>
                        <div className='cta-button group'>
                                <div className='bg-circle' />
                                <p className='text'>{text}</p>
                                <div className='arrow-wrapper'>
                                        <img src='/img/arrow-down.svg' alt='arrow' />
                                </div>
                        </div>
                </a>
        )
}
