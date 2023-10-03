import React from 'react'

import Hero from "../component/Hero";
import Wrapper from "../component/Wrapper";
import Wrapper2 from "../component/Wrapper2";
import Wrapper3 from "../component/Wrapper3";
import Section from "../component/Section";
import Section2 from "../component/Section2";
import Footer from "../component/Footer";



export default function Home() {
  return (
    <div>
      <Hero />
      <Wrapper />
      <Wrapper2 />
      <Wrapper3 />
      <Section />
      <Section2 />
      <Footer />
    </div>
  )
}
