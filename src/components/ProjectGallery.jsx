import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import DomainSelector from './DomainSelector';
import { fetchProjects } from '../utils/github';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGallery = () => {
    const [activeDomain, setActiveDomain] = useState('aiml');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            setShowAll(false); // Reset when domain changes
            const data = await fetchProjects(activeDomain);
            setProjects(data);
            setLoading(false);
        };
        loadProjects();
    }, [activeDomain]);

    const displayedProjects = showAll ? projects : projects.slice(0, 3);
    const hasMore = projects.length > 3;

    return (
        <section id="work" className="container" style={{ paddingBottom: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', letterSpacing: '4px' }}>PROJECTS</h2>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px' }}>EXPLORE BY DOMAIN</p>
                </div>
                {!loading && (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '2px' }}>
                        {showAll ? `(ALL ${projects.length})` : `(TOP 3 OF ${projects.length})`} RESULTS
                    </span>
                )}
            </div>

            <DomainSelector activeDomain={activeDomain} onSelect={setActiveDomain} />

            {loading ? (
                <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ width: '40px', height: '40px', border: '2px solid var(--glass-border)', borderTop: '2px solid #fff', borderRadius: '50%' }}
                    />
                </div>
            ) : (
                <>
                    <motion.div
                        layout
                        className="cinematic-grid"
                    >
                        <AnimatePresence mode="popLayout">
                            {displayedProjects.length > 0 ? (
                                displayedProjects.map(project => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                ))
                            ) : (
                                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 0', color: 'var(--text-secondary)' }}>
                                    NO REPOSITORIES FOUND IN THIS DOMAIN ON GITHUB
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {hasMore && (
                        <div style={{ marginTop: '60px', textAlign: 'center' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowAll(!showAll)}
                                style={{
                                    padding: '16px 40px',
                                    borderRadius: '50px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'var(--glass-bg)',
                                    fontSize: '0.8rem',
                                    letterSpacing: '2px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'var(--transition-smooth)'
                                }}
                            >
                                {showAll ? 'CLOSE ARCHIVE' : `VIEW ENTIRE ARCHIVE (${projects.length - 3} MORE)`}
                            </motion.button>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default ProjectGallery;
