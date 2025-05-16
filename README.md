# afghan-proverbs-frontend

A Node.js + Express web app for managing and viewing proverbs. It fetches data from a RESTful API (`http://localhost:3000/proverbs`) and supports CRUD operations with an EJS-based frontend.

## Features

- View all proverbs
- View details of a single proverb
- Add a new proverb
- Edit an existing proverb
- Delete a proverb
- EJS templating and Bootstrap styling

## Tech Stack

- Node.js
- Express
- EJS
- Axios
- Bootstrap (via CDN or static path)
- REST API (running on `http://localhost:3000`)

## Project Structure

afghan-proverbs-frontend/
├── public/ # Static files (styles.css)
├── routes/
│ └── index.js # Express routes
├── views/ # EJS view templates
│ ├── home.ejs
│ ├── addProverb.ejs
│ ├── editProverb.ejs
│ └── proverbDetail.ejs
├── .gitignore
├── package.json
├── README.md
└── server.js # Main Express server

## Installation

```bash
git clone https://github.com/LailaRahman/Afghan-proverbs-frontend
cd afghan-proverbs-frontend
npm install


## Running the App
http://localhost:3000/proverbs should run before starting
npm start

open below link on your browser
http://localhost:5000

## API Endpoints

GET / — Fetches all proverbs and renders the home page.

GET /proverb/:id — Fetches a single proverb by ID and renders its detail view.

GET /add — Renders the form to add a new proverb.

POST /add — Submits a new proverb to the API and redirects to home.

GET /edit/:id — Fetches a proverb by ID and renders the edit form.

POST /edit/:id — Submits updated data for a proverb by ID and redirects to home.

GET /delete/:id — Deletes a proverb by ID and redirects to home.

```
