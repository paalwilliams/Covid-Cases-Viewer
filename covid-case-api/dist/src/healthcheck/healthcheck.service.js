"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcheckService = void 0;
const common_1 = require("@nestjs/common");
const package_json_1 = __importDefault(require("../../package.json"));
const node_os_1 = __importDefault(require("node:os"));
let HealthcheckService = class HealthcheckService {
    getHealthcheckData() {
        return {
            version: package_json_1.default.version,
            uptime: node_os_1.default.uptime(),
            ok: true,
        };
    }
};
exports.HealthcheckService = HealthcheckService;
exports.HealthcheckService = HealthcheckService = __decorate([
    (0, common_1.Injectable)()
], HealthcheckService);
//# sourceMappingURL=healthcheck.service.js.map