import Frontend from './Frontend';
import Backend from './Backend';
import './skill.css';

const Skills = () => {
    return (
        <div>
            <div>
                <section className="skills section" id="skills">
                    <h2 className="section__title">Skills</h2>
                    <span className="section__subtitle">My Technical Skills</span>
                    <dev className="skills__container container grid"></dev>
                    
                    <Frontend />
                    <Backend />
                </section>
            </div>
        </div>
    )
}

export default Skills;