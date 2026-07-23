# Contributing to AlliedOne Limited

Welcome! We are excited to have you contribute to the AlliedOne platform. To ensure high code quality and a smooth collaboration process across the team, please follow these guidelines.

## 1. Branching Strategy

We use a feature-branch workflow. **Do not commit directly to `main`.**

Format your branch names as follows:
- `feat/description-of-feature` (e.g., `feat/faq-section`)
- `fix/description-of-bug` (e.g., `fix/header-alignment`)
- `chore/description-of-task` (e.g., `chore/update-dependencies`)
- `docs/description-of-docs` (e.g., `docs/update-readme`)

## 2. Local Development Setup

To run this project locally:

1. Clone the repository and checkout a new branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (or use the root `start-dev.bat` script):
   ```bash
   npm run dev
   ```

## 3. Commit Message Standards

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps us generate automated changelogs and keeps the Git history readable.

Format:
```
<type>: <description>
```

**Types:**
- `feat`: A new feature (e.g., `feat: add FAQ section to homepage`)
- `fix`: A bug fix (e.g., `fix: resolve dark mode issue on Vercel`)
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

## 4. Submitting a Pull Request (PR)

When your feature is complete:
1. Push your branch to GitHub: `git push origin feat/your-feature-name`
2. Open a Pull Request against the `main` branch.
3. Fill out the provided PR template thoroughly.
4. Request a review from a senior developer or project lead.
5. Do not merge your own PR until it has been approved.

## 5. Coding Standards

- **TypeScript:** Use strict typing. Avoid `any` wherever possible.
- **Tailwind:** Use Tailwind utility classes for all styling. Rely on the variables defined in `globals.css` (e.g., `text-brand-navy`) to maintain brand consistency.
- **Formatting:** Ensure your code is cleanly formatted before committing.

Thank you for helping us build the future of AlliedOne!
