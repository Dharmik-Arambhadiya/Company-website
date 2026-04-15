<h1 align="center">
  🚀 Modern Company Website
</h1>

<p align="center">
  A sleek, responsive, and high-performance corporate website built with React and Vite.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
</p>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)

---

## 🌟 About the Project

This project is a modern, responsive corporate website designed to showcase a company's services, case studies, client trust, and contact information. Built with modular React components and styled efficiently, it provides a seamless user experience out of the box with custom scroll animations and a polished layout.

---

## ✨ Key Features

- **Responsive Design:** Completely optimized for mobile, tablet, and desktop viewports.
- **Component-Driven Architecture:** Clean, modular, and maintainable React components.
- **Scroll Animations:** Custom `useScrollAnimation` hook brings the page to life as users scroll.
- **Fast Loading Ecosystem:** Powered by Vite for lightning-fast HMR and optimized production builds.

### 🧩 Core Sections:

- **Hero & Infoblock:** Engaging landing experience.
- **About Us & Services:** Detailed company profile and offerings.
- **Case Studies:** Showcase of past projects.
- **Client Trust & Logos:** Highlighting partnerships and social proof.
- **Contact & Work With Us:** Lead generation and hiring forms.

---

## 🛠 Tech Stack

- **Frontend Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Custom CSS modules per component
- **Linting:** ESLint

---

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Aboutus/
│   ├── Businesshelp/
│   ├── Casestudy/
│   ├── Clientlogo/
│   ├── Contact/
│   ├── HeroSection/
│   ├── Services/
│   └── ... (more sections)
├── hooks/
│   └── useScrollAnimation.js
├── App.css
├── global.css
├── index.css
├── Layout.jsx
└── main.jsx
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate into the directory:**

    ```bash
    cd Company-website
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```
    _or if you use yarn:_
    ```bash
    yarn install
    ```

---

## 💻 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Locally preview the production build after running `npm run build`.

### `npm run lint`

Runs ESLint to catch and fix common code quality issues.

---

<p align="center">
  Designed with ❤️ by Dharmik Arambhadiya
</p>