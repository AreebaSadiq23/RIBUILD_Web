import Header from "./header";
import Home from "./hero";
import MissionSection from "./MissionSection";
import ConstructionDesign from "./construction";
import TeamAndFAQ from "./faqs";
import RecentProjects from "./recentprojects";
import TestimonialPricingSection from "./testminols";
import PricingSection from "./pricing";
import BlogSection from "./blogsection";
import Footer from "./footer";



export default function Home3() {
  return (
    <>
      <Header />
      <Home/>
      <MissionSection/>
      <ConstructionDesign/>
      <TeamAndFAQ/>
      <RecentProjects/>
      <TestimonialPricingSection/>
      <PricingSection/>
       <BlogSection/>
      <Footer/>
    </>
  );
}
