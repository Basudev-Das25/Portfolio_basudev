import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 40px',
            position: 'relative'
        }}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '4px', marginBottom: '30px', display: 'block' }}>
                    BASUDEV DAS
                </span>
                <h1 style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 0.8, marginBottom: '40px', fontWeight: 600 }}>
                    FULL-STACK <br /> <span style={{ color: 'var(--text-secondary)' }}>DEVELOPER</span> <br /> & AI/ML ENGINEER
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ maxWidth: '650px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginTop: '20px' }}
            >
                Bridging the gap between sophisticated AI models and seamless user interfaces to build future-ready digital experiences.
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ position: 'absolute', bottom: '40px', right: '40px' }}
            >
                <div style={{ transform: 'rotate(90deg)', fontSize: '0.7rem', letterSpacing: '2px', color: 'var(--text-secondary)' }}>
                    SCROLL TO EXPLORE
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
