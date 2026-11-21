# Social Waale - REST API & CMS Server (Backend)

Independent, robust, production-ready REST API backend service built with **Node.js**, **Express**, and **TypeScript**. Powers CMS operations, authentication, media uploads, lead capture, and Instagram media extraction.

---

## 🚀 Features

- **Authentication & Security**:
  - Memory-hard `scrypt` cryptographic password hashing.
  - Constant-time equality checks preventing timing attacks.
  - Brute-force rate limiting with automatic temporary account lockouts.
  - Cryptographically secure JWT Bearer token authentication.
- **REST API Endpoints**:
  - `/api/auth`: Login, token validation, user profile, password reset.
  - `/api/articles`: Article CRUD, slug routing, revisions, categories, tags, authors, bulk actions.
  - `/api/services`: Service catalog CRUD, status toggling, drag-and-drop reordering.
  - `/api/homepage`: Live published data, draft workspace, revision histories.
  - `/api/downloader`: Instagram resolver (reels, videos, stories, photos), page config, telemetry logs.
  - `/api/leads`: Centralized lead submission, status tracking, agent assignment, CRM notes.
  - `/api/media`: Disk storage uploads (Multer), metadata indexing, asset management.
  - `/api/settings`: Global SEO parameters, 301/302 URL redirects.
  - `/api/ai`: AI-assisted copywriting via Google Gemini.
  - `/api/health`: Comprehensive system health-check endpoint.
- **Storage & Database**:
  - Primary persistent JSON storage with atomic writes (`backend/data/cms-store.json`).
  - Drizzle ORM schema and migrations included (`backend/drizzle/`).
- **Production Readiness**:
  - CORS origin whitelisting for local and production domains.
  - 50MB payload limits for media operations.
  - Unified centralized error-handling middleware.
  - Port binding to `0.0.0.0` for Docker, Render, Railway, Fly.io, and Cloud Run compatibility.

---

## 📁 Directory Structure

```text
backend/
├── src/
│   ├── middleware/       # JWT Auth verification & centralized Error handler
│   ├── models/           # Shared TypeScript interfaces & types
│   ├── routes/           # Express router modules for all resources
│   ├── services/         # Third-party service integrations (Gemini AI)
│   ├── storage/          # Scrypt crypto, JSON atomic store engine, and CRUD
│   ├── test/             # Automated Vitest integration test suite
│   └── server.ts         # Express server entry point & middleware pipeline
├── data/
│   └── cms-store.json    # Primary persistent CMS JSON database
├── drizzle/              # Drizzle ORM schema & migration scripts
├── public/               # Static fallback page
├── scripts/              # Standalone TypeScript compilation build script
├── supabase/             # Supabase configuration
├── uploads/              # User-uploaded media files
├── .env                  # Local environment configuration
├── .env.example          # Environment variables template
├── .gitignore            # Git exclusions for dependencies, uploads, secrets
├── package.json          # Backend dependencies & npm scripts
├── tsconfig.json         # TypeScript compiler configuration (NodeNext)
└── README.md             # Backend documentation
```

---

## 🛠️ Setup & Local Development

### 1. Prerequisites
- **Node.js**: v20+ or v22+
- **npm**: v10+

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment Variables
Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```
Key configuration settings:
```env
PORT=5000
NODE_ENV=development
SESSION_SECRET=your-secure-secret-key-minimum-32-chars
CORS_ORIGIN=http://localhost:8080,http://localhost:3000
DATABASE_FILE=./data/cms-store.json
UPLOAD_DIR=./uploads
DOWNLOADER_RATE_LIMIT_PER_MINUTE=60
```

### 4. Run Development Server
```bash
npm run dev
```
The server will start on `http://localhost:5000`:
- **API Base**: `http://localhost:5000/api`
- **Health Check**: `http://localhost:5000/api/health`

---

## 🧪 Testing & Quality Assurance

Run the automated Vitest test suite:
```bash
npm run test
```

---

## 📦 Production Build & Start

Compile TypeScript to JavaScript in `dist/`:
```bash
npm run build
```

Start the compiled production server:
```bash
npm run start
```

---

## 🚢 Production Deployment

The backend can be deployed to any Node.js hosting platform:

### Option A: Render / Railway / Fly.io / DigitalOcean
1. Push this directory to a separate GitHub repository (e.g. `socialwaale-backend`).
2. Create a new **Web Service** on Render, Railway, or Fly.io.
3. Set Build & Start Settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Environment Variables**:
     - `PORT`: (Auto-set by platform or default to `5000`)
     - `NODE_ENV`: `production`
     - `SESSION_SECRET`: A secure 64-character random string
     - `CORS_ORIGIN`: Your deployed frontend URL (e.g. `https://socialwaale.com`)
   - **Persistent Disk (Optional for uploads)**: Attach a persistent volume to `./uploads` and `./data` if using filesystem persistence.
4. Set Health Check path to `/api/health` or `/health`.

### Option B: Vercel (Serverless)
A preconfigured `backend/vercel.json` and `backend/api/index.ts` entry point are included.
1. Connect the backend repository to Vercel.
2. The serverless handler will automatically route `/api/*` to `src/server.ts`.
