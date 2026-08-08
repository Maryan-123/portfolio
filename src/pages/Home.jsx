import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import GithubSection from "../components/sections/Github";
import Services from "../components/sections/Services";
import Journey from "../components/sections/Journey";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
      <Services />
      <Journey />
      <Education />
      <Contact />
    </>
  );
}
