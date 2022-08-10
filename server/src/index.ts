import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import logger from "./utils/logger";
import { connectToDatabase, disconnectFromDatabase } from "./utils/database";
import { CORS_ORIGIN } from "./constants";
import userRoute from "./modules/user/user.route";
import authRoute from "./modules/auth/auth.route";
import postRoute from "./modules/post/post.route";
import deserializeUser from "./middlewares/deserializeUser";

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: CORS_ORIGIN,
  preflightContinue: false,
};

dotenv.config();

// Initializing express app.
const app: Express = express();
const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use(cors(options));
app.use(helmet());
app.use(deserializeUser);

// Routes
app.use(`/api/users`, userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

const server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server listening at http://localhost:${PORT}`);
});

const signals = ["SIGTERM", "SIGINT"];

const gracefulShutdown = (signal: string) => {
  process.on(signal, async () => {
    logger.info("Goodbye, got signal", signal);
    server.close();

    await disconnectFromDatabase();

    // disconnect from the db.

    logger.info("My work here is done ");

    process.exit(0);
  });
};

// Running graceful shutdown if we get the signal.
for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
