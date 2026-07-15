import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      
        <Services />
      

      
        <Portfolio />
      

      
        <WhyChooseUs />
      

      
        <GoogleReviews />
      

      
        <Contact />
      

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}