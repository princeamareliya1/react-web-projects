# 🎬 CINEMA X Studio — Movie Explorer Web App

<p align="center">
  <a href="https://cinema-x-studio.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-cinema--x--studio.vercel.app-success?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/API-TMDB-01b4e4?style=for-the-badge&logo=themoviedatabase" alt="TMDB" />
</p>

A modern, responsive movie browsing single-page application built with **React**, **Vite**, and the **The Movie Database (TMDB) REST API**. Features live search, curated category carousels, comprehensive movie details, customizable user profile analytics, and client-side watchlist persistence.

🌐 **Production Website:** [https://cinema-x-studio.vercel.app](https://cinema-x-studio.vercel.app)

---

## ✨ Features

* **Discover & Explore:** Curated collections including Popular, Top Rated, Now Playing, and Upcoming releases.
* **Instant Search:** Dynamic movie search with loading states, query sanitization, and clean 3-row grid layouts.
* **Movie Deep-Dive:** Comprehensive details with trailers, cast members, synopses, and ratings.
* **Personal Watchlist:** Add and remove movies with client-side `localStorage` persistence.
* **Cinephile Profile:** Customizable user profile with watching analytics breakdown and genre stats.
* **Responsive Dark UI:** Cyberpunk-inspired aesthetic built with clean CSS Flexbox, Grid, and Bootstrap.

---

## 🛠 Tech Stack

* **Front-End:** React 19, React Router v7
* **Build Tool:** Vite 8
* **Styling:** CSS3 (Variables, Flexbox, Grid), Bootstrap 5
* **Data Source:** [TMDB API](https://www.themoviedb.org/settings/api)
* **Hosting & CI/CD:** Vercel (Continuous Deployment from `main`)

---

## 📁 Repository Structure

```text
react-web-projects/
├── React Project/
│   ├── src/
│   │   ├── components/       # Reusable UI cards, carousel, navbar, footer
│   │   ├── pages/            # Home, Search, MovieDetails, Watchlist, Profile
│   │   ├── services/         # TMDB API client & Watchlist storage helpers
│   │   ├── App.jsx           # Routing & layout configuration
│   │   └── styles.css        # Cyberpunk & dark-theme styling
│   ├── index.html
│   └── package.json
└── Static Webpages/          # Semantic HTML5 & CSS3 templates
```

---

## 🌐 Live Access

The project is hosted and continuously deployed via **Vercel**. Any updates pushed to the repository are automatically built and published live.

👉 **Launch App:** [https://cinema-x-studio.vercel.app](https://cinema-x-studio.vercel.app)
