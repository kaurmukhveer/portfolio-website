# Front-End Portfolio Website

My first portfolio site, built with React and Bootstrap. It showcases the UI/UX and React projects I built in SEG 3125 (Analysis and Design of User Interfaces) at the University of Ottawa.

**Live site:** https://mukhveer-portfolio.vercel.app/

**Main portfolio** (backend, testing and CI projects, experience and skills): https://kaurmukhveer.github.io/mukhveer-kaur-portfolio/

## Projects shown on the site

| Project | What it is | Live |
|---|---|---|
| GreenCare Lawn Services | Lawn-care booking site with separate customer and service-provider flows (React Router) | [greencare-lawn-service.vercel.app](https://greencare-lawn-service.vercel.app/) |
| Bloom Memory | Memory card game with difficulty levels and themes, designed with Gestalt principles and visual hierarchy | [bloom-memory.vercel.app](https://bloom-memory.vercel.app/) |
| TechNest e-commerce | Front-end e-commerce prototype focused on product presentation and navigation | [technest-ecommerce-azure.vercel.app](https://technest-ecommerce-azure.vercel.app/) |
| Bilingual Food Price Dashboard | English/French React dashboard with charts of synthetic grocery prices | [food-price-dashboard.vercel.app](https://food-price-dashboard.vercel.app/) |

## What's inside

- Hero, About, Projects and Contact sections, each a reusable React component
- A reusable **Project Card** component, rendered from a separate project-data file with `.map()`, so new projects are added as data, not markup
- Responsive layout using Flexbox, the Bootstrap grid and media queries

## Design approach

Applies Nielsen Norman Group principles: visual hierarchy, whitespace, contrast, alignment, proximity and consistency. The Hero and About sections were redesigned several times after reviewing spacing and readability.

## Tech stack

React · JavaScript (ES6) · Bootstrap 5 · HTML5 · CSS3 · Vite · deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```
