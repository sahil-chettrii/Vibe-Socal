import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AppPreview from '../components/AppPreview'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppPreview />
      </main>
      <Footer />
    </>
  )
}