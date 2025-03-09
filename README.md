# 🎬 Movie Vault

A simple web application for browsing movie list, fetched from [The Movie Database](https://www.themoviedb.org/).  
Built with **Next.js**, using **TypeScript, Tailwind CSS, and ShadCN**.

## 🚀 Features

✅ Fetching and displaying a list of movies  
✅ Homepage with movie listing  
✅ Movie details page  
✅ Filtering by genre and rating  
✅ Sorting movies (popularity, release year, average vote)  
✅ Search by title  
✅ Expand/collapse animations  
✅ Error handling and loading states

## 🛠️ Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN](https://ui.shadcn.com/)
- [Axios](https://axios-http.com/) – API communication

## 🔧 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mmcode9407/movie-vault.git
   cd movie-vault
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set environmental variables:**

   - In the .env file, add your API key from TheMovieDB and base API url:

   ```ini
   REST_API_KEY=your_api_key_here

   REST_API_URL=https://api.themoviedb.org/3
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:3000.

# 🌍 Live Demo

The app is deployed online: [MovieVault](https://movie-vault-ten.vercel.app/)

# 📜 Data Source

Movie data is fetched from TMDB API.
