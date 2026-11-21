# 🌐 Front-End & React Web Projects

A collection of responsive static web pages and React web components demonstrating core front-end engineering concepts, responsive layout design, and modern UI practices.

---

## 📁 Repository Structure

* **`React Project/`** — Dynamic single-page applications and component-based UI built with React.
* **`Static Webpages/`** — Semantic HTML5 and modern CSS3 templates with responsive design.

---

## 🛠 Tech Stack

* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Framework:** React.js
* **Styling:** CSS Flexbox & CSS Grid, Responsive Design

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [TMDB API Key](https://www.themoviedb.org/settings/api) (free account)

### Setup & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/princeamareliya1/react-web-projects.git
   cd react-web-projects
   ```

2. **Navigate to the React Project directory:**
   ```bash
   cd "React Project"
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure Environment Variables:**
   Create a `.env` file inside the `React Project` folder and add your TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

6. **Create a production build:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel (Recommended)

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository (`react-web-projects`).
4. Set the **Root Directory** to `React Project`.
5. Under **Environment Variables**, add:
   * Key: `VITE_TMDB_API_KEY`
   * Value: `your_actual_tmdb_api_key`
6. Click **Deploy**. Vercel will automatically run `npm run build` and give you a live production URL!
