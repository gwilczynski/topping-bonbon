"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lollipop = exports.hello = exports.cheesecakeMaker = void 0;
// import cheesecake from "./cheesecake";
var lollipop_1 = __importDefault(require("./lollipop"));
exports.lollipop = lollipop_1.default;
var hello = function () {
    return "Hello from Topping Bonbon!";
};
exports.hello = hello;
var cheesecake_1 = require("./cheesecake");
Object.defineProperty(exports, "cheesecakeMaker", { enumerable: true, get: function () { return __importDefault(cheesecake_1).default; } });
__exportStar(require("./cheesecake"), exports);
