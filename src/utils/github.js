const GITHUB_USERNAME = 'Basudev-Das25';

export const fetchProjects = async (domain) => {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error('Failed to fetch repositories');

        const repos = await response.json();

        // Filtering logic
        return repos.filter(repo => {
            if (repo.fork) return false;

            const description = (repo.description || '').toLowerCase();
            const language = (repo.language || '').toLowerCase();
            const name = repo.name.toLowerCase();
            const topics = repo.topics || [];

            if (domain === 'aiml') {
                const mlKeywords = ['ai', 'ml', 'machine-learning', 'deep-learning', 'neural', 'vision', 'tensorflow', 'pytorch', 'cnn'];
                const mlLanguages = ['python', 'jupyter notebook'];

                return mlLanguages.includes(language) ||
                    mlKeywords.some(key => description.includes(key) || name.includes(key) || topics.includes(key));
            } else {
                // Web Dev domain
                const webKeywords = ['web', 'react', 'next', 'portfolio', 'dashboard', 'frontend', 'backend', 'fullstack', 'css', 'html'];
                const webLanguages = ['javascript', 'typescript', 'html', 'css', 'vue', 'astro'];

                return webLanguages.includes(language) ||
                    webKeywords.some(key => description.includes(key) || name.includes(key) || topics.includes(key));
            }
        }).map(repo => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').toUpperCase(),
            category: domain === 'aiml' ? 'AI / MACHINE LEARNING' : 'WEB DEVELOPMENT',
            description: repo.description,
            image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`, // Dynamic OG image from GitHub
            link: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language
        }));
    } catch (error) {
        console.error('GitHub fetch error:', error);
        return [];
    }
};
