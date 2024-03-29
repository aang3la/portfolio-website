import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hello, I'm Angela</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span> <br />{" "}
            JavaScript Developer
          </h1>
          <p className="hero-section-description">
            Creative person, a rapid knowledge absorber and curious
            <br /> individual with successfully completed JavaScript Academy.
          </p>
        </div>
        <Link to="Contact" className="btn btn-primary">
          Get In Touch
        </Link>
      </div>
      <div className="hero-section-img">
        <img src="./img/hero-section-img.png" alt="img" />
      </div>
    </section>
  );
};

export default HeroSection;
