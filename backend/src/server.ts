import express from "express";
import cors from "cors";
import path from "node:path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

import { authRouter } from "./routes/auth.routes.js";
import { articlesRouter } from "./routes/articles.routes.js";
import { servicesRouter } from "./routes/services.routes.js";
import { homepageRouter } from "./routes/homepage.routes.js";
import { downloaderRouter } from "./routes/downloader.routes.js";
import { leadsRouter } from "./routes/leads.routes.js";
import { mediaRouter } from "./routes/media.routes.js";
import { settingsRouter } from "./routes/settings.routes.js";
import { aiRouter } from "./routes/ai.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

// Middleware
app.use(
  cors({
    origin: CORS_ORIGIN === "*" ? true : CORS_ORIGIN.split(",").map((s) => s.trim()),
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Static uploads directory
const uploadsDir = path.resolve(process.cwd(), "uploads");
app.use("/uploads", express.static(uploadsDir));

// Health check endpoint
const sendHealth = (_req: express.Request, res: express.Response) => {
  res.json({
    status: "ok",
    service: "Social Waale CMS Backend API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
};

app.get("/api/health", sendHealth);
app.get("/health", sendHealth);
app.get("/", sendHealth);

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/services", servicesRouter);
app.use("/api/homepage", homepageRouter);
app.use("/api/downloader", downloaderRouter);
app.use("/api/leads", leadsRouter);
app.use("/api/media", mediaRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/ai", aiRouter);

// Global Error Handler
app.use(errorHandler);

// Start server if not running in Vercel serverless environment
if (!process.env.VERCEL) {
  const portNumber = Number(PORT) || 5000;
  app.listen(portNumber, "0.0.0.0", () => {
    console.log(`=======================================================`);
    console.log(`🚀 Social Waale CMS Backend API running on port ${portNumber}`);
    console.log(`📡 URL: http://0.0.0.0:${portNumber}`);
    console.log(`🩺 Health check: http://localhost:${portNumber}/api/health`);
    console.log(`=======================================================`);
  });
}

export default app;
