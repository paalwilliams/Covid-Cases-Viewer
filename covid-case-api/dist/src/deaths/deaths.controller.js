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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeathsController = void 0;
const common_1 = require("@nestjs/common");
const StateParamValidationPipe_1 = require("../validation/StateParamValidationPipe");
const deaths_service_1 = require("./deaths.service");
const DayRangeValidationPipe_1 = require("../validation/DayRangeValidationPipe");
const CountryValidationPipe_1 = require("../validation/CountryValidationPipe");
let DeathsController = class DeathsController {
    constructor(deathsService) {
        this.deathsService = deathsService;
    }
    async getDeathsForCountry(_country) {
        return this.deathsService.getDeathsForGermany();
    }
    getDeathsByState(_country, state) {
        return this.deathsService.getDeathsByState(state);
    }
    async getLatestCasesForGermanyDayRange(_country, dayRange) {
        return this.deathsService.getLatestDeathsForGermany(dayRange);
    }
    async getLatestCasesForStateDayRange(_country, state, dayRange) {
        return this.deathsService.getLatestDeathsForState(state, dayRange);
    }
};
exports.DeathsController = DeathsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeathsController.prototype, "getDeathsForCountry", null);
__decorate([
    (0, common_1.Get)(':state'),
    __param(0, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __param(1, (0, common_1.Param)('state', StateParamValidationPipe_1.StateParamValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DeathsController.prototype, "getDeathsByState", null);
__decorate([
    (0, common_1.Get)('/latest/:dayRange'),
    __param(0, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __param(1, (0, common_1.Param)('dayRange', DayRangeValidationPipe_1.DayRangeValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], DeathsController.prototype, "getLatestCasesForGermanyDayRange", null);
__decorate([
    (0, common_1.Get)(':state/latest/:dayRange'),
    __param(0, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __param(1, (0, common_1.Param)('state', StateParamValidationPipe_1.StateParamValidationPipe)),
    __param(2, (0, common_1.Param)('dayRange', DayRangeValidationPipe_1.DayRangeValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], DeathsController.prototype, "getLatestCasesForStateDayRange", null);
exports.DeathsController = DeathsController = __decorate([
    (0, common_1.Controller)('deaths/:country'),
    __metadata("design:paramtypes", [deaths_service_1.DeathsService])
], DeathsController);
//# sourceMappingURL=deaths.controller.js.map