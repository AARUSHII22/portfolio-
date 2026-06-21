# Aarushi Garg Portfolio

Personal portfolio website for **Aarushi Garg** focused on full-stack development, AI/ML, hackathons, certifications, and creative product design.

This project is built as a **single-page static portfolio** using plain HTML, CSS, and JavaScript, with a strong editorial visual style and responsive layouts for desktop and mobile.

## Live Structure

The website is organized as a long-form narrative portfolio with the following major sections:

1. Hero
2. About Me
3. Resume
4. Hackathons Showcase
5. Certifications
6. Projects
7. Contact

## Tech Stack

### Core

- `HTML5`
- `CSS3`
- `Vanilla JavaScript`

### Fonts

- `Fraunces` from Google Fonts
- `Inter` from Google Fonts
- `Satoshi` from Fontshare
- Local display fonts stored in `assets/`
  - `ruigslay.otf`
  - `duckin.ttf`
  - `didot-bold.otf`
  - `didot-title.otf`
  - `gerbil.otf`
  - `san-miguel.otf`
  - `tropical-magic.otf`

### Assets

- Portrait images
- Custom collage images
- Certification screenshots
- PDF resume
- Hackathon poster graphic

### Deployment Model

- Static website
- No framework
- No bundler required
- Can be hosted on GitHub Pages, Netlify, Vercel static hosting, or opened directly via `index.html`

## File Hierarchy

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
├── assets/
│   ├── Aarushi-Garg-CV.pdf
│   ├── aarushi-portrait.jpeg
│   ├── about-knowme-new.png
│   ├── about-knowme.png
│   ├── cert-deeplearning-embeddings.png
│   ├── cert-google-networking.png
│   ├── cert-jpmorgan-forage.png
│   ├── cert-vertex-prompt.png
│   ├── contact-developer.png
│   ├── hackathon-poster.jpg
│   └── font files...
└── outputs/
    └── aarushi-portfolio/
```

## Components and Sections

## 1. Hero Section

### Purpose

Introduces Aarushi with a bold editorial headline and social links.

### Key Components

- `topbar`
  - Brand/logo
  - Mobile menu toggle
  - Navigation links
- `hero-stage`
  - Main solid title: `PORTFOLIO`
  - Layered outline title repetitions
  - Portrait frame with duotone overlays
  - Social links
  - Short intro bio
- `scroll-badge`

### Important Classes

- `.hero`
- `.topbar`
- `.brand`
- `.menu-toggle`
- `.nav-links`
- `.hero-stage`
- `.hero-title-solid`
- `.hero-title-outline`
- `.hero-photo-wrap`
- `.portrait-frame`
- `.duotone-layer`
- `.hero-contact-list`
- `.hero-bio`
- `.scroll-badge`

## 2. About Me Section

### Purpose

Provides a short personal introduction and a visual “know me” card.

### Key Components

- Text copy block
- LinkedIn pill CTA
- Decorative `RESUME` outline background
- Composite image card
- Copyable contact detail block

### Important Classes

- `.intro-panel`
- `.intro-copy`
- `.section-tag`
- `.about-link-pill`
- `.about-card-wrap`
- `.resume-outline`
- `.about-card`
- `.about-composite-image`
- `.about-copyable-contact`

## 3. Resume Section

### Purpose

Showcases education, experience, and technical skills.

### Structure

- Left column
  - Education timeline
  - Experience list
  - Experience tags
- Right column
  - Technical skills blocks

### Skill Categories Included

- Languages
- Web Development
- AI / ML
- Cloud & Tools

### Important Classes

- `.resume-spread`
- `.resume-left`
- `.resume-right`
- `.education-panel`
- `.education-list`
- `.education-item`
- `.experience-panel`
- `.experience-item`
- `.experience-tags`
- `.technical-panel`
- `.technical-grid`
- `.skill-box`
- `.web-columns`

## 4. Hackathons Showcase Section

### Purpose

Presents hackathon participation using a branded showcase layout with a collage, preview cards, and an interactive laptop deck.

### Main Visual Areas

- Accent band with hackathon poster
- Tools row
- Color swatches
- Preview cards
- Laptop mockup
- Clickable stacked hackathon cards

### Interactive Behavior

Users can click different hackathon cards inside the laptop stack. The selected card expands and moves upward while the remaining cards stay layered underneath.

### Hackathons Included

- Summer of CodeFest '25
- SolVit Hackathon
- Adobe India Hackathon
- NextGen Hackathon
- SEBI Securities Market Hackathon
- UIDAI Idea & Budget Proposal
- Matrix 3.0

### Important Classes

- `.hackathon-showcase-section`
- `.hackathon-band`
- `.hackathon-band-index`
- `.hackathon-band-collage`
- `.hackathon-collage-frame`
- `.hackathon-collage-image`
- `.hackathon-band-copy`
- `.hackathon-band-meta`
- `.hackathon-tools`
- `.hackathon-swatches`
- `.hackathon-showcase`
- `.hackathon-preview-stack`
- `.hackathon-preview-card`
- `.hackathon-laptop-column`
- `.hackathon-laptop-shell`
- `.hackathon-laptop-header`
- `.hackathon-laptop-screen`
- `.hackathon-roll-deck`
- `.hackathon-roll-card`
- `.hackathon-roll-details`

## 5. Certifications Section

### Purpose

Highlights course and program certifications using collage cards and supporting visuals.

### Certifications Included

1. NLP Text Embeddings / Google Networking visual
2. Software Engineering Job Simulation
3. Prompt Design in Vertex AI
4. DeepLearning.AI Text Embeddings

### Visual Composition

- Scrolling marquee strip for `CERTIFICATIONS`
- Colored certificate bands
- Collage stacks
- Supporting compact certification cards

### Important Classes

- `.certifications-section`
- `.certifications-marquee`
- `.certifications-bands`
- `.cert-band`
- `.cert-band-index`
- `.cert-band-collage`
- `.cert-shot`
- `.cert-band-copy`
- `.cert-compact-grid`
- `.cert-compact-card`

## 6. Projects Section

### Purpose

Displays portfolio projects as horizontally scrollable poster cards with hover/focus interactions.

### Behavior

- Horizontal drag-to-scroll
- Arrow button navigation
- Hover pop-out effect
- Center-settle focus effect
- Project cards can link to GitHub repositories

### Current Project Links

1. Trinethra  
   [AARUSHII22/trinethra-project.git](https://github.com/AARUSHII22/trinethra-project.git)

2. BDA Team Management Module  
   [AARUSHII22/Mern-BDA-model.git](https://github.com/AARUSHII22/Mern-BDA-model.git)

3. Hackathon Frontend UI  
   [AARUSHII22/frontend.git](https://github.com/AARUSHII22/frontend.git)

4. Soybean Analysis Model  
   [dvmmisAfk/Soybean_analysis_model.git](https://github.com/dvmmisAfk/Soybean_analysis_model.git)

5. Lung Cancer Detection System  
   [dvmmisAfk/Lung-Cancer-Detection-System.git](https://github.com/dvmmisAfk/Lung-Cancer-Detection-System.git)

6. Software Engineering Job Simulation  
   [AARUSHII22/my_forage-midas-.git](https://github.com/AARUSHII22/my_forage-midas-.git)

7. VPMS Dashboard  
   [AARUSHII22/vpms_dashboard.git](https://github.com/AARUSHII22/vpms_dashboard.git)

### Important Classes

- `.projects-showcase`
- `.projects-header`
- `.projects-nav`
- `.projects-nav-btn`
- `.projects-rail`
- `.poster-card`
- `.poster-card-link`
- `.poster-surface`
- `.poster-top`
- `.poster-accent-circle`
- `.poster-ghost-word`
- `.poster-body`
- `.poster-index`

## 7. Contact Section

### Purpose

Provides a playful “Say Hey” call-to-action, social link tiles, and a contact form.

### Main Elements

- Contact collage visual
- Quick action tiles
  - LinkedIn
  - GitHub
  - Resume
  - Email
- Contact introduction copy
- Contact details
- Social presence links
- Contact form

### Important Classes

- `.contact-section`
- `.contact-band`
- `.contact-collage-shell`
- `.contact-collage-photo-wrap`
- `.contact-collage-photo`
- `.contact-link-tiles`
- `.contact-content`
- `.contact-columns`
- `.contact-form-card`
- `.contact-form-grid`
- `.contact-submit`

## JavaScript Features

All interaction logic lives in [script.js](C:/Users/HP/Documents/Codex/2026-06-18/files-mentioned-by-the-user-main/script.js).

### 1. Mobile Navigation Toggle

- Opens and closes the mobile nav menu
- Updates `aria-expanded`

### 2. Reveal-on-Scroll Animation

- Uses `IntersectionObserver`
- Adds `.is-visible` to `.reveal` elements
- Applies staggered reveal delay through CSS custom properties

### 3. Projects Rail Interaction

- Left/right arrow scrolling
- Pointer drag scrolling
- Hover priority focus
- Settled centered-card focus after scroll pause
- Pop-out visual state using `.is-popped`

### 4. Hackathon Roll Stack

- Click-based active card switching
- Active card expands upward
- Inactive cards remain layered underneath
- Uses inline transforms and z-index updates

## CSS System

All visual styling lives in [styles.css](C:/Users/HP/Documents/Codex/2026-06-18/files-mentioned-by-the-user-main/styles.css).

### Styling Approach

- Custom editorial layout system
- Heavy use of layered grids
- Responsive breakpoints
- Animated reveal and hover motion
- Custom font loading
- Decorative collage treatment

### Major CSS Areas

- Base variables and typography
- Hero styling
- About card layout
- Resume grid
- Hackathon showcase styling
- Certification band styling
- Poster scroll system
- Contact form and collage styling
- Responsive media queries
- Motion and keyframes

### Key Responsive Breakpoints

- `@media (max-width: 1180px)`
- `@media (max-width: 1080px)`
- `@media (max-width: 760px)`
- `@media (max-width: 720px)`
- `@media (max-width: 560px)`
- `@media (max-width: 420px)`

### Motion / Animation Patterns

- Hero title lift
- Outline drift
- Sparkle float
- Portrait float
- Scroll badge bob
- Active card glow
- Contact collage photo drift
- Reveal transitions

## Design Characteristics

### Visual Style

- Editorial / magazine-inspired
- Luxury serif typography mixed with clean sans-serif UI text
- Layered collage presentation
- Dark forest greens, cream backgrounds, mustard accents, rust/maroon panels

### Interaction Style

- Smooth reveal animations
- Horizontal project browsing
- Focus and hover emphasis
- Clickable stacked hackathon previews

## Accessibility Notes

- Uses semantic sections and headings
- Includes `alt` text for major images
- Uses button elements for real interactions
- Navigation toggle includes `aria-label` and `aria-expanded`
- External profile/project links use `target="_blank"` with `rel="noreferrer"`

## How to Run Locally

### Option 1: Open Directly

Open [index.html](C:/Users/HP/Documents/Codex/2026-06-18/files-mentioned-by-the-user-main/index.html) in a browser.

### Option 2: Serve Locally

Use any simple static server, for example:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment Notes

This project is suitable for:

- GitHub Pages
- Netlify
- Vercel static deploy
- Any static file host

Make sure the following files are deployed together:

- `index.html`
- `styles.css`
- `script.js`
- full `assets/` folder

## Author

**Aarushi Garg**

- LinkedIn: [www.linkedin.com/in/aarushi-garg-g2205](https://www.linkedin.com/in/aarushi-garg-g2205)
- GitHub: [github.com/AARUSHII22](https://github.com/AARUSHII22)

