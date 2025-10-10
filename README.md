# 💼 My Portfolio — Haasham Khan

> A sleek, high-performance personal portfolio built with **React + TypeScript + Vite + Tailwind CSS**, showcasing my projects, skills, and professional journey. Designed for speed, accessibility, and clean developer experience.

---

## 🚀 Project Overview

**Short Contract (What This Project Is):**
- **Inputs:** React + TypeScript source code in `src`, static assets in `public`.
- **Outputs:** A Vite-built static web app (`dist`) ready for hosting.
- **Error Modes:** TypeScript build errors, missing assets, or ESLint rule violations.
- **Success Criteria:**  
  - `npm run dev` → serves app locally  
  - `npm run build` → produces optimized production build in `dist`

---

## 🧩 Tech Stack

| Layer | Technologies |
|--------|---------------|
| **Framework** | React 18 (TypeScript) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS, tailwind-merge, tailwindcss-animate |
| **UI Components** | Radix UI primitives + custom `ui` (shadcn-style) |
| **Icons** | lucide-react |
| **Data / State** | @tanstack/react-query |
| **Forms / Validation** | react-hook-form, @hookform/resolvers, zod |
| **Charts / Date** | recharts, react-day-picker |
| **Utilities** | clsx, date-fns |
| **Notifications** | sonner (toast) |
| **Theme Management** | next-themes |
| **Linting / Type Checking** | ESLint, TypeScript |
| **Package Manager** | npm / bun |
| **Deployment** | Vercel |

---

## 📁 Folder Structure

```bash
portflio/
│
├── public/                     # Static files (favicon, robots.txt, etc.)
│   └── resume.pdf              # Optional: directly accessible as /resume.pdf
│
├── src/
│   ├── assets/                 # Images, imported assets (e.g., profile.jpg)
│   ├── components/
│   │   ├── ui/                 # Local UI primitives (shadcn + Radix)
│   │   └── sections/           # About, Projects, Skills, Contact, etc.
│   ├── hooks/                  # use-mobile.tsx, use-toast.ts
│   ├── lib/                    # Utilities (utils.ts)
│   ├── pages/                  # Page-level components (Index, NotFound)
│   ├── types/                  # asset type declarations
│   ├── App.tsx                 # Root component
│   └── main.tsx                # Entry point (ReactDOM.createRoot)
│
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind settings
├── tsconfig.json               # TypeScript config
├── postcss.config.js           # PostCSS config
└── README.md                   # You’re reading it
