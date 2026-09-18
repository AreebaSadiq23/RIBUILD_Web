import Service from "./home";
import ServiceSection from "../home2/service";
import EfficientSolutions from "./EfficientSolutions";
import Testimonials from "../home2/testminols";
import Team from "./team";
import PricingSection from "../home2/pricing";
import LogoSection from "./logo";
import Footer from "../servicesdetails/footer";


const Services = () => {
    return (
      <>
      <Service/>
      <ServiceSection/>
      <EfficientSolutions/>
      <Testimonials/>
      <Team/>
      <PricingSection/>
      <LogoSection/>
      <Footer/>
  </>)}

export default Services