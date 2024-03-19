
const AboutMe = () => {
  return (
    <section id="AboutMe" className="about-section">
        <div className="about-section-img">
            <img src="./img/about-me-img.png" alt="about-me" width={450} height={450} />
        </div>
        <div className="hero-section-content-box about-section-box">
            <div className="hero-section-content">
                <h1 className="skills-section-heading">
                    About Me
                </h1>
                <p className="hero-section-description">As someone who's passionate about technology and loves learning new things, I've navigated a journey from excelling in mathematics during high school to delving into e-business at the Faculty of Economics. Along the way, I've eagerly dived into courses on Digital Marketing, SEO, and Web Development, refining my skills in market research, optimizing campaigns, and managing social media.</p>
                <p className="hero-section-description">With expertise in HTML5, CSS, JavaScript, and frameworks like React and Node.js, complemented by my natural knack for creative problem-solving, I'm eager to bring my unique talents to innovative projects and continue evolving in the dynamic tech world.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe;