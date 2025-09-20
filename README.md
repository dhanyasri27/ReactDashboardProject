# DeepVox Dashboard

A professional admin dashboard for business management, built with React, Vite, and Shadcn UI.

## Features

*   Dashboard overview with key metrics
*   Product sales bar chart with legends
*   Sales by category pie chart with hover effects
*   Customers management with search functionality and structured table
*   Orders management with search, status filtering, and structured table
*   Theme toggling (Light/Dark mode)
*   Responsive design

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js) or Yarn or Bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd deepvoxdashboard-main
    ```
    (Replace `<YOUR_REPOSITORY_URL>` with the actual URL of your Git repository.)

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    # or bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or yarn dev
    # or bun dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production:**
    ```bash
    npm run build
    # or yarn build
    # or bun build
    ```
    This will create a production-ready build in the `dist` directory.

## Libraries Used

This project leverages a variety of modern libraries and frameworks to deliver a robust and feature-rich experience.

### Core Technologies

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast frontend build tool.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.

### UI & Styling

*   **Shadcn UI:** A collection of re-usable components built using Radix UI and Tailwind CSS.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Radix UI:** Low-level UI components for building accessible design systems.
*   **`class-variance-authority` & `clsx` & `tailwind-merge`:** Utilities for managing Tailwind CSS classes.

### State Management & Data Fetching

*   **`react-hook-form` & `@hookform/resolvers` & `zod`:** For form management and validation.
*   **`@tanstack/react-query`:** For data fetching, caching, and state management.

### Routing

*   **`react-router-dom`:** For declarative routing in React applications.

### Icons

*   **`lucide-react`:** A set of beautiful and customizable SVG icons.

### Charting

*   **`recharts`:** A composable charting library built on React components.

### Utilities & Date Management

*   **`date-fns`:** A comprehensive JavaScript date utility library.
*   **`next-themes`:** For managing themes (light/dark mode).
*   **`sonner`:** A toast library for React.
*   **`vaul`:** A drawer component for React.
*   **`react-resizable-panels`:** Resizable panel components.
*   **`embla-carousel-react`:** A carousel library.
*   **`cmdk`:** A command menu component.
*   **`input-otp`:** One-time password input component.
*   **`react-day-picker`:** Date picker component.

### Development Dependencies

*   **`eslint` & `@eslint/js` & `eslint-plugin-react-hooks` & `eslint-plugin-react-refresh` & `typescript-eslint`:** For linting and code quality.
*   **`@vitejs/plugin-react-swc`:** Vite plugin for React with SWC.
*   **`autoprefixer` & `postcss`:** For CSS processing.
*   **`@types/node` & `@types/react` & `@types/react-dom`:** TypeScript type definitions.
*   **`globals`:** Global variables for ESLint.
*   **`lovable-tagger`:** (Likely a custom or internal tool, as it's not a common public library).
*   **`@tailwindcss/typography`:** A Tailwind CSS plugin for styling prose.