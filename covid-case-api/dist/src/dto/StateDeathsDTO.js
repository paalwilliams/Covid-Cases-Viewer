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
exports.StateDeathsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class StateDeathsDTO {
    constructor({ stateName, abbreviation, population, deaths, deathsPerWeek }) {
        this.stateName = stateName;
        this.abbreviation = abbreviation;
        this.population = population;
        this.deaths = deaths;
        this.deathsPerWeek = deathsPerWeek;
        this.deathsPerCapita = deaths / population;
        this.deathsPer100k = deaths / 100000;
    }
}
exports.StateDeathsDTO = StateDeathsDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StateDeathsDTO.prototype, "stateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StateDeathsDTO.prototype, "abbreviation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StateDeathsDTO.prototype, "population", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateDeathsDTO.prototype, "deaths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateDeathsDTO.prototype, "deathsPerWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateDeathsDTO.prototype, "deathsPerCapita", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], StateDeathsDTO.prototype, "deathsPer100k", void 0);
//# sourceMappingURL=StateDeathsDTO.js.map