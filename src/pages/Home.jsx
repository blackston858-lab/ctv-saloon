import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import AboutPreview from "../components/AboutPreview";
// import StylistsStrip from "../components/StylistsStrip";
// import Testimonials from "../components/Testimonials";
// import GalleryTeaser from "../components/GalleryTeaser";
 import Footer from "../components/Footer";
import ServicesCategory from "../components/ServicesCategory";
import BarberTeamSection from "../components/BarberTeamSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import PricingMenuSection from "../components/PricingMenuSection";
import GroomingInsights from "../components/GroomingInsights";
import Booking from "../components/Booking";
 
const Home = () => {
  return (
       <div className="bg-[#0A1916] min-h-screen text-[#E6DFD3]">
        <Navbar />
        <Hero />
        <ServicesCategory/>
        <BarberTeamSection/>
        <Testimonials/>
        <WhyChooseUs/>
        <PricingMenuSection/>
        <GroomingInsights />
        <Booking/>
         {/* <AboutPreview />
        <StylistsStrip />
        <Testimonials />
        <GalleryTeaser /> */}
         <Footer />
      </div>
   );
};

export default Home;