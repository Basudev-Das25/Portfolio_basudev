import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="navbar glass"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 40px',
                zIndex: 100,
                borderBottom: '1px solid var(--glass-border)'
            }}
        >
            <div className="logo" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '4px' }}>
                BASUDEV DAS
            </div>
            <ul style={{ display: 'flex', gap: '40px', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '2px' }}>
                <li><a href="#about" style={{ opacity: 0.7 }}>ABOUT</a></li>
                <li><a href="#skills" style={{ opacity: 0.7 }}>SKILLS</a></li>
                <li><a href="#work" style={{ opacity: 0.7 }}>WORK</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=basudevd983@gmail.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 1, border: '1px solid var(--glass-border)', padding: '8px 16px', borderRadius: '4px' }}>HIRE ME</a></li>
            </ul>
            <style>{`
        .navbar a:hover {
          opacity: 1 !important;
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
