// Novo código para o portfolio moderno com dark mode, animações, integração GitHub e IA Ema

const portfolio = {
    darkMode: false,
    toggleDarkMode: function() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode', this.darkMode);
    },
    init: function() {
        document.getElementById('dark-mode-toggle').addEventListener('click', () => this.toggleDarkMode());
        this.loadProjects();
    },
    loadProjects: function() {
        // Simulação de carregamento de projetos do GitHub
        const projects = [
            { name: 'Projeto 1', url: 'https://github.com/usuario/projeto1' },
            { name: 'Projeto 2', url: 'https://github.com/usuario/projeto2' }
        ];
        const projectContainer = document.getElementById('projects');
        projects.forEach(project => {
            const projectElement = document.createElement('a');
            projectElement.href = project.url;
            projectElement.innerText = project.name;
            projectContainer.appendChild(projectElement);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => portfolio.init());
