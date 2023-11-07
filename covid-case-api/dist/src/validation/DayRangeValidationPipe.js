"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayRangeValidationPipe = void 0;
const common_1 = require("@nestjs/common");
let DayRangeValidationPipe = class DayRangeValidationPipe {
    transform(value) {
        try {
            const parsedValue = parseInt(value);
            if (parsedValue > 365 || parsedValue <= 0) {
                throw new RangeError();
            }
            return parsedValue;
        }
        catch (error) {
            if (error instanceof RangeError) {
                throw new common_1.InternalServerErrorException(`Invalid Parameter: ${value}. Must be a number between 1 and 365.`);
            }
            throw new common_1.InternalServerErrorException(`Invalid Parameter: ${value}. Must be a number.`);
        }
    }
};
exports.DayRangeValidationPipe = DayRangeValidationPipe;
exports.DayRangeValidationPipe = DayRangeValidationPipe = __decorate([
    (0, common_1.Injectable)()
], DayRangeValidationPipe);
//# sourceMappingURL=DayRangeValidationPipe.js.map