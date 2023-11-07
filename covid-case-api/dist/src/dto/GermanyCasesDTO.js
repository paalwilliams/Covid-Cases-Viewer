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
exports.GermanyCasesDTO = void 0;
const StateCasesDTO_1 = require("./StateCasesDTO");
const swagger_1 = require("@nestjs/swagger");
class GermanyCasesDTO {
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
exports.GermanyCasesDTO = GermanyCasesDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Bayern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Berlin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Brandenburg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Bremen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Hamburg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Hessen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Niedersachsen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Saarland", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Sachsen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Th\u00FCringen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Nordrhein-Westfalen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Schleswig-Holstein", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Rheinland-Pfalz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Baden-W\u00FCrttemberg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Sachsen-Anhalt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", StateCasesDTO_1.StateCasesDto)
], GermanyCasesDTO.prototype, "Mecklenburg-Vorpommern", void 0);
//# sourceMappingURL=GermanyCasesDTO.js.map