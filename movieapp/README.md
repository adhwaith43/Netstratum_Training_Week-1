# 🎬 Cinevault

A premium, responsive movie and TV show discovery application built with modern React. Cinevault allows users to browse trending media, search across multiple categories, customize their viewing experience with light/dark themes and multi-language support, and securely save their favorite titles.

## ✨ Features

* **Extensive Media Library:** Powered by the TMDB API to fetch the latest trending movies, top-rated TV shows, and detailed cast information.
* **Secure Authentication:** Integrated with Auth0 for seamless user login and secure profile management.
* **User-Specific Favorites:** Utilizes Redux Toolkit and Redux Persist to save favorite movies uniquely to individual user profiles.
* **Advanced Search & Filtering:** Dynamic multi-search functionality allowing users to filter by Movies, TV Shows, and specific Genres.
* **Localization (i18n):** Full support for English, Spanish, French, Hindi, and Malayalam.
* **Theming:** Premium Dark and Light mode toggles using CSS variables for a seamless visual transition.
* **Admin Controls:** Platform admins can soft-delete or hide specific movies from the global feed.
* **Customizable Content:** Users can locally edit and save movie titles, overviews, and personal ratings.
* **Smooth UI/UX:** Built with Swiper.js for touch-friendly carousels, Framer Motion for modal animations, and React Hot Toast for instant visual feedback.

## 🛠️ Tech Stack

* **Frontend:** React (Vite), CSS3, Framer Motion, Swiper.js
* **State Management:** Redux Toolkit, Redux Persist
* **Authentication:** Auth0
* **Routing:** React Router DOM
* **API/Data:** Axios, TMDB API
* **Internationalization:** react-i18next

## 🚀 Getting Started

### Prerequisites

* Node.js (v16 or higher)
* NPM or Yarn
* A TMDB API Key
* An Auth0 Account

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/cinevault.git](https://github.com/yourusername/cinevault.git)
    cd cinevault
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the following keys:
    ```env
    VITE_TMDB_KEY=your_tmdb_api_key_here
    VITE_AUTH0_DOMAIN=your_auth0_domain_here
    VITE_AUTH0_CLIENT_ID=your_auth0_client_id_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📂 Key Dependencies

* `@auth0/auth0-react` - Identity management
* `react-redux` & `@reduxjs/toolkit` - State management
* `redux-persist` - Local storage caching
* `react-hot-toast` - Push notifications
* `framer-motion` - Component animations
* `swiper` - Media carousels

## 👨‍💻 Author

**Adhwaith A M**
* GitHub: [@adhwaitham](https://github.com/adhwaitham)
* LinkedIn: [Adhwaith A M](https://linkedin.com/in/adhwaitham)