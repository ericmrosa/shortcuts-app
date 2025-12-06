// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch((error) => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Shortcuts manager
class ShortcutsManager {
    constructor() {
        this.shortcuts = this.loadShortcuts();
        this.init();
    }

    init() {
        this.form = document.getElementById('shortcut-form');
        this.nameInput = document.getElementById('name');
        this.urlInput = document.getElementById('url');
        this.container = document.getElementById('shortcuts-container');
        this.emptyMessage = document.getElementById('empty-message');

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.render();
    }

    loadShortcuts() {
        const stored = localStorage.getItem('shortcuts');
        return stored ? JSON.parse(stored) : [];
    }

    saveShortcuts() {
        localStorage.setItem('shortcuts', JSON.stringify(this.shortcuts));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const name = this.nameInput.value.trim();
        let url = this.urlInput.value.trim();

        // Ensure URL has protocol
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        const shortcut = {
            id: Date.now().toString(),
            name,
            url,
            createdAt: new Date().toISOString()
        };

        this.shortcuts.unshift(shortcut);
        this.saveShortcuts();
        this.render();
        this.form.reset();
    }

    deleteShortcut(id) {
        if (confirm('Delete this shortcut?')) {
            this.shortcuts = this.shortcuts.filter(s => s.id !== id);
            this.saveShortcuts();
            this.render();
        }
    }

    openShortcut(url, openInApp) {
        if (openInApp) {
            // Open in the same window (within the app)
            window.location.href = url;
        } else {
            // Open in default browser (new tab/window)
            window.open(url, '_blank');
        }
    }

    render() {
        this.container.innerHTML = '';

        if (this.shortcuts.length === 0) {
            this.emptyMessage.style.display = 'block';
            return;
        }

        this.emptyMessage.style.display = 'none';

        this.shortcuts.forEach(shortcut => {
            const card = document.createElement('div');
            card.className = 'shortcut-card';
            card.innerHTML = `
                <div class="shortcut-header">
                    <h3 class="shortcut-name">${this.escapeHtml(shortcut.name)}</h3>
                    <button class="btn-delete" data-id="${shortcut.id}" aria-label="Delete shortcut">
                        ×
                    </button>
                </div>
                <p class="shortcut-url">${this.escapeHtml(shortcut.url)}</p>
                <div class="shortcut-actions">
                    <button class="btn btn-secondary btn-open-app" data-id="${shortcut.id}">
                        Open in App
                    </button>
                    <button class="btn btn-primary btn-open-browser" data-id="${shortcut.id}">
                        Open in Browser
                    </button>
                </div>
            `;

            // Add event listeners
            card.querySelector('.btn-delete').addEventListener('click', () => {
                this.deleteShortcut(shortcut.id);
            });

            card.querySelector('.btn-open-app').addEventListener('click', () => {
                this.openShortcut(shortcut.url, true);
            });

            card.querySelector('.btn-open-browser').addEventListener('click', () => {
                this.openShortcut(shortcut.url, false);
            });

            this.container.appendChild(card);
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new ShortcutsManager();
});
