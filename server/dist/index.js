"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const logger_1 = __importDefault(require("./utils/logger"));
const database_1 = require("./utils/database");
const constants_1 = require("./constants");
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const deserializeUser_1 = __importDefault(require("./middlewares/deserializeUser"));
//options for cors midddleware
const options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: constants_1.CORS_ORIGIN,
    preflightContinue: false,
};
dotenv_1.default.config();
// Initializing express app. 
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)(options));
app.use((0, helmet_1.default)());
app.use(deserializeUser_1.default);
// Routes
app.use(`/api/users`, user_route_1.default);
app.use("/api/auth", auth_route_1.default);
const server = app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.connectToDatabase)();
    logger_1.default.info(`Server listening at http://localhost:${PORT}`);
}));
const signals = ["SIGTERM", "SIGINT"];
const gracefulShutdown = (signal) => {
    process.on(signal, () => __awaiter(void 0, void 0, void 0, function* () {
        logger_1.default.info("Goodbye, got signal", signal);
        server.close();
        yield (0, database_1.disconnectFromDatabase)();
        // disconnect from the db.
        logger_1.default.info("My work here is done ");
        process.exit(0);
    }));
};
// Running graceful shutdown if we get the signal.
for (let i = 0; i < signals.length; i++) {
    gracefulShutdown(signals[i]);
}
