import "./Footer.css";
import FooterData from "./FooterData.json";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container relative">
        

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img
                    src="images/envelope-outline.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary Sendbtn">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                Furni<span>.</span>
              </a>
            </div>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>

            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              {FooterData.map((curElem) => {
                const { id, Link } = curElem;

                return (
                  <div className="col-6 col-sm-6 col-md-3" key={id}>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">{Link}</a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright ©
                <script>document.write(new Date().getFullYear());</script>2024.
                All Rights Reserved. — Designed with love by{" "}
                <a href="https://untree.co">Untree.co</a> Distributed By{" "}
                <a href="https://themewagon.com">ThemeWagon</a>
              </p>
            </div>

            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
