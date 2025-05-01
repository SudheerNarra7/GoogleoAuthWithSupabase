# Project: Authentication System with Supabase & Google OAuth

This project implements a basic authentication system using React, TypeScript, Vite, Supabase, and Tailwind CSS. It includes features for email/password signup and login, as well as Google OAuth integration.

## Features

* User Signup with Email and Password
* User Login with Email and Password
* Google OAuth Login
* Protected Routes (Dashboard)
* Supabase Integration for Authentication and Database (implied)
* Basic UI components styled with Tailwind CSS
* Toast notifications for user feedback (using react-hot-toast)

## Tech Stack

* **Frontend:** React, TypeScript
* **Build Tool:** Vite
* **Backend/Auth:** Supabase
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS
* **Linting/Formatting:** ESLint, TypeScript ESLint
* **Icons:** Lucide React
* **Notifications:** React Hot Toast

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Supabase:**
    * Create a new project on [Supabase](https://supabase.com/).
    * Go to your project settings and find your API URL and anon key.
    * Configure Google OAuth provider in your Supabase project settings under Authentication -> Providers. You'll need to provide the necessary Google Cloud credentials. Follow the Supabase documentation for detailed steps.

4.  **Environment Variables:**
    * Create a `.env` file in the root of the project.
    * Add your Supabase credentials to the `.env` file:
        ```env
        VITE_SUPABASE_URL=YOUR_SUPABASE_URL
        VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
        ```
    * Replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY` with your actual Supabase project URL and anon key.

## Available Scripts

In the project directory, you can run:

* **`npm run dev`** or **`yarn dev`**: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port specified by Vite) to view it in the browser. The page will reload if you make edits.

* **`npm run build`** or **`yarn build`**: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

* **`npm run lint`** or **`yarn lint`**: Lints the project files using ESLint.

* **`npm run preview`** or **`yarn preview`**: Serves the production build locally for previewing.
