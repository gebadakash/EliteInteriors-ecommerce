import "./Hero.css";
import { useGlobalContext } from "../context";
import Button from "./Button";

const HeroSection = () => {
  
  const { title, image, content } = useGlobalContext();

  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                <span className="d-block">{title}</span>
              </h1>
              <p className="mb-4">{content}</p>
              <p>
                <Button
                  name="Shop Now"
                  className="btn btn-secondary me-2"
                ></Button>
                <Button
                  name="Explore"
                  className="btn btn-white-outline"
                ></Button>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src={image} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
