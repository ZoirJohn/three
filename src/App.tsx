import LogoSection from './sections/LogoSection'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Experience from './sections/Experience'

export default function App() {
        return (
                <>
                        <Navbar />
                        <Hero />
                        <Showcase />
                        <LogoSection />
                        <FeatureCards />
                        <Experience />
                </>
        )
}
