import { useEffect, useState } from "react";
import data from "./TestomonialData";
import "./Testomonial.css";
import { MdArrowForwardIos } from "react-icons/md";

const Testomnial = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="Testomonial-section">
      <div className="title">
        <h2 className="Testomonial-title">Testimonials</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, name, image, content, Designation } = item;

          let position = "nextSlide";

          if (indexPeople === index) {
            position = "activeSlide";
          }

          if (
            indexPeople === -1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`Testomonial-artical ${position}`} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4 className="title">{name}</h4>
              <p className="text">{Designation}</p>
              <p className="title">{content}</p>
            </article>
          );
        })}
        <span
          className="prev arrow"
          data-controls="prev"
          aria-controls="tns1"
          onClick={() => setIndex(index - 1)}
        >
            <MdArrowForwardIos />
        </span>
        <span
          className="next arrow"
          data-controls="next"
          aria-controls="tns1"
          onClick={() => setIndex(index + 1)}
        >
            <MdArrowForwardIos />
        </span>
      </div>
    </section>
  );
};

export default Testomnial;
