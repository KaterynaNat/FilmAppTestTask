# 🎬 FilmApp Test Task

A single-page web application for browsing movies using [The Movie Database API]

🔗 **Live demo:** [film-app-test-task.vercel.app](https://film-app-test-task.vercel.app/)  
📂 **GitHub repo:** [KaterynaNat/FilmAppTestTask](https://github.com/KaterynaNat/FilmAppTestTask)

---

## ✨ Features

- Display a list of **popular movies** with pagination.
- **Search movies** by title (with debounce and URL synchronization).
- Show **genres as names** (mapping `genre_ids → name`).
- **Movie details page**: poster, genres, overview, “Add to favorites” button.
- **Recommended movies** block fetched from TMDB.
- **Favorites**: add/remove from both the list and details page, persisted in `localStorage`.
- Visual **toast notifications** when adding/removing from favorites.
- Mobile-first adaptive design with a purple-pink gradient and hover effects.

---

## 🛠️ Tech Stack

- **React 19 + TypeScript**
- **Vite** for build tooling
- **React Router v7** for routing
- **@tanstack/react-query** for API requests & caching
- **Zustand** for favorites management (persisted in localStorage)
- **react-hot-toast** for notifications
- CSS Modules

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KaterynaNat/FilmAppTestTask.git
cd FilmAppTestTask

```

### 2. Install dependencies

npm install

### 3. Configure environment variables

Create a .env file in the project root and add:

VITE_TMDB_API_URL=https://api.themoviedb.org/3
VITE_TMDB_IMG=https://image.tmdb.org/t/p
VITE_TMDB_BEARER=YOUR_TMDB_READ_ACCESS_TOKEN

### 4. Run in development mode

npm run dev

### 5. Build for production

npm run build
npm run preview

Tests are written using Vitest + React Testing Library.

Run tests:
npm run test
