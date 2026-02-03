import React from 'react';

const Footer = () => {
    return (
        <footer className="container" style={{
            padding: '60px 40px',
            borderTop: '1px solid var(--glass-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '100px'
        }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                © 2026 FORGED PORTFOLIO. ALL RIGHTS RESERVED.
            </div>
            <div style={{ display: 'flex', gap: '20px', fontSize: '0.8rem' }}>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>TWITTER</a>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>DRIBBBLE</a>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>LINKEDIN</a>
            </div>
        </footer>
    );
};

export default Footer;
