import CTA from "../components/CTA";
import CaseStudies from "../sections/CaseStudies";
import Companies from "../sections/Companies";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Teams from "../sections/Teams";
import WorkingProcess from "../sections/WorkingProcess";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
      <Teams />
      <Contact />
    </>
  );
};

export default Home;
