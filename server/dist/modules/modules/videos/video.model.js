"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModel = exports.Video = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const nanoid_1 = require("nanoid");
const user_model_1 = require("../user/user.model");
const nanoid = (0, nanoid_1.customAlphabet)("1234567890abcdefghijklmnopqrstuvwxyz", 10);
class Video {
}
__decorate([
    (0, typegoose_1.prop)()
], Video.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)()
], Video.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: ["mp4"] })
], Video.prototype, "extension", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, ref: () => user_model_1.User })
], Video.prototype, "owner", void 0);
__decorate([
    (0, typegoose_1.prop)({ unique: true, default: () => nanoid() })
], Video.prototype, "videoId", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false })
], Video.prototype, "published", void 0);
exports.Video = Video;
exports.VideoModel = (0, typegoose_1.getModelForClass)(Video, {
    schemaOptions: {
        timestamps: true,
    },
});
