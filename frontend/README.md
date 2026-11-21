# Social Waale - Digital Marketing Agency & CMS (Frontend)

Modern, high-performance, responsive web application and content management system frontend built with **React 19**, **TanStack Router / Start**, **Tailwind CSS v4**, and **Vite**.

---

## 🚀 Features

- **Marketing Pages**: High-converting service landing pages (SEO, Performance Marketing, Social Media, Branding, Web & App Development, Local Advertising, Media Production, UI/UX).
- **Instagram Media Downloader Suite**: Interactive tools for reels, photos, videos, stories, and carousels with URL parsing, real-time download status, and instant media previews.
- **Client Lead Generation**: Centralized lead capture forms with UTM tracking, honeypot spam protection, and validation.
- **Full CMS Admin Suite**:
  - Live preview & revision restoration for Homepage.
  - Rich-text Article Editor with TipTap (tables, images, highlights, code blocks).
  - Service catalog management with drag-and-drop reordering.
  - Media Library with multi-file uploads and asset categorization.
  - Lead management CRM with status updates, assignments, notes, and search filters.
  - SEO settings and HTTP redirects manager.
- **Authentication**: JWT token management, brute-force rate limit protection, and password reset workflows.
- **REST API Integration**: Clean, strongly-typed HTTP client in `src/lib/api-client.ts` communicating with the independent Backend API.

---

## 📁 Directory Structure

```text
frontend/
├── src/
│   ├── assets/           # Local images, logos, banners
│   ├── components/       # Reusable UI components & shadcn primitives
│   │   ├── admin/        # Admin layouts, navigation, and editors
│   │   ├── cms/          # Rich text editor, media selector, preview
│   │   ├── downloader/   # Instagram downloader tools and components
│   │   ├── forms/        # Contact and lead capture forms
│   │   └── ui/           # Buttons, dialogs, inputs, cards, tables
│   ├── config/           # Site metadata, branding, and navigation config
│   ├── data/             # Default articles, services, and SEO fallback data
│   ├── hooks/            # Custom React hooks (auth, media queries, debounce)
│   ├── lib/              # Centralized API client, form schemas, tracking, SEO
│   ├── routes/           # File-based TanStack routes (public & admin)
│   └── test/             # Unit and integration tests (Vitest + Testing Library)
├── public/               # Static assets, robots, icons
├── .env                  # Local environment configuration
├── .env.example          # Environment variables template
├── .gitignore            # Git exclusions for dependencies and secrets
├── package.json          # Frontend dependencies & npm scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build & plugin configuration
└── README.md             # Frontend documentation
```

---

## 🛠️ Setup & Local Development

### 1. Prerequisites
- **Node.js**: v20+ or v22+
- **npm**: v10+

### 2. Install Dependencies
```bash
cd frontend
npm install
```

### 3. Configure Environment Variables
Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```
Ensure `VITE_API_URL` points to your backend:
```env
VITE_API_URL=http://localhost:5000/api
VITE_SITE_URL=http://localhost:8080
```

### 4. Run Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:8080` (or the port Vite selects).

---

## 🧪 Testing & Quality Assurance

Run the test suite:
```bash
npm run test
```

Watch mode for active development:
```bash
npm run test:watch
```

Run linting:
```bash
npm run lint
```

---

## 📦 Production Build

```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 🚢 Deployment (Vercel)

1. Push this repository to a dedicated GitHub repository (e.g. `socialwaale-frontend`).
2. Log in to **[Vercel](https://vercel.com)** and choose **Add New Project**.
3. Import your frontend repository.
4. Set Build Settings:
   - **Framework Preset**: Vite / TanStack Start
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output/public` or standard preset default
5. Add Environment Variables in Vercel:
   - `VITE_API_URL`: URL of your deployed backend (e.g. `https://api.socialwaale.com/api` or `https://backend.onrender.com/api`).
   - `VITE_SITE_URL`: Your production frontend domain (e.g. `https://socialwaale.com`).
6. Click **Deploy**.
