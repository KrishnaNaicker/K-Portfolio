(function() {
    const projects = [
        {
            title: 'RapiDoc',
            description: 'An LLM-powered system for medical documentation utilizing RAG for efficient patient record management.',
            tags: ['Python', 'LangChain', 'RAG', 'FastAPI'],
            github: 'https://github.com/KrishnaNaicker/Rapidoc',
            demo: 'https://krishnanaicker.github.io/Rapidoc/'
        },
        {
            title: 'HealthEase',
            description: 'Medical chatbot powered by Gemini Pro LLM for preliminary diagnosis and health consultations.',
            tags: ['Python', 'Streamlit', 'BERT', 'MongoDB'],
            github: 'https://github.com/KrishnaNaicker/HealthEase',
            demo: 'https://healthease.streamlit.app'
        },
        {
            title: 'HealBERT',
            description: 'A production-ready self healing emotion classification system with intelligent fallback mechanisms, sarcasm detection, and ensemble backup models.',
            tags: ['Python', 'BERT', 'LangGraph', 'LoRA'],
            github: 'https://github.com/KrishnaNaicker/self-healing-dag',
            demo: null
        },
        {
            title: 'CareFlow',
            description: 'Multi-agent AI system for healthcare workflows using LangGraph.',
            tags: ['Python', 'LangGraph', 'GroqAPI', 'CrewAI'],
            github: 'https://github.com/KrishnaNaicker/health-ai-agents',
            demo: null
        },
        {
            title: 'QuizSpark',
            description: 'AI-powered quiz generation platform using Claude API.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'OpenTriviaDB'],
            github: 'https://github.com/KrishnaNaicker/QuizSpark',
            demo: 'https://quiz-spark-eight.vercel.app'
        },
        {
            title: 'VERBALIZE Lip Reader',
            description: 'Deep learning model for lip reading using computer vision.',
            tags: ['TensorFlow', 'ML', 'Matplotlib', 'OpenCV'],
            github: 'https://github.com/KrishnaNaicker/VERBALIZE_Lip-Reader',
            demo: null
        }
    ];

    function displayProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = projects.map(p => `
            <div class="project-card">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-description">${p.description}</p>
                <div class="project-tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" class="project-link">View Repository →</a>
                    ${p.demo ? `<a href="${p.demo}" target="_blank" class="project-link">Live Demo →</a>` : ''}
                </div>
            </div>
        `).join('');
        
        console.log('✅ Projects loaded');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', displayProjects);
    } else {
        displayProjects();
    }
})();