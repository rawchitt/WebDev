// Timeline Module
export class Timeline {
    constructor() {
        this.timelineContainer = document.querySelector('.timeline');
        this.init();
    }

    async init() {
        try {
            const response = await fetch('data/timeline.json');
            const data = await response.json();
            this.render(data);
            this.attachEventListeners();
        } catch (error) {
            console.error('Error loading timeline data:', error);
        }
    }

    render(events) {
        if (!this.timelineContainer) return;

        this.timelineContainer.innerHTML = events.map((event, index) => `
      <div class="timeline-item" data-index="${index}">
        <div class="timeline-year">${event.year}</div>
        <div class="timeline-content">
          <h3 class="timeline-title">${event.title}</h3>
          <p class="timeline-description">${event.description}</p>
          <div class="timeline-details">
            <img src="${event.image}" alt="${event.title}" class="timeline-image lazy-load" loading="lazy" onerror="this.src='https://via.placeholder.com/600x400?text=${event.year}'">
          </div>
        </div>
      </div>
    `).join('');

        // Initialize lazy loading for timeline images
        this.initLazyLoad();
    }

    attachEventListeners() {
        const items = document.querySelectorAll('.timeline-item');
        items.forEach(item => {
            const content = item.querySelector('.timeline-content');
            content.addEventListener('click', () => {
                item.classList.toggle('expanded');
            });
        });
    }

    initLazyLoad() {
        const images = document.querySelectorAll('.timeline-image');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}
