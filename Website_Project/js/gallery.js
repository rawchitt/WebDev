// Gallery Module
export class Gallery {
    constructor() {
        this.galleryGrid = document.querySelector('.gallery-grid');
        this.modal = document.querySelector('.modal');
        this.modalImage = document.querySelector('.modal-image');
        this.modalVideo = document.querySelector('.modal-video');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.allItems = [];
        this.currentIndex = 0;
        this.init();
    }

    async init() {
        try {
            const response = await fetch('data/media.json');
            this.allItems = await response.json();
            this.render(this.allItems);
            this.attachEventListeners();
        } catch (error) {
            console.error('Error loading gallery data:', error);
        }
    }

    render(items) {
        if (!this.galleryGrid) return;

        this.galleryGrid.innerHTML = items.map((item, index) => `
      <div class="gallery-item" data-index="${index}" data-type="${item.type}">
        <img src="${item.thumbnail}" alt="${item.title}" class="lazy-load" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=${item.title}'">
        <div class="gallery-overlay">
          <div class="gallery-title">${item.title}</div>
          <div class="gallery-meta">${item.event} • ${item.year}</div>
        </div>
      </div>
    `).join('');

        this.initLazyLoad();
    }

    attachEventListeners() {
        // Filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                const filtered = filter === 'all'
                    ? this.allItems
                    : this.allItems.filter(item => item.type === filter);

                this.render(filtered);
                this.attachGalleryItemListeners();
            });
        });

        this.attachGalleryItemListeners();

        // Modal controls
        const closeBtn = document.querySelector('.modal-close');
        const prevBtn = document.querySelector('.modal-prev');
        const nextBtn = document.querySelector('.modal-next');

        closeBtn?.addEventListener('click', () => this.closeModal());
        prevBtn?.addEventListener('click', () => this.navigate(-1));
        nextBtn?.addEventListener('click', () => this.navigate(1));

        // Close on overlay click
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeModal();
            if (e.key === 'ArrowLeft') this.navigate(-1);
            if (e.key === 'ArrowRight') this.navigate(1);
        });
    }

    attachGalleryItemListeners() {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.getAttribute('data-index'));
                this.openModal(index);
            });
        });
    }

    openModal(index) {
        this.currentIndex = index;
        const item = this.allItems[index];

        if (item.type === 'video') {
            this.modalImage.style.display = 'none';
            this.modalVideo.style.display = 'block';
            this.modalVideo.src = item.url;
        } else {
            this.modalVideo.style.display = 'none';
            this.modalImage.style.display = 'block';
            this.modalImage.src = item.url;
            this.modalImage.alt = item.title;
            // Fallback for missing images
            this.modalImage.onerror = () => {
                this.modalImage.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(item.title)}`;
            };
        }

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        this.modalVideo.src = '';
        document.body.style.overflow = '';
    }

    navigate(direction) {
        this.currentIndex += direction;
        if (this.currentIndex < 0) this.currentIndex = this.allItems.length - 1;
        if (this.currentIndex >= this.allItems.length) this.currentIndex = 0;
        this.openModal(this.currentIndex);
    }

    initLazyLoad() {
        const images = document.querySelectorAll('.gallery-item img');
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
