"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClient = void 0;
const axios_1 = __importDefault(require("axios"));
const Environment_1 = require("./Environment");
const common_1 = require("@nestjs/common");
let QueryClient = class QueryClient {
    constructor() {
        this._fetch = axios_1.default;
        this._fetch.defaults.baseURL = new Environment_1.Environment().COVID_API_ROOT;
    }
    async request(url, init) {
        return this._fetch(`${url}`, init);
    }
};
exports.QueryClient = QueryClient;
exports.QueryClient = QueryClient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], QueryClient);
//# sourceMappingURL=QueryClient.js.map