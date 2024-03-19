import "./Product.css";
import ProductData from "../ProductData.json";
const Product = () => {
  return (
    <div className="popular-product">
      <div className="container">
        <div className="row">
          {ProductData.map((curElem) => {
            const { id, title, image, content } = curElem;

            return (
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={id}>
                <div className="product-item-sm d-flex" >
                  <div className="thumbnail">
                    <img src={image} alt="Image" className="img-fluid" />
                  </div>
                  <div className="pt-3">
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
