import data from "../../data/index.json";

const Skills = () => {
  return (
    <section className="skills-section" id="mySkills">
        <div className="portfolio-container">
            <h2 className="skills-section-heading">My Expertise</h2>
            <div className="skills-section-container">
                {data.skills.map((item, i) => (
                    <div key={i} className="skills-section-card">
                        <div className="skills-section-img">
                            <img src={item.source} width={200} />
                        </div>
                        <div className="skills-section-card-content"> 
                            <h3 className="skills-section-title">{item.title}</h3>
                            <p className="skills-section-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills;