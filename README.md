# Allied One Frontend

Welcome to the frontend repository for the **Allied One** platform. Allied One is a modern enterprise web application focused on AI automation, business process workflows, and intelligent digital marketing systems.

This repository houses the frontend client built with Next.js 14 (App Router), React, Tailwind CSS, and React Hook Form with Zod validation. It integrates seamlessly with the Allied Backend to pipe data into our live CRM and Modern Data Stack (MDS).

## 🚀 Quick Start

Follow these steps to set up the development environment on your local machine.

### 1. Prerequisites
Ensure you have the following installed:
- Node.js (v18+ recommended)
- npm (Node Package Manager)

### 2. Installation
Navigate to the root of the frontend repository and install dependencies:
```bash
cd alliedone-frontend
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root of the project to define local environment variables.
```bash
touch .env.local
```

Add the following environment variables:
```env
# The URL where the Allied Backend is running locally
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 4. Running the Dev Server
Start the Next.js development server:
```bash
npm run dev
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Architecture & Tech Stack

- **Framework**: Next.js 14 (App Router enabled)
- **Styling**: Tailwind CSS (with a custom, strict corporate palette defined in `tailwind.config.ts`)
- **Forms & Validation**: `react-hook-form` integrated with `zod` for strict client-side validation.
- **Routing**: Next.js native file-system routing.

---

## 🤝 Contributing & Best Practices

To maintain a highly professional, enterprise-grade codebase, all contributors **must** adhere to the following standards. (There is no separate `CONTRIBUTING.md` — these rules act as the source of truth for all PRs).

### 1. The Commenting Standard
We strictly enforce a commenting standard similar to large-scale open-source projects (e.g., OWASP).
- **JSDoc**: Use JSDoc headers for all components, utilities, and major functions. Describe *what* the block does, its parameters, and returns.
- **Inline Comments**: Use standard inline comments (`//`) **only** to explain *why* complex logic exists, never *what* it is doing (the code should be self-documenting).

**Example:**
```tsx
/**
 * Renders the Lead Capture Form.
 * Captures user details and dispatches a POST request to the CRM API.
 * Uses Zod for strict client-side schema validation before transmission.
 * 
 * @returns {JSX.Element} The rendered form component.
 */
export default function LeadCaptureForm() {
  // We use a custom resolver here because the backend enforces a strict schema that cannot fail silently.
  const form = useForm({ ... });
}
```

### 2. Component Structure & Modularity
- **Granularity**: Keep components small and focused. If a file exceeds 200-300 lines, consider breaking it into sub-components.
- **Location**: Place reusable UI pieces in `src/components/ui/` and page-specific blocks in `src/components/sections/`.

### 3. Strict Form Validation
Data integrity is critical. 
- Bad data should **never** touch the backend.
- Always use **Zod schemas** in conjunction with `react-hook-form` (via `@hookform/resolvers/zod`).
- Provide clear, user-friendly error messages for validation failures.

### 4. Brand Guidelines (Tailwind CSS)
We use a predefined brand palette. **Do not use arbitrary hex codes or generic Tailwind colors unless explicitly required for edge-case visibility.**
Always prefer the semantic tokens set in `tailwind.config.ts` (e.g., `brand-navy`, `brand-blue`, `brand-gold`).

### 5. Git Workflow
- Always create a new branch for your feature or bugfix (`feature/your-feature-name` or `fix/your-fix-name`).
- Commit messages must be descriptive (e.g., `feat: added zod validation to contact form` or `fix: resolved contrast issues in footer`).
- Keep commits focused and atomic.

---

## 💡 Troubleshooting

- **Tailwind changes not reflecting?** Restart the `npm run dev` server. Sometimes heavy configuration changes in `tailwind.config.ts` require a hard restart.
- **API calls failing?** Ensure your local backend is running and `NEXT_PUBLIC_API_URL` is pointing to the correct port (usually `5000` or `3001`).

---

**Built by Allied One. Powered by Innovation.**
