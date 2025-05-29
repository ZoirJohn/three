export default function Button({ className, text, id }: { className: string; text: string; id: string }) {
        return (
                <a className={`${className} cta-wrapper`}>
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
