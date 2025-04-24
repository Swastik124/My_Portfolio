import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import Testimonial from "./testimonial"
import Footer from "./footer"
import Skills from "./SkillsSection"

const main = () => {
  return (
    <div className="bg-indigo-600">
        <Nav />
      <section id="hero">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <Footer />
    </div>
  )
}

export default main