import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="project-card"
            style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                cursor: 'pointer',
                background: '#111',
                border: '1px solid var(--glass-border)'
            }}
            onClick={() => window.open(project.link, '_blank')}
        >
            <motion.div
                className="image-container"
                style={{ width: '100%', height: '100%' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                }}
                    className="overlay"
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>
                            {project.category}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                            <Star size={12} /> {project.stars}
                        </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{project.title}</h3>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {project.description || 'No description provided.'}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.7rem', fontWeight: 600 }}>
                        {project.language} <ExternalLink size={14} />
                    </div>
                </div>
            </motion.div>
            <style>{`
        .project-card:hover .overlay {
          opacity: 1 !important;
        }
      `}</style>
        </motion.div>
    );
};

export default ProjectCard;
