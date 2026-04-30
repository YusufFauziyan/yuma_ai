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

<!-- ## 📂 Project Structure

```
yuma-ai/
├── backend/                        # Express API server
│   ├── prisma/
│   │   └── schema.prisma          # Prisma schema (models)
│   ├── prisma.config.ts           # Prisma CLI config (datasource URL)
│   ├── src/
│   │   ├── controllers/           # Request handlers
│   │   ├── middleware/            # Auth middleware
│   │   ├── prisma/                # Prisma client singleton
│   │   ├── routes/                # API routes
│   │   ├── services/              # Business logic
│   │   └── index.js               # Server entry point
│   ├── .env                       # Environment variables
│   └── package.json
│
├── frontend/                       # Next.js application
│   ├── app/
│   │   ├── api/auth/              # Auth.js route handlers
│   │   ├── chat/                  # Protected chat page
│   │   ├── globals.css            # Tailwind v4 + design tokens
│   │   ├── layout.jsx             # Root layout
│   │   ├── page.jsx               # Landing page
│   │   └── providers.jsx          # Session + Theme providers
│   ├── components/
│   │   ├── landing/               # 8 landing page sections
│   │   ├── ChatArea.jsx           # Messages + welcome screen
│   │   └── ...                    # Other UI components
│   ├── store/                     # Zustand stores
│   ├── lib/                       # API client
│   ├── auth.js                    # Auth.js configuration
│   ├── middleware.js              # Route protection
│   ├── .env.local                 # Auth secrets
│   └── package.json
│
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- **MySQL** ≥ 8 — running locally or remote
- **Google Gemini API Key** — [Get it here](https://aistudio.google.com/apikey)
- **Google OAuth Credentials** — [Create here](https://console.cloud.google.com/apis/credentials)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/yuma-ai.git
cd yuma-ai
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```bash
cp .env.example .env
```

```env
DATABASE_URL="mysql://root:password@127.0.0.1:3306/yuma_ai"
GEMINI_API_KEY=your_gemini_api_key
PORT=5001
```

### 3. Setup Database (MySQL)

Create the database manually:

```sql
CREATE DATABASE yuma_ai;
```

Update `.env` with your actual MySQL credentials.

### 4. Prisma Setup

Run migration to create tables:

```bash
npx prisma migrate dev --name init
```

Generate Prisma client:

```bash
npx prisma generate
```

### 5. Start the Backend

```bash
npm run dev
```

The API server runs at `http://localhost:5001`.

### 6. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local`:

```env
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_SECRET=your_random_secret
```

> **Tip:** Generate `AUTH_SECRET` with `npx auth secret`

#### Google OAuth Setup

1. Go to [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Create **OAuth 2.0 Client ID** (Web application)
3. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
4. Copy the Client ID and Secret to `.env.local`

Start the frontend:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

---

## 🖥️ Usage

1. Open `http://localhost:3000` → **Landing page**
2. Click **"Start Chatting"** → Google sign-in
3. After login → Redirected to `/chat` dashboard
4. Start a conversation → AI responds in real-time
5. Use the sidebar to switch between conversations
6. Press **⌘K** (Mac) / **Ctrl+K** (Windows) to start a new chat
7. Toggle theme with the Light/Dark/System switcher

---

## 🔌 API Endpoints

All endpoints require `Authorization: Bearer <token>` (except health check).

| Method   | Endpoint                 | Description                 |
| -------- | ------------------------ | --------------------------- |
| `GET`    | `/health`                | Health check                |
| `POST`   | `/api/chat`              | Stream AI response (SSE)    |
| `GET`    | `/api/conversations`     | List user's conversations   |
| `POST`   | `/api/conversations`     | Create new conversation     |
| `GET`    | `/api/conversations/:id` | Get conversation + messages |
| `DELETE` | `/api/conversations/:id` | Delete conversation         |

---

## 🔐 User Sync with NextAuth

After successful login via Google (NextAuth), the frontend automatically calls:
`POST /api/auth/sync-user`

This endpoint:

- Creates the user in the database if they do not exist.
- Updates the user's name and image if they already exist.

**Request Body:**

```json
{
  "email": "user@example.com",
  "name": "User Name",
  "image": "profile_url"
}
```

_Note: This flow uses Prisma `upsert` for simplicity, ensuring no duplicate users and avoiding manual user creation._

---

## 🌐 CORS Configuration

The backend is configured to allow cross-origin requests from the following domains:

- `http://localhost:3000` (Local Development)
- `https://yuma-ai-azure.vercel.app` (Production Frontend)

CORS is strictly required to enable communication between the Next.js frontend (hosted on Vercel) and the Express backend (hosted on Railway). Preflight requests (`OPTIONS`) are actively handled to ensure secure cross-origin resource sharing.

---

## 🗄️ Database

### Schema (Prisma)

MySQL with Prisma ORM v7:

```prisma
User          (id, name, email, image, createdAt)
Conversation  (id, userId, title, createdAt, updatedAt)
Message       (id, conversationId, role, content, createdAt)
```

**Relations:**

- User → has many Conversations
- Conversation → has many Messages (cascade delete)

All queries are scoped by `userId` for data isolation.

### Prisma Commands

| Command                   | Description                        |
| ------------------------- | ---------------------------------- |
| `npm run prisma:migrate`  | Run pending migrations             |
| `npm run prisma:generate` | Regenerate Prisma client           |
| `npm run prisma:studio`   | Open Prisma Studio (GUI)           |
| `npm run prisma:reset`    | Reset DB and re-run all migrations |

---

## 🎨 Landing Page Sections

The landing page features **7 animated sections** built with Framer Motion:

| #   | Section          | Animations                                                |
| --- | ---------------- | --------------------------------------------------------- |
| 1   | **Navbar**       | Slide-down, blur backdrop, animated mobile menu           |
| 2   | **Hero**         | Gradient blobs, spring logo, staggered fade-ins           |
| 3   | **Features**     | 6 cards with staggered scroll-reveal, hover lift          |
| 4   | **About**        | Split layout, text slides left, illustration slides right |
| 5   | **Preview**      | Sequential chat bubbles, typing indicator dots            |
| 6   | **Pricing**      | 3 tiers with hover lift, "Most Popular" badge             |
| 7   | **CTA + Footer** | Glow-pulsing button, social links                         |

**Bonus:** Scroll progress indicator bar at the top of the page.

---

## 🌗 Theme System

Powered by `next-themes` + Tailwind CSS v4:

- **Light** — Clean white surfaces with zinc neutrals
- **Dark** — Deep zinc/black with soft borders
- **System** — Auto-detect from OS preference

Requires `@custom-variant dark` directive in `globals.css` for Tailwind v4 compatibility.

---

## 📋 Scripts

### Backend

| Command                   | Description                        |
| ------------------------- | ---------------------------------- |
| `npm run dev`             | Start with nodemon (auto-reload)   |
| `npm start`               | Start in production mode           |
| `npm run prisma:migrate`  | Run pending database migrations    |
| `npm run prisma:generate` | Regenerate Prisma client           |
| `npm run prisma:studio`   | Open Prisma Studio                 |
| `npm run prisma:reset`    | Reset DB and re-run all migrations |

### Frontend

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm start`     | Start production server      |
| `npm run lint`  | Run ESLint                   |

--- -->

## 📄 License

This project is for educational and portfolio purposes.

---

<div align="center">
  <b>Built with ❤️ using Next.js, Express, MySQL, Prisma, and Google Gemini</b>
</div>
