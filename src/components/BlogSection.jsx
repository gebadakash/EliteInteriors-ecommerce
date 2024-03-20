import BlogData from "./BlogData.json";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="#" className="more">
              View All Posts
            </a>
          </div>
        </div>

        <div className="row">
          {BlogData.map((curElem) => {
            const { id, title, image, name, date } = curElem;

            return (
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0" key={id}>
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={image} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">{title}</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">{name}</a>
                      </span>{" "}
                      <span>
                        on <a href="#">{date}</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
