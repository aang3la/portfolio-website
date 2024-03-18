import AboutMe from "../AboutMe";
import Contact from "../Contact";
import HeroSection from "../HeroSection";
import Portfolio from "../Portfolio";
import Skills from "../Skills";

const Home = () => {
  return (
    <>
        <HeroSection />
        <Skills />
        <AboutMe />
        <Portfolio />
        <Contact />
    </>
  )
}

export default Home;