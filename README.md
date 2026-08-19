# Dimas Ahmad Noorsaid — Personal Portfolio Website

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, professional, clean, and fully responsive personal portfolio website for **Dimas Ahmad Noorsaid** (Dimas Ars), a Computer Engineering graduate from **Telkom University** based in **Jakarta, Indonesia**.

The website is engineered to introduce Dimas's profile, core competencies, and practical projects to recruiters, HR professionals, and technology companies—focusing on **IT Support**, **Business Analysis**, **System Analysis**, and **Digital Solutions**.

---

## 🌟 Highlights & Sections

1. **Hero Section**:
   - Dynamic headline `"Hello, I'm Dimas Ars"` with tech-oriented dark styling.
   - Subtitle: `"Computer Engineering Graduate | IT Support | Business Analysis"`.
   - Clear Call-to-Actions: **"View My Projects"** and **"Download CV"**.
   - Verified profile badges and direct links to GitHub, LinkedIn, and Email.

2. **About Me**:
   - Highlights Telkom University Computer Engineering academic foundation.
   - 4 Core Pillars: *IT Support & Infrastructure*, *Business & System Analysis*, *Process Modeling & BPMN*, and *Digital Solutions & IoT*.

3. **Education**:
   - **Bachelor of Computer Engineering (S.T.)** from **Telkom University**, Bandung.
   - Core relevant coursework: Computer Networking (TCP/IP), Operating Systems, Hardware Diagnostics & Assembly, Software Troubleshooting, and Embedded IoT.

4. **Professional Experience**:
   - **Business Analyst Intern** at **CNT IT Corporation** *(July 2024 – August 2024)*.
   - Key contributions in requirement analysis, SRS documentation, BPMN 2.0 process modeling, stakeholder collaboration, and Sparx Enterprise Architect modeling.

5. **Skills Matrix**:
   - Filterable categories: **Technical Skills**, **Business & Analysis Skills**, and **Soft Skills**.
   - Realistic proficiency indicators (*Intermediate*, *Fundamental*, *Strong*).

6. **Featured Projects**:
   - 🍓 **IoT Strawberry Monitoring and Automatic Watering System**: Real-time environmental telemetry with ESP32, DHT22, capacitive soil moisture sensor, pH sensor, cloud storage, mobile dashboard, and automated irrigation.
   - 🐙 **Git & GitHub Learning & Version Control Practice**: Practical repository management, multi-branch strategies, merge conflict resolution, and collaborative pull request workflows.

7. **Technical Learning & Development Journey**:
   - Highlights ongoing technical learning in IT Support, Pengadaan Barang/Jasa Pemerintah (PBJP), Computer Networking, Hardware/Software Troubleshooting, and Advanced Git.

8. **Contact ("Let's Connect")**:
   - Direct contact channels: Email (`Dimasars79@gmail.com`) with one-click copy button, LinkedIn, GitHub, and an interactive message draft composer with `mailto:` trigger.

9. **Interactive Modals & CV Download**:
   - Built-in CV viewer modal with ready-to-download PDF document (`Dimas_Ahmad_Noorsaid_CV.pdf`).
   - Project specifications and architecture inspection modal.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom High-Definition SVG Brand Icons
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Outfit](https://fonts.google.com/specimen/Outfit), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Styling**: Pure Modern CSS with CSS Custom Properties, Glassmorphism, and Flexbox/Grid
- **Deployment**: [Netlify](https://www.netlify.com/) (configured via `netlify.toml`)

---

## 📁 Project Structure

```
test porto/
├── public/
│   ├── favicon.svg                   # Custom DA monogram SVG favicon
│   └── Dimas_Ahmad_Noorsaid_CV.pdf   # Downloadable Resume / CV file
├── src/
│   ├── components/
│   │   ├── About.jsx                 # About Me & 4 Pillars component
│   │   ├── Contact.jsx               # Contact channels & email composer
│   │   ├── CvModal.jsx               # CV preview & download dialog
│   │   ├── Education.jsx             # Education timeline & coursework
│   │   ├── Experience.jsx            # Experience timeline (CNT IT Corp)
│   │   ├── Footer.jsx                # Footer & back-to-top button
│   │   ├── Hero.jsx                  # Hero section & CTA buttons
│   │   ├── LearningJourney.jsx       # Technical learning cards
│   │   ├── Navbar.jsx                # Sticky glass navbar & mobile drawer
│   │   ├── ProjectModal.jsx          # Project architecture details modal
│   │   ├── Projects.jsx              # Featured projects showcase
│   │   ├── Skills.jsx                # Filterable skills matrix
│   │   └── SocialIcons.jsx           # Crisp GitHub & LinkedIn SVGs
│   ├── data/
│   │   └── portfolioData.js          # Centralized data model
│   ├── App.jsx                       # Main App component
│   ├── index.css                     # Design system & responsive styles
│   └── main.jsx                      # React DOM entrypoint
├── index.html                        # HTML template with SEO & Google Fonts
├── netlify.toml                      # Netlify build & redirect configuration
├── package.json                      # Project metadata & scripts
├── vite.config.js                    # Vite configuration
└── README.md                         # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn

### 1. Installation
Clone the repository and install the project dependencies:
```bash
git clone https://github.com/Dimasars79/Portofolio-DimasAhmad.git
cd Portofolio-DimasAhmad
npm install
```

### 2. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Production Build
Create an optimized production bundle:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

You can preview the production build locally with:
```bash
npm run preview
```

---

## 🌐 Deploying to Netlify

This project is already pre-configured for Netlify deployment via [`netlify.toml`](file:///c:/test%20porto/netlify.toml).

### Option A: Deploy via Netlify Web UI (Connected to GitHub)
1. Push your repository to GitHub: `https://github.com/Dimasars79/Portofolio-DimasAhmad`.
2. Log into [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select **GitHub** and authorize access to `Dimasars79/Portofolio-DimasAhmad`.
5. Confirm build settings (Netlify detects them automatically from `netlify.toml`):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**. Netlify will build and deploy your portfolio to a live URL (e.g., `https://dimas-ars.netlify.app`).

### Option B: Deploy via Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Log in and deploy:
   ```bash
   netlify login
   netlify deploy --prod --dir=dist
   ```

---

## 💻 Git Workflow & Commit Guide

To commit and push your portfolio updates to your GitHub repository:

```bash
# 1. Check current repository status
git status

# 2. Stage all files
git add .

# 3. Create descriptive commits
git commit -m "Initial portfolio website: modern responsive design for Dimas Ahmad Noorsaid"

# 4. Push to main branch on GitHub
git push -u origin main
```

---

## 📬 Contact Information

- **Name**: Dimas Ahmad Noorsaid (Dimas Ars)
- **Location**: Jakarta, Indonesia
- **Email**: [Dimasars79@gmail.com](mailto:Dimasars79@gmail.com)
- **LinkedIn**: [linkedin.com/in/dimasars](http://linkedin.com/in/dimasars)
- **GitHub**: [github.com/Dimasars79](https://github.com/Dimasars79)
