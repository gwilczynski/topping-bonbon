"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lollipop = exports.cheesecake = exports.hello = void 0;
var cheesecake_1 = __importDefault(require("./cheesecake"));
exports.cheesecake = cheesecake_1.default;
var lollipop_1 = __importDefault(require("./lollipop"));
exports.lollipop = lollipop_1.default;
var hello = function () { return console.log("Hello from Topping Bonbon!"); };
exports.hello = hello;
