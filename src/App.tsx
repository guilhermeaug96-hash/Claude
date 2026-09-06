import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import PartnersGrid from './components/PartnersGrid'
import HowItWorks from './components/HowItWorks'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Categories />
        <PartnersGrid />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
