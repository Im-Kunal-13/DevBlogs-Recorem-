"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = {
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: "username is required",
        }),
        email: (0, zod_1.string)({
            required_error: "email is required",
        }).email('must be a valid email'),
        password: (0, zod_1.string)({
            required_error: "username is required",
        })
            .min(6, "Passwords must be atleast 6 characters long")
            .max(64, "Passwords should not be longer than 64 characters."),
        confirmPassword: (0, zod_1.string)({
            required_error: "username is required",
        }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }),
};
