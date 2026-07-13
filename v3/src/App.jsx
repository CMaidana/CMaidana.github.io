import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { C } from "./constants";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.ink }}>
      <Navbar />
      <Hero />
      {/* <SocialProof /> */}
      {/* <Problem /> */}
      {/* <Solution /> */}
      <Features />
      <AboutUs />
      {/* <HowItWorks /> */}
      {/* <Pricing /> */}
      { /*<Testimonials /> */ }
      {/* <FAQ /> */}
      <Contact />
      <FinalCTA />
      <Footer />
      <ChatWidget />
    </div>
  );
}
