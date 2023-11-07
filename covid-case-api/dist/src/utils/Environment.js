"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
class Environment {
    constructor() {
        this.COVID_API_ROOT = process.env.COVID_API_ROOT;
        dotenv_1.default.config();
    }
}
exports.Environment = Environment;
//# sourceMappingURL=Environment.js.map