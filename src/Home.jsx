import { useEffect } from "react";
import HeroSection from "./components/HeroSection"
import Shop from "./components/Shop"
import { useGlobalContext } from "./context";
import Services from "./Services";
import Product from "./components/Product";
import Testomnial from "./components/Testomnial";
import Blog from "./Blog";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
    <HeroSection></HeroSection>
    <Shop></Shop>
    <Services></Services>
    <Product></Product>
    <Testomnial></Testomnial>
    <Blog></Blog>
    </>
  )
}

export default Home
