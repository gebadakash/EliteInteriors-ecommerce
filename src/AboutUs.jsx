import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import WhyChooseUs from "./components/WhyChooseUs";


const AboutUs = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

  return (
    <>
      <HeroSection />
      <WhyChooseUs></WhyChooseUs>
    </>
  );
};

export default AboutUs;
