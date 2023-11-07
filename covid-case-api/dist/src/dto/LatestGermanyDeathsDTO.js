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
exports.LatestGermanyDeathsDTO = void 0;
const LatestStateDeathsDTO_1 = require("./LatestStateDeathsDTO");
const swagger_1 = require("@nestjs/swagger");
class LatestGermanyDeathsDTO {
    constructor(data) {
        this['Bayern'] = data.Bayern;
        this['Berlin'] = data.Berlin;
        this['Brandenburg'] = data.Brandenburg;
        this['Bremen'] = data.Bremen;
        this['Hamburg'] = data.Hamburg;
        this['Hessen'] = data.Hessen;
        this['Niedersachsen'] = data.Niedersachsen;
        this['Saarland'] = data.Saarland;
        this['Sachsen'] = data.Sachsen;
        this['Thüringen'] = data.Thüringen;
        this['Nordrhein-Westfalen'] = data['Nordrhein-Westfalen'];
        this['Schleswig-Holstein'] = data['Schleswig-Holstein'];
        this['Rheinland-Pfalz'] = data['Rheinland-Pfalz'];
        this['Baden-Württemberg'] = data['Baden-Württemberg'];
        this['Sachsen-Anhalt'] = data['Sachsen-Anhalt'];
        this['Mecklenburg-Vorpommern'] = data['Mecklenburg-Vorpommern'];
    }
}
exports.LatestGermanyDeathsDTO = LatestGermanyDeathsDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Bayern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Berlin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Brandenburg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Bremen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Hamburg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Hessen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Niedersachsen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Saarland", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Sachsen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Th\u00FCringen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Nordrhein-Westfalen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Schleswig-Holstein", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Rheinland-Pfalz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Baden-W\u00FCrttemberg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Sachsen-Anhalt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", LatestStateDeathsDTO_1.LatestStateDeathsDTO)
], LatestGermanyDeathsDTO.prototype, "Mecklenburg-Vorpommern", void 0);
//# sourceMappingURL=LatestGermanyDeathsDTO.js.map