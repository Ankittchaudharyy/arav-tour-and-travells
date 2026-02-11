# Greno Taxi Services

A modern, responsive taxi service website built with React and Vite. Features a clean white and yellow theme, car cards with rates, and sections for Home, Cars & Pricing, About Us, and Contact.

## Features

- **Responsive design** – Mobile-friendly layout with collapsible navigation
- **Sections** – Home (Hero), Cars & Pricing, About Us, Contact
- **5 car cards** – Economy Sedan, Premium Sedan, SUV, Luxury Car, Outstation Taxi
- **Reusable components** – Header, CarCard, Hero, Footer, etc.
- **Smooth scrolling** – Anchor navigation between sections
- **Modern UI** – White & yellow theme, clean typography (DM Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
greno-taxi-services/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── CarsPricing.jsx
│   │   ├── CarCard.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── cars.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── public/
```

## Tech Stack

- React 19
- Vite 7
- CSS (no framework)
