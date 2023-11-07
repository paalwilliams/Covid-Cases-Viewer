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
exports.CasesController = void 0;
const common_1 = require("@nestjs/common");
const cases_service_1 = require("./cases.service");
const StateParamValidationPipe_1 = require("../validation/StateParamValidationPipe");
const DayRangeValidationPipe_1 = require("../validation/DayRangeValidationPipe");
const CountryValidationPipe_1 = require("../validation/CountryValidationPipe");
const swagger_1 = require("@nestjs/swagger");
const GermanyCasesDTO_1 = require("../dto/GermanyCasesDTO");
const StateCasesDTO_1 = require("../dto/StateCasesDTO");
const LatestGermanyCasesDTO_1 = require("../dto/LatestGermanyCasesDTO");
const LatestStateCasesDTO_1 = require("../dto/LatestStateCasesDTO");
let CasesController = class CasesController {
    constructor(casesService) {
        this.casesService = casesService;
    }
    async getCasesForGermany(_country) {
        return this.casesService.getCasesForGermany();
    }
    async getByState(state, _country) {
        return this.casesService.getCasesForState(state);
    }
    async getLatestCasesForGermanyDayRange(dayRange, _country) {
        return this.casesService.getLatestCasesForGermany(dayRange);
    }
    async getLatestCasesForStateDayRange(state, dayRange, _country) {
        return this.casesService.getLatestCasesForState(state, dayRange);
    }
};
exports.CasesController = CasesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All recorded cases for a given country',
        type: GermanyCasesDTO_1.GermanyCasesDTO,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CasesController.prototype, "getCasesForGermany", null);
__decorate([
    (0, common_1.Get)(':state'),
    (0, swagger_1.ApiOkResponse)({
        description: 'All recorded cases for a given state',
        type: StateCasesDTO_1.StateCasesDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('state', StateParamValidationPipe_1.StateParamValidationPipe)),
    __param(1, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CasesController.prototype, "getByState", null);
__decorate([
    (0, common_1.Get)('/latest/:dayRange'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Latest recorded cases for a given state',
        type: LatestGermanyCasesDTO_1.LatestGermanyCasesDTO,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('dayRange', DayRangeValidationPipe_1.DayRangeValidationPipe)),
    __param(1, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CasesController.prototype, "getLatestCasesForGermanyDayRange", null);
__decorate([
    (0, common_1.Get)('/latest/:state/:dayRange'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Latest recorded cases for a given state and day range',
        type: LatestStateCasesDTO_1.LatestStateCasesDTO,
        isArray: false,
    }),
    __param(0, (0, common_1.Param)('state', StateParamValidationPipe_1.StateParamValidationPipe)),
    __param(1, (0, common_1.Param)('dayRange', DayRangeValidationPipe_1.DayRangeValidationPipe)),
    __param(2, (0, common_1.Param)('country', CountryValidationPipe_1.CountryValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], CasesController.prototype, "getLatestCasesForStateDayRange", null);
exports.CasesController = CasesController = __decorate([
    (0, common_1.Controller)('cases/:country'),
    __metadata("design:paramtypes", [cases_service_1.CasesService])
], CasesController);
//# sourceMappingURL=cases.controller.js.map