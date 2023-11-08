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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCasesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StateCasesDto {
    constructor({ stateName, abbreviation, population, cases, casesPerWeek, weekIncidence, casesPer100k, delta, recovered, hospitalization, }) {
        this.stateName = stateName;
        this.abbreviation = abbreviation;
        this.population = population;
        this.cases = cases;
        this.casesPerWeek = casesPerWeek;
        this.weekIncidence = weekIncidence;
        this.casesPer100k = casesPer100k;
        this.recovered = recovered;
        this.delta = {
            recovered: delta.recovered,
            cases: delta.cases,
            weekIncidence: delta.weekIncidence,
        };
        this.hospitalization = hospitalization;
    }
}
exports.StateCasesDto = StateCasesDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StateCasesDto.prototype, "stateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StateCasesDto.prototype, "abbreviation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StateCasesDto.prototype, "population", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateCasesDto.prototype, "cases", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateCasesDto.prototype, "casesPerWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateCasesDto.prototype, "recovered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateCasesDto.prototype, "weekIncidence", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateCasesDto.prototype, "casesPer100k", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], StateCasesDto.prototype, "delta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], StateCasesDto.prototype, "hospitalization", void 0);
//# sourceMappingURL=StateCasesDTO.js.map