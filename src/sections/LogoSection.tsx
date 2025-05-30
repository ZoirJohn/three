import { logoIconsList } from '../constants'

function LogoIcon({
        logo,
}: {
        logo: {
                imgPath: string
        }
}) {
        return (
                <div className='flex-non flex-center marquee-item'>
                        <img src={logo.imgPath} alt={logo.imgPath} />
                </div>
        )
}

export default function LogoSection() {
        return (
                <section className='relative my-10 md:my-20'>
                        <div className='gradient-edge' />
                        <div className='gradient-edge' />
                        <div className='marquee h-52'>
                                <div className='gap-5 marquee-box md:gap-12'>
                                        {logoIconsList.map((logo, id) => {
                                                return <LogoIcon logo={logo} key={id} />
                                        })}
                                        {logoIconsList.map((logo, id) => {
                                                return <LogoIcon logo={logo} key={id} />
                                        })}
                                </div>
                        </div>
                </section>
        )
}
