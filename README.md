# 🎬 CINEMA X Studio — Movie Explorer Web App

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Demo-Vercel-success?style=for-the-badge&logo=vercel" alt="Live Demo" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/API-TMDB-01b4e4?style=for-the-badge&logo=themoviedatabase" alt="TMDB" />
</p>

A modern, responsive movie browsing single-page application built with **React**, **Vite**, and the **The Movie Database (TMDB) REST API**. Features live search, curated category carousels, movie details, and client-side watchlist persistence.

🔗 **Live Deployment:** [https://cinema-x-studio.vercel.app](https://cinema-x-studio.vercel.app)

---

## ✨ Features

* **Discover & Explore:** Curated collections including Popular, Top Rated, Now Playing, and Upcoming releases.
* **Instant Search:** Dynamic movie search with loading states, trimmed queries, and formatted grid results.
* **Movie Deep-Dive:** Comprehensive details with trailers, cast members, synopses, and ratings.
* **Personal Watchlist:** Add and remove movies with client-side `localStorage` persistence.
* **Cinephile Profile:** Customizable user profile with watching analytics breakdown.
* **Responsive Dark UI:** Cyberpunk-inspired aesthetic built with clean CSS Flexbox, Grid, and Bootstrap.

---

## 🛠 Tech Stack

* **Front-End:** React 19, React Router v7
* **Build Tool:** Vite 8
* **Styling:** CSS3 (Variables, Flexbox, Grid), Bootstrap 5
* **Data Source:** [TMDB API](https://www.themoviedb.org/settings/api)
* **Hosting:** Vercel

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

## 🚀 Local Development Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* Free [TMDB API Key](https://www.themoviedb.org/settings/api)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/princeamareliya1/react-web-projects.git
   cd react-web-projects/"React Project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file inside the `React Project` folder:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.
