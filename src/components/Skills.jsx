import React from 'react';

const skills = [
    "REACT.JS", "NEXT.JS", "JAVASCRIPT", "PYTHON", "TENSORFLOW", "NODE.JS", "MONGODB", "FAST API", "FLASK", "TAILWIND CSS", "FRAMER MOTION", "DEEP LEARNING", "CNNs", "REST APIs"
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '40px 0' }}>
            <div className="marquee-container">
                <div className="marquee-content animate-scroll">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
                <div className="marquee-content animate-scroll" aria-hidden="true">
                    {skills.map((skill, index) => (
                        <span key={`clone-${index}`} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
