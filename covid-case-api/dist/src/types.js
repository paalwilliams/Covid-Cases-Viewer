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
exports.LatestStateDeathsHistory = exports.LatestStateCasesHistory = exports.states = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.states = {
    Hamburg: 'HH',
    'Schleswig-Holstein': 'SH',
    Niedersachsen: 'NI',
    Bremen: 'HB',
    'Nordrhein-Westfalen': 'NW',
    Hessen: 'HE',
    'Rheinland-Pfalz': 'RP',
    Berlin: 'BE',
    Bayern: 'BY',
    'Baden-Württemberg': 'BW',
    Sachsen: 'SN',
    Thüringen: 'TH',
    'Sachsen-Anhalt': 'ST',
    Brandenburg: 'BB',
    'Mecklenburg-Vorpommern': 'MV',
    Saarland: 'SL',
};
class LatestStateCasesHistory {
}
exports.LatestStateCasesHistory = LatestStateCasesHistory;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LatestStateCasesHistory.prototype, "cases", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LatestStateCasesHistory.prototype, "date", void 0);
class LatestStateDeathsHistory {
}
exports.LatestStateDeathsHistory = LatestStateDeathsHistory;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], LatestStateDeathsHistory.prototype, "deaths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LatestStateDeathsHistory.prototype, "date", void 0);
//# sourceMappingURL=types.js.map