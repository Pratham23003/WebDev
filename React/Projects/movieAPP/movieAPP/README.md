# MovieApp

A simple movie discovery app that helps you find **movies**.

---

## Features

- **Instant Movie Search** with debounced input
- **Trending Movies** based on real user searches
- **Analytics** using Appwrite TablesDB
- **Clean UI** with a dark theme
- **Fast & Responsive** (built with Vite + React)

Trending results are driven by **what users actually search**, not by pre-defined popularity metrics.

---

## How Trending Works

Every time a user searches for a movie:

- The search is tracked using **Appwrite TablesDB**
- Each movie is uniquely identified by its **TMDB movie ID**
- Search counts are incremented
- Trending movies get ranked by **real usage data**

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- TMDB API

### Backend / Analytics
- Appwrite (TablesDB)
- Serverless search analytics
- Data normalization using `movie_id`

### Deployment
- Vercel

---

## Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/Pratham23003/movieAPP-React.git
cd movieapp
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Create `env.local` 
```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DB_ID=your_database_id
VITE_APPWRITE_TABLE_NAME=your_table_name
```

### 4. Run the app 
```bash
npm run dev
```
---

## My Learnings and challenges
### Learnings

While building this project, I learned:

- Implement debounced search to improve performance and user experience
- How's and What's of AppWrite and how to work with Appwrite TablesDB
- The importance of data normalization (`movie_id` over search terms)
- Debugging backend issues using logs instead of assumptions
- Different React Hooks


### Challenges

- Handling breaking changes and deprecated APIs in Appwrite
- Understanding differences between Documents DB and TablesDB
- Debugging ID-related issues (`$id` vs `$Id`)
- Preventing duplicate trending entries caused by partial or inconsistent searches
- Ensuring search counts updated correctly for previously searched movies
- Avoiding unnecessary analytics updates caused by rapid user input


