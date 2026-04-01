import React from 'react'
import Services from './src/component/servicescomp/page'
import WhyChoose from './src/component/whychooseus/page'
import ServiceAreas from './src/component/servicearea/page'
import Testimonials from './src/component/testimonials/page'
import Hero from './src/component/Hero/page'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <WhyChoose/>
        <ServiceAreas/>
        <Testimonials/>
    </div>
  )
}

export default Home
