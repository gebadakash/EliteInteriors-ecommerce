import ChairData from "../ChairData.json";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Crafted with excellent material.
            </h2>
            <p className="mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <p>
              <button to=" " className="btun">
                Explore
              </button>
            </p>
          </div>

          {ChairData.map((curElem) => {
            const { id, title, image, price, icon } = curElem;

            return (
              // eslint-disable-next-line react/jsx-key
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <div className="product-item" key={id}>
                  <img
                    src={image}
                    className="img-fluid product-thumbnail"
                    alt={title}
                  />
                  <h3 className="product-title">{title}</h3>
                  <strong className="product-price">{price}</strong>
                  <span className="icon-cross">
                    <img src={icon} className="img-fluid" alt="Cross icon" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
