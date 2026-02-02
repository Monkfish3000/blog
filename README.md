# The Fish Pond (mf-blog)

A personal blog built with Next.js (App Router), TypeScript, and Tailwind CSS. Content is managed via Hygraph (formerly GraphCMS).

## 🛠 Tech Stack

- **Framework:** [Next.js 13+](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:**
  - Tailwind CSS
  - Next-Themes (Dark/Light mode)
  - MUI Joy UI (Component library)
- **CMS:** [Hygraph](https://hygraph.com/) (GraphQL)
- **Deployment:** Vercel

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Monkfish3000/blog.git
    cd blog
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory (this file is ignored by git). You will need the following keys:
    ```env
    HYGRAPH_TOKEN=your_permanent_auth_token_with_mutation_permissions
    REVALIDATE_SECRET=your_secret_token_for_revalidation
    ```
    *Note: The Hygraph Endpoint is currently hardcoded in `src/app/api/fetchData.ts` and `scripts/add-post.js`.*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📝 Managing Content

### Adding Posts (CLI)
You can add posts programmatically using the included script.
1. Ensure your `.env` has a valid `HYGRAPH_TOKEN` with mutation permissions.
2. Edit the content in `scripts/add-post.js`.
3. Run:
   ```bash
   node scripts/add-post.js
   ```

### Revalidation
The blog uses On-Demand Revalidation (ISR).
- **Webhook Endpoint:** `/api/revalidate?secret=<REVALIDATE_SECRET>`
- Configured in Hygraph to trigger on "Publish" events.
- To revalidate manually:
  ```bash
  curl -X POST "https://www.fromthefishpond.dev/api/revalidate?secret=YOUR_SECRET"
  ```

## 📂 Project Structure

- `src/app`: Main application code (App Router).
  - `api/`: Data fetching and revalidation logic.
  - `articles/[slug]`: Dynamic blog post pages.
  - `components/`: Reusable UI components.
  - `styles/`: Global styles and theme config.
- `public/`: Static assets (images, icons).
- `scripts/`: Utility scripts for content management.

## 🤝 Contributing

1.  Fork the repo.
2.  Create a feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

## 📄 License

This project is open source.