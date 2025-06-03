# Article_Board (Vue 3 + TypeScript + Vite)

## Overview
This project implements an Article Board UI in Vue 3 with Bootstrap, featuring category filtering and bookmark toggling. The UI and interactions closely follow the provided design specifications.

## Features
- Responsive article card grid with category filtering
- Bookmark icon with toggle and visual feedback
- Consistent layout regardless of filter state
- Modular code with enums and data separated into a `const` folder

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at the local address shown in your terminal (usually http://localhost:5173).

3. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure
- `src/components/ArticleBoard.vue` — Main board UI and logic
- `src/components/ArticleCard.vue` — Individual article card component
- `src/const/ArticleCategory.ts` — Enum for article categories
- `src/const/articles.ts` — Article data array
- `src/assets/` — Card background images

## Assumptions
- The list of articles is static and managed in `src/const/articles.ts`. Bookmarked state is local and not persisted.
- The background images for cards are named `1.png` to `6.png` and located in `src/assets/card_img/`.
- Bootstrap and Bootstrap Icons are used for styling and icons.

## Additional Notes
- The code is modular and easy to extend (e.g., for API integration or persistent bookmarks).
- The layout remains visually consistent regardless of filter state or number of articles.
- If you move or rename files, restart your dev server and IDE to avoid TypeScript import errors.

## Contact
For questions or suggestions, please open an issue or contact the maintainer.
