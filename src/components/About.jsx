import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px', width: '100%' }}>
                <div style={{ gridColumn: '1 / span 4' }}>
                    <h2 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '4px' }}>ABOUT ME</h2>
                </div>
                <div style={{ gridColumn: '5 / span 8' }}>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2rem', lineHeight: 1.3, fontWeight: 400 }}
                    >
                        I am a <span style={{ color: 'var(--text-secondary)' }}>Full-Stack Web Developer</span> with a B.Tech in CSE (AI & ML).
                        My expertise lies in building responsive, scalable applications that combine <span style={{ color: 'var(--text-secondary)' }}>frontend engineering excellence</span> with powerful backend APIs and AI-driven features.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '40px', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}
                    >
                        With a strong foundation in React.js, Next.js, and Python, I focus on delivering seamless digital solutions that solve complex problems through clean code and intuitive design.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
