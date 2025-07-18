import React from "react";
import Navbar from './component/Navbar/Navbar';
import Hero from "./component/Hero/Hero";
import Program from "./component/Program/Program";
import Title from "./component/Title/Title";
import About from "./component/About/About";
import Gallery from "./component/Gallery/Gallery";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='our program' title='What We Offer'/>
        <Program />
        <About />
        <Title subtitle='Gallery' title='Campus Photos'/>
        < Gallery />
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact />
      <Footer />

      </div>
      
    </div>
  );
}

export default App;
