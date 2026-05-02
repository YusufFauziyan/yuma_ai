# 🚀 Yuma AI — Modern AI Chatbot SaaS

<!-- ![Yuma AI Banner](./frontend/public/banner.png) -->

A premium, full-stack AI chatbot SaaS application powered by **Google Gemini**. Features real-time streaming responses, Google SSO authentication, multi-conversation support, and a beautiful landing page with smooth Framer Motion animations.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Express](https://img.shields.io/badge/Express-4-000?logo=express)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-E91E63?logo=framer)

---

## 📸 Screenshots

### 1. Landing Page

A modern, conversion-optimized interface featuring smooth scroll-reveal animations and consistent branding.
![Landing Page](./frontend/public/screenshot-landing.png)

### 2. Chat Interface

Real-time streaming responses with context memory, markdown support, and an intuitive sidebar.
![Chat Interface](./frontend/public/screenshot-chat.png)

### 3. Light / Dark Mode

Fully responsive design with system-aware light and dark modes.
![Theme Toggle](./frontend/public/screenshot-theme.png)

_(Note: Replace the image paths above with your actual screenshots in the `frontend/public/` folder)_

---

## ✨ Features

| Feature                     | Description                                                   |
| --------------------------- | ------------------------------------------------------------- |
| 🤖 **AI Chat**              | Real-time streaming responses via Google Gemini API (SSE)     |
| 🔐 **Google SSO**           | Auth.js v5 authentication with JWT sessions                   |
| 💬 **Multi-Conversation**   | Create, switch, and delete multiple chat threads              |
| 🧠 **Context Memory**       | AI remembers full conversation history for smarter replies    |
| 📝 **Markdown Rendering**   | Code blocks with syntax highlighting, tables, lists, and more |
| 🗑️ **Delete Conversations** | Owner-only deletion with confirmation modal                   |
| 📁 **Collapsible Sidebar**  | Full width ↔ icons-only mode, persisted in localStorage       |
| 🌗 **Theme Support**        | Light / Dark / System mode with smooth transitions            |
| ⌨️ **Keyboard Shortcuts**   | `⌘K` / `Ctrl+K` for new chat                                  |
| 🎨 **Premium Landing Page** | 7-section SaaS page with Framer Motion animations             |
| 📱 **Fully Responsive**     | Optimized for desktop, tablet, and mobile                     |

---

## 🏗️ Tech Stack

### Frontend

- **Next.js 16** — App Router, Turbopack
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Scroll-reveal, staggered, and spring animations
- **Auth.js v5** — Google SSO with JWT strategy
- **Zustand** — State management with persist middleware
- **next-themes** — Light / Dark / System theme toggle

### Backend

- **Node.js + Express** — REST API server
- **Google Gemini API** — AI model (`gemini-3.1-flash-lite-preview`)
- **MySQL** — Relational database
- **Prisma ORM v7** — Type-safe database client with driver adapters
- **SSE** — Server-Sent Events for real-time streaming

---

## 📄 License

This project is for educational and portfolio purposes.

---

<div align="center">
  <b>Built with ❤️ using Next.js, Express, MySQL, Prisma, and Google Gemini</b>
</div>
