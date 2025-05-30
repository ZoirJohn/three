import { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/ContactExperience'
import emailjs from '@emailjs/browser'

export default function Contact() {
        const formRef = useRef(null)
        const [formData, setFormData] = useState({
                name: '',
                email: '',
                message: '',
        })
        const [loading, setLoading] = useState(false)
        async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
                event.preventDefault()
                try {
                        setLoading(true)
                        await emailjs.sendForm(
                                import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
                                import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
                                formRef.current as unknown as HTMLFormElement,
                                import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
                        )
                        setFormData({ name: '', email: '', message: '' })
                } catch (error) {
                        console.error('Error sending email:', error)
                } finally {
                        setLoading(false)
                }
        }
        function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
                const { name, value } = event.target as HTMLInputElement | HTMLTextAreaElement
                setFormData((prevData) => ({ ...prevData, [name]: value }))
        }
        return (
                <section id='contact' className='flex-center section-padding'>
                        <div className='w-full h-full md:px-10 ox-5'>
                                <TitleHeader title='Get In Touch With Me' sub='📧 Contact Information' />
                                <div className='mt-16 grid-12-cols'>
                                        <div className='lg:col-span-5'>
                                                <div className='p-10 flex-center card-border rounded-xl'>
                                                        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-full gap-7'>
                                                                <div>
                                                                        <label htmlFor='name'>Name</label>
                                                                        <input type='text' id='name' name='name' placeholder='Your name' value={formData.name} onChange={handleChange} required />
                                                                </div>
                                                                <div>
                                                                        <label htmlFor='email'>Email</label>
                                                                        <input type='email' id='email' name='email' placeholder='Your email' value={formData.email} onChange={handleChange} required />
                                                                </div>
                                                                <div>
                                                                        <label htmlFor='message'>Message</label>
                                                                        <textarea id='message' name='message' placeholder='Your message' value={formData.message} onChange={handleChange} required />
                                                                </div>
                                                                <button type='submit' disabled={loading}>
                                                                        <div className='cta-button group'>
                                                                                <div className='bg-circle' />
                                                                                <p className='text'>{loading ? 'Sending...' : 'Send Message'}</p>
                                                                                <div className='arrow-wrapper'>
                                                                                        <img src='/img/arrow-down.svg' alt='arrow' />
                                                                                </div>
                                                                        </div>
                                                                </button>
                                                        </form>
                                                </div>
                                        </div>
                                        <div className='lg:col-span-7 min-h-96'>
                                                <div className='w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'>
                                                        <ContactExperience />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
