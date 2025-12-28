// Theme Toggle Module
export class ThemeToggle {
    constructor() {
        this.themeToggleBtn = document.querySelector('.theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateIcon();

        // Attach event listener
        this.themeToggleBtn?.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateIcon();
    }

    updateIcon() {
        if (this.themeToggleBtn) {
            this.themeToggleBtn.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
        }
    }
}
