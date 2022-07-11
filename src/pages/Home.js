import { Intro, Navbar, Screenshots, Overview, Features, WhyUs, Describe, Download, Contact, Footer } from '../components'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Intro/>
        <Screenshots/>
        <Overview/>
        <Features/>
        <WhyUs/>
        <Describe/>
        <Download/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home