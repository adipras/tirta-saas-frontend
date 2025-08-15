
# GEMINI.md

## Project Overview

This is a frontend for a SaaS application named "Tirta". It's built with React, TypeScript, and Vite. The project uses Redux for state management, React Router for navigation, and Tailwind CSS for styling. It has separate authentication and dashboards for "admin" and "customer" roles.

## Building and Running

*   **Install dependencies:** `npm install`
*   **Run in development mode:** `npm run dev`
*   **Build for production:** `npm run build`
*   **Lint the code:** `npm run lint`
*   **Preview the production build:** `npm run preview`

## Development Conventions

*   The project follows standard React and TypeScript conventions.
*   Styling is done using Tailwind CSS.
*   State management is handled by Redux Toolkit.
*   API requests are managed through a dedicated `apiClient` service.
*   The application has a clear separation of components, pages, services, and Redux logic.
*   There are distinct layouts and routes for admin and customer users.
