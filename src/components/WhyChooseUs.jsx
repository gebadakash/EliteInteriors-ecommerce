import AboutData from "./AboutData.json";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row my-5">
                {AboutData.map((curElem) => {
                  const { id, title, image, content } = curElem;
                  return (
                    <div className="col-6 col-md-6" key={id}>
                      <div className="feature">
                        <div className="icon">
                          <img
                            src={image}
                            alt={title} 
                            className="img-fluid"
                          />
                        </div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="images/why-choose-us-img.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WhyChooseUs
