# Shibaditya Deb - Portfolio

A modern, animated personal portfolio website built with React and TypeScript.

## Features

- **Animated Welcome Screen** - Multilingual greeting animation (Hello, Bonjour, こんにちは, etc.)
- **Interactive Hero Section** - Profile showcase with scroll-triggered animations
- **Projects Showcase** - Interactive project cards with hover effects and smooth transitions
- **Tech Stack Display** - Visual representation of skills and technologies
- **Open Source Contributions** - Highlights of open source work
- **Multi-page Navigation** - Home, About, Projects, and Experience pages
- **Responsive Design** - Optimized for all screen sizes

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 19, TypeScript |
| Routing | React Router v7 |
| Styling | CSS3 with custom animations |
| Testing | Jest, React Testing Library |
| Build | Create React App |

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm test` | Run tests in watch mode |
| `npm run build` | Build for production |
| `npm run eject` | Eject from CRA (one-way) |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Greeting.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── OpenSourceContributions.tsx
│   ├── Projects.tsx
│   ├── Quote.tsx
│   ├── TechStack.tsx
│   └── __tests__/
├── pages/            # Page components
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Home.tsx
│   └── Projects.tsx
├── styles/           # CSS stylesheets
├── App.tsx           # Main app with routing
└── index.tsx         # Entry point
```

## Routes

| Path | Page |
|------|------|
| `/` | Welcome greeting animation |
| `/home` | Main home page |
| `/about` | About page |
| `/projects` | Projects showcase |
| `/experience` | Experience timeline |

