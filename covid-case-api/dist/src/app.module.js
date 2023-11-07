"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cases_service_1 = require("./cases/cases.service");
const cases_module_1 = require("./cases/cases.module");
const QueryClient_1 = require("./utils/QueryClient");
const healthcheck_controller_1 = require("./healthcheck/healthcheck.controller");
const healthcheck_service_1 = require("./healthcheck/healthcheck.service");
const healthcheck_module_1 = require("./healthcheck/healthcheck.module");
const deaths_controller_1 = require("./deaths/deaths.controller");
const deaths_service_1 = require("./deaths/deaths.service");
const deaths_module_1 = require("./deaths/deaths.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [cases_module_1.CasesModule, healthcheck_module_1.HealthcheckModule, deaths_module_1.DeathsModule],
        controllers: [app_controller_1.AppController, healthcheck_controller_1.HealthcheckController, deaths_controller_1.DeathsController],
        providers: [
            app_service_1.AppService,
            cases_service_1.CasesService,
            QueryClient_1.QueryClient,
            healthcheck_service_1.HealthcheckService,
            deaths_service_1.DeathsService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map