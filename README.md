<div align="center">
  <br />
  <a href="https://github.com/Itssanthoshhere/lms-saas-app.git" target="_blank">
    <img src="public/readme/hero.png" alt="Project Banner" />
  </a>

  <!-- Tech Stack Badges -->
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=nextdotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
    <img src="https://img.shields.io/badge/-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" />
    <img src="https://img.shields.io/badge/-Vapi-00C853?style=for-the-badge&logo=webrtc&logoColor=white" />
    <img src="https://img.shields.io/badge/-Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />
    <br/>
    <img src="https://img.shields.io/badge/-TailwindCSS-00BCFF?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  </div>

  <h3 align="center">🎓 Converso — AI-Powered LMS SaaS Platform</h3>

  <p align="center">
    A full-stack SaaS Learning Management System built with Next.js, Supabase & Clerk,
    featuring real-time AI voice tutoring, subscriptions, bookmarks, and session history.
  </p>
  <a href="https://lms-saas-app-coral.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <br />
</div>

---

## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
  - [🧩 Core Technologies](#-core-technologies)
- [🔋 Core Features](#-core-features)
  - [🎙️ AI Voice Learning](#️-ai-voice-learning)
  - [🔐 Authentication \& Subscriptions](#-authentication--subscriptions)
  - [📚 Companion Management](#-companion-management)
  - [⭐ Bookmarks \& History](#-bookmarks--history)
  - [📊 Dashboard \& Profile](#-dashboard--profile)
  - [🧠 Scalable SaaS Architecture](#-scalable-saas-architecture)
- [🧠 Architecture Overview](#-architecture-overview)
  - [**Frontend (Next.js App Router)**](#frontend-nextjs-app-router)
  - [**Backend (Supabase + Clerk)**](#backend-supabase--clerk)
  - [**AI Layer (Vapi)**](#ai-layer-vapi)
- [🤸 Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [1️⃣ Clone the Repository](#1️⃣-clone-the-repository)
  - [2️⃣ Install Dependencies](#2️⃣-install-dependencies)
  - [3️⃣ Environment Variables](#3️⃣-environment-variables)
  - [4️⃣ Run the App](#4️⃣-run-the-app)
- [🧱 Project Structure](#-project-structure)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contribution](#-contribution)
- [🔗 Contacts](#-contacts)
- [📄 License](#-license)
- [⭐ Show Your Support](#-show-your-support)

---

## ✨ Introduction

**Converso** is a **modern SaaS Learning Management System** that enables users to learn through
**real-time AI voice conversations**.

Unlike traditional LMS platforms, Converso allows learners to:

- Create AI companions (tutors)
- Talk to them using **voice**
- Track session history
- Bookmark favorite tutors
- Unlock premium features through subscriptions

This project demonstrates **real-world SaaS architecture**, including authentication,
payments, feature gating, and AI integration.

---

## ⚙️ Tech Stack

### 🧩 Core Technologies

- **Next.js (App Router)** — Server components, SSR, routing, actions
- **TypeScript** — Type safety & scalability
- **Tailwind CSS + shadcn/ui** — Modern, responsive UI
- **Supabase** — PostgreSQL, relational queries, auth-ready backend
- **Clerk** — Authentication, subscriptions & feature entitlements
- **Stripe** — Subscription billing & pricing tables
- **Vapi AI** — Real-time AI voice agent (speech-to-speech)
- **Zod** — Form validation & schema safety
- **Sentry** — Error monitoring & performance tracking

---

## 🔋 Core Features

### 🎙️ AI Voice Learning

- Real-time conversational AI tutors
- Low-latency voice sessions using Vapi
- Configurable tutor personality, style & voice

### 🔐 Authentication & Subscriptions

- Secure sign-in with Clerk
- Feature-based subscription access
- Companion creation limits by plan
- Upgrade flow with Stripe pricing table

### 📚 Companion Management

- Create personalized AI companions
- Subject-based categorization
- Search & filter companion library

### ⭐ Bookmarks & History

- Bookmark favorite companions
- Track completed sessions
- User-specific learning journey dashboard

### 📊 Dashboard & Profile

- Session statistics
- Created companions count
- Bookmarked tutors
- Recent learning activity

### 🧠 Scalable SaaS Architecture

- Server actions for business logic
- Secure backend enforcement
- Modular, reusable components
- Production-ready folder structure

---

## 🧠 Architecture Overview

### **Frontend (Next.js App Router)**

- Server Components for data fetching
- Client Components for interactivity
- Server Actions for mutations
- URL-based filtering & pagination

### **Backend (Supabase + Clerk)**

- PostgreSQL relational schema
- Auth-scoped data access
- Feature gating via Clerk entitlements
- Secure companion/session handling

### **AI Layer (Vapi)**

- Speech-to-speech AI agents
- Dynamic assistant configuration
- Real-time transcript handling

---

## 🤸 Quick Start

### Prerequisites

- Node.js (18+)
- npm
- Supabase account
- Clerk account
- Vapi account

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Itssanthoshhere/lms-saas-app.git
cd lms-saas-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Sentry
SENTRY_AUTH_TOKEN=
```

### 4️⃣ Run the App

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** 🚀

---

## 🧱 Project Structure

```bash
app/
 ├─ companions/
 │   ├─ [id]/        # Companion session page
 │   ├─ new/         # Companion creation
 │   └─ page.tsx     # Companion library
 ├─ my-journey/      # User profile & history
 ├─ subscription/    # Pricing page
 ├─ sign-in/         # Auth pages
 └─ layout.tsx

components/
 ├─ CompanionCard.tsx
 ├─ CompanionComponent.tsx
 ├─ CompanionsList.tsx
 ├─ Navbar.tsx
 └─ UI components

lib/
 ├─ actions/         # Server actions
 ├─ supabase.ts
 ├─ utils.ts
 └─ vapi.sdk.ts

constants/
types/
```

---

## 🚀 Future Enhancements

- 💳 Stripe Webhooks for subscription sync
- 📈 Learning analytics dashboard
- 🧠 AI memory per user
- 🗣️ Multi-language voice tutors
- 📱 Mobile-optimized experience
- 👥 Shared/group learning sessions

---

## 🤝 Contribution

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feat/my-feature
```

3. Commit your changes

```bash
git commit -m "feat: add my feature"
```

4. Push & open a Pull Request

---

## 🔗 Contacts

- **GitHub:** [Itssanthoshhere](https://github.com/Itssanthoshhere)
- **LinkedIn:** [Santhosh VS](https://www.linkedin.com/in/thesanthoshvs/)

---

## 📄 License

This project is intended for **educational and portfolio purposes**.
All assets and third-party services belong to their respective owners.

---

## ⭐ Show Your Support

If you like this project, **give it a ⭐ on GitHub** — it really helps! ❤️

---
