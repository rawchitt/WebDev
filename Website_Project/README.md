# Lewis Hamilton - Sports Personality Website

A responsive, interactive, and visually appealing personal website showcasing Lewis Hamilton's career, achievements, and fan engagement.

## 🚀 Features

### Mandatory Features ✅
1. **Homepage**
   - Full-screen hero section with background image
   - Dynamic animated counters (championships, wins, poles, podiums)
   - Smooth scroll navigation with active section highlighting

2. **Career Timeline**
   - Interactive vertical timeline with expandable milestones
   - Click to expand for detailed information and media
   - Chronological display of major achievements

3. **Stats & Achievements**
   - 3 interactive Chart.js visualizations:
     - Bar chart for yearly race wins
     - Radar chart for skill ratings
     - Line chart for career progression
   - Achievement cards with hover effects
   - Responsive grid layout

4. **Media Gallery**
   - Responsive grid gallery with lazy loading
   - Filter by type (All, Photos, Videos, Interviews)
   - Modal lightbox with keyboard navigation (←/→/ESC)
   - Previous/Next controls

5. **Social & Fan Engagement**
   - Social media links with hover effects
   - Fan message form with validation
   - Success/error feedback messages

6. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
   - Fully tested across devices

### Bonus Features ⭐
- **Dark/Light Mode Toggle** - Persistent theme with localStorage
- **Parallax Scrolling** - Hero background parallax effect
- **Lazy Loading** - Images load as they enter viewport
- **Smooth Animations** - Transitions and hover effects throughout
- **Performance Optimized** - Efficient loading and rendering

## 🛠️ Technology Stack

### Core Technologies
- **HTML5** - Semantic structure with accessibility
- **Vanilla CSS** - Modern styling with CSS Grid, Flexbox, Variables
- **Vanilla JavaScript (ES6+)** - Modular architecture with ES6 modules
- **Chart.js** - Data visualization library

### Architecture
```
Frontend (Client-Side)
├── HTML5 (Structure)
├── CSS3 (Styling & Animations)
├── JavaScript Modules
│   ├── main.js (App coordinator)
│   ├── counter.js (Animated counters)
│   ├── timeline.js (Timeline rendering)
│   ├── gallery.js (Gallery & modal)
│   ├── stats.js (Chart.js integration)
│   └── theme.js (Dark mode toggle)
└── JSON Data Files (Simulated backend)
    ├── timeline.json
    ├── media.json
    └── stats.json
```

## 📁 Project Structure

```
vinnovate-project/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles with CSS variables
├── js/
│   ├── main.js           # Main app coordinator
│   ├── counter.js        # Counter animations
│   ├── timeline.js       # Timeline functionality
│   ├── gallery.js        # Gallery & modal
│   ├── stats.js          # Chart.js visualizations
│   └── theme.js          # Theme toggle
├── data/
│   ├── timeline.json     # Career milestones
│   ├── media.json        # Gallery items
│   └── stats.json        # Statistics data
├── assets/
│   ├── images/           # Image assets
│   ├── videos/           # Video assets
│   └── icons/            # Icon assets
└── README.md             # This file
```

## 🎨 Design Features

### Color Palette
- **Light Mode**: Clean whites and grays with cyan accents
- **Dark Mode**: Deep navy blues with vibrant cyan highlights
- **Accent Color**: `#00d9ff` (Cyan) - Mercedes F1 inspired

### Typography
- **Primary Font**: Inter (Body text)
- **Display Font**: Outfit (Headings)
- **Font Loading**: Google Fonts with preconnect optimization

### Animations
- Fade-in-up animations on scroll
- Smooth hover transitions
- Counter animations with easing
- Parallax scrolling effect
- Modal zoom-in animation

## 🚦 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best experience)

### Installation

1. **Clone or download the project**
   ```bash
   cd "c:\Vinnovate Project"
   ```

2. **Open with a local server** (recommended)
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (http-server):
   ```bash
   npx http-server -p 8000
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

   Or simply open `index.html` directly in your browser.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
  - Single column layout
  - Stacked timeline
  - Simplified navigation
  
- **Tablet**: 768px - 1024px
  - 2-column grid layouts
  - Adjusted spacing
  
- **Desktop**: > 1024px
  - Full multi-column layouts
  - Maximum visual impact

## ⌨️ Keyboard Shortcuts

When modal is open:
- `←` Previous image/video
- `→` Next image/video
- `ESC` Close modal

## 🎯 Interactive Elements

1. **Navigation**: Smooth scroll to sections with active highlighting
2. **Timeline Cards**: Click to expand/collapse details
3. **Gallery Items**: Click to open in modal lightbox
4. **Filter Buttons**: Filter gallery by media type
5. **Theme Toggle**: Switch between light/dark modes
6. **Form**: Submit fan messages with validation

## 🔧 Customization

### Changing the Sports Personality

1. **Update HTML** (`index.html`):
   - Change hero title and subtitle
   - Update meta tags and title

2. **Update Data Files**:
   - `data/timeline.json` - Career milestones
   - `data/media.json` - Gallery items
   - `data/stats.json` - Statistics and achievements

3. **Replace Images**:
   - Add images to `assets/images/`
   - Update image paths in JSON files

### Customizing Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
  --accent-color: #00d9ff;  /* Change accent color */
  --bg-primary: #ffffff;     /* Change background */
  /* ... more variables */
}
```

## 📊 Performance Optimizations

- **Lazy Loading**: Images load only when visible
- **Intersection Observer**: Efficient scroll detection
- **CSS Transitions**: Hardware-accelerated animations
- **Modular JS**: Code splitting with ES6 modules
- **Minimal Dependencies**: Only Chart.js for visualizations

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- Images use placeholder URLs from Unsplash and placeholder.com
- Replace with actual images for production use
- Social media links point to Lewis Hamilton's actual profiles
- Form submission is simulated (console.log) - integrate with backend as needed

## 🤝 Credits

- **Design Inspiration**: Charles Leclerc and Lando Norris websites
- **Images**: Unsplash (placeholder images)
- **Charts**: Chart.js library
- **Fonts**: Google Fonts (Inter, Outfit)

## 📄 License

This is a demonstration project for educational purposes.

---

**Built with ❤️ for motorsport excellence**
