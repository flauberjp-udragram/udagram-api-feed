"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = exports.requireAuth = void 0;
const express_1 = require("express");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../../../../config/config");
const router = (0, express_1.Router)();
function requireAuth(req, res, next) {
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).send({ message: "No authorization headers." });
    }
    const token_bearer = req.headers.authorization.split(" ");
    if (token_bearer.length != 2) {
        return res.status(401).send({ message: "Malformed token." });
    }
    const token = token_bearer[1];
    return jwt.verify(token, config_1.config.jwt.secret, (err, decoded) => {
        if (err) {
            return res
                .status(500)
                .send({ auth: false, message: "Failed to authenticate." });
        }
        return next();
    });
}
exports.requireAuth = requireAuth;
exports.AuthRouter = router;
//# sourceMappingURL=auth.router.js.map