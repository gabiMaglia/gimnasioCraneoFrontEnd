import React from "react";
import "./frases.css";

const Frases = () => {
  return (
    <section className="section-container frases">
      <div className="row">
        <div className="col-12">
          <h2 className="say1">
            <span
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              La distancia entre los sueños{" "}
            </span>
            {/* <span data-aos="fade-down">r</span>
                <span data-aos="fade-up">a</span>
                <span data-aos="fade-down">n</span>
                <span data-aos="fade-up">d</span>
                <span data-aos="fade-down">o</span>
                <span data-aos="fade-up">m</span> */}
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="say2">
            <span
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {" "}
              y la realidad{" "}
            </span>
            {/* <span data-aos="fade-down">c</span>
                 <span data-aos="fade-up">h</span>
                 <span data-aos="fade-down">a</span>
                 <span data-aos="fade-up">m</span>
                 <span data-aos="fade-down">u</span>
                 <span data-aos="fade-up">l</span>
                 <span data-aos="fade-down">l</span>
                 <span data-aos="fade-up">o</span> */}
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="say3">
            <span
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              se llama disciplina.
            </span>
            {/* <span data-aos="fade-down">d</span>
                <span data-aos="fade-up">e</span>
                <span data-aos="fade-down">p</span>
                <span data-aos="fade-up">o</span>
                <span data-aos="fade-down">r</span>
                <span data-aos="fade-up">t</span>
                <span data-aos="fade-down">v</span>
                <span data-aos="fade-up">o</span> */}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Frases;
