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
exports.LatestStateCasesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("../types");
class LatestStateCasesDTO {
    constructor({ stateName, abbreviation, history, dayRange, }) {
        this.stateName = stateName;
        this.abbreviation = abbreviation;
        this.history = history;
        this.dayRange = dayRange;
    }
}
exports.LatestStateCasesDTO = LatestStateCasesDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LatestStateCasesDTO.prototype, "stateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LatestStateCasesDTO.prototype, "abbreviation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
    }),
    __metadata("design:type", types_1.LatestStateCasesHistory)
], LatestStateCasesDTO.prototype, "history", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LatestStateCasesDTO.prototype, "dayRange", void 0);
//# sourceMappingURL=LatestStateCasesDTO.js.map