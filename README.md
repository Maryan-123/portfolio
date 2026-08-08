# Maryan Hussein Ulusow — Portfolio

A premium, light-themed personal developer portfolio for Maryan Hussein Ulusow, a full-stack developer, built with React, Vite and Tailwind CSS. Features the Hotel Booking System (Stay Haven), Carta School Management System and SyncFlow project delivery platform.

## Features

- Responsive, single-page layout (Hero, About, Skills, Projects, GitHub, Services, Journey, Education, Contact) with a reusable case-study template for individual projects (`/projects/:slug`)
- Live GitHub repository feed via the public GitHub API, with loading/error/empty states and a graceful fallback when no username is configured
- Contact form with client-side validation, a honeypot spam field, and a `mailto:` fallback when no backend endpoint is configured
- WhatsApp and email deep-link helpers (`src/utils/links.js`)
- Centralized content — edit `src/data/*.js` to update everything from copy to project data
- Dark "midnight" design system, subtle Framer Motion animations, `prefers-reduced-motion` support
- SEO meta tags (Open Graph, Twitter Card), custom 404 page, SPA-friendly routing

## Technology Stack

- React 19 + Vite
- Tailwind CSS 4
- React Router
- Framer Motion
- Lucide React (icons)

## Installation

```bash
npm install
```

## Configuration

All personal content lives in `src/data/`:

| File | Purpose |
| --- | --- |
| `profile.js` | Name, role, bio, contact info, social links, CV, availability |
| `projects.js` | Featured/other projects and case-study content |
| `skills.js` | Skill categories and technologies |
| `education.js` | Education history |
| `experience.js` | Journey timeline and services list |

Real contact info, projects and CV are already wired in. `public/cv.pdf` is served by the "Download CV" button, and project screenshots live in `public/projects/`.

The Hero's large portrait is read from `profile.photo` (`/images/profile-large.jpg`) — drop the image at `public/images/profile-large.jpg` to display it; the hero gracefully hides that card if the file is missing.

## Environment Variables

Copy `.env.example` to `.env` and fill in what's relevant:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_CONTACT_ENDPOINT` | Optional URL of a backend/serverless function that accepts `POST { name, email, subject, message }`. Without it, the contact form falls back to opening the visitor's email client. |

Never commit real secrets — `.env` is git-ignored.

## Running Locally

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

The app is a standard Vite SPA and deploys to any static host.

**Vercel**: import the repository, framework preset "Vite" — no extra config needed.

**Netlify**: set the build command to `npm run build` and the publish directory to `dist`. Add a `public/_redirects` file containing `/* /index.html 200` so client-side routes resolve correctly on refresh.

## Customization

- Colors and typography tokens live in `src/index.css` under `@theme`.
- Reusable UI primitives are in `src/components/ui/`.
- Add new projects by appending to the `projects` array in `src/data/projects.js`; include a `caseStudy` object to get an automatic detail page at `/projects/<slug>`.

## Project Structure

```
src/
  components/
    ui/          Buttons, section headers, tags, badges
    layout/      Navbar, Footer, WhatsApp button, scroll-to-top
    sections/    Page sections (Hero, About, Skills, ...)
    projects/    Project card
    contact/     Contact form
    icons/       Local brand icon SVGs
  data/          Centralized content
  pages/         Route-level pages (Home, ProjectDetail, NotFound)
  utils/         WhatsApp/mailto link helpers
```

## Contact

Update `src/data/profile.js` with your own contact details — that's the single source of truth used across the whole site.
