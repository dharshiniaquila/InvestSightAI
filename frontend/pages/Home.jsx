import Navbar from "../components/Navbar";
import GlowBackground from "../components/GlowBackground";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <GlowBackground />
      <Navbar />
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <Footer />
    </>
  );
}