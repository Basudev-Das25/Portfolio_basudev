import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code } from 'lucide-react';

const DomainSelector = ({ activeDomain, onSelect }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '80px' }}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect('aiml')}
                className={`glass ${activeDomain === 'aiml' ? 'active-domain' : ''}`}
                style={{
                    padding: '40px',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    textAlign: 'center',
                    transition: 'var(--transition-smooth)',
                    border: activeDomain === 'aiml' ? '1px solid var(--text-primary)' : '1px solid var(--glass-border)',
                    background: activeDomain === 'aiml' ? 'rgba(255,255,255,0.08)' : 'var(--glass-bg)'
                }}
            >
                <Brain size={40} style={{ marginBottom: '20px', color: activeDomain === 'aiml' ? '#fff' : 'var(--text-secondary)' }} />
                <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>AI / MACHINE LEARNING</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '10px' }}>Exploring Deep Learning, CNNs, and Intelligent Systems</p>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect('webdev')}
                className={`glass ${activeDomain === 'webdev' ? 'active-domain' : ''}`}
                style={{
                    padding: '40px',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    textAlign: 'center',
                    transition: 'var(--transition-smooth)',
                    border: activeDomain === 'webdev' ? '1px solid var(--text-primary)' : '1px solid var(--glass-border)',
                    background: activeDomain === 'webdev' ? 'rgba(255,255,255,0.08)' : 'var(--glass-bg)'
                }}
            >
                <Code size={40} style={{ marginBottom: '20px', color: activeDomain === 'webdev' ? '#fff' : 'var(--text-secondary)' }} />
                <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>WEB DEVELOPMENT</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '10px' }}>Crafting Scalable Full-Stack Apps & Smooth Interfaces</p>
            </motion.div>
        </div>
    );
};

export default DomainSelector;
