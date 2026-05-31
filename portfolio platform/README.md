# Personal Project Showcase Application

This is a simple Single Page Application (SPA) built using React and Vite. It serves as a digital portfolio dashboard where you can view existing projects, search through them dynamically in real-time, and add brand-new projects using a submission form.

The layout and design are inspired by our project wireframe mockup specifications.

## Key Features

- Project List Display: Shows all your projects with their titles and descriptions in a clean layout rows.
- Live Search Filtering: A search box that filters down your projects by their title instantly as you type.
- Dynamic Project Form: A form with inputs that lets you type and submit new projects directly into the live view.
- Responsive Layout: A clean, modern stylesheet that looks great on laptop monitors and automatically scales down for mobile screens.
- Automated Tests: Simple unit interaction tests to make sure forms and search inputs work without bugs.

## Folder Layout

Here is how the project files are neatly organized inside the `src/` directory:
- `src/components/ProjectForm.jsx` — Handles the user inputs and form submissions.
- `src/components/ProjectCard.jsx` — Renders an individual project box row (with the mockup ✕ icon).
- `src/components/ProjectList.jsx` — Loops through the projects and shows a message if no matches are found.
- `src/App.jsx` — The main home file that holds the shared memory states (`projects` and `searchTerm`).
- `src/App.css` — The modern, custom styled sheet for the app's look and layout.
- `src/App.test.jsx` — The beginner-friendly testing script to verify user interactions.

## How to Setup and Run Locally

Follow these easy steps to get the project up and running on your local machine:

### 1. Download and Enter the Project
1.git clone this repository
2.Open the folder using the cd portfolio app
3.Navigate into the direct folder
4.Run npm install
5.npm run dev to display on your browser
