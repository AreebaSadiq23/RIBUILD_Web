import Hero from "./hero";
import Header from "./header";
import ServiceSection from "./service";
import RecentProjects from "./RecentProjects";
import WorkingProcessSection from "./workingprocess";
import Testimonials from "./testminols";
import ContactSection from "./contact";
import PricingSection from "./pricing";
import BlogSection from "./blog";
import Footer from "../components/Home-components/footer";


const Home2 = () => {
  return (
    <>
      <Header />
      <Hero />
      <ServiceSection/>
      <RecentProjects />
      <WorkingProcessSection/>
      <Testimonials/>
      <ContactSection/>
      <PricingSection/>
      <BlogSection/>
      <Footer/>
    </>
  );
};

export default Home2;
