"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateParamValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils/utils");
let StateParamValidationPipe = class StateParamValidationPipe {
    transform(value) {
        const transformedValue = value.toUpperCase();
        const foundAbbreviation = (0, utils_1.mapStateNameOrAbbreviationToAbbreviation)(transformedValue);
        if (!foundAbbreviation) {
            throw new common_1.NotFoundException(`Error: configuration for state "${value}" does not exist.`);
        }
        return foundAbbreviation;
    }
};
exports.StateParamValidationPipe = StateParamValidationPipe;
exports.StateParamValidationPipe = StateParamValidationPipe = __decorate([
    (0, common_1.Injectable)()
], StateParamValidationPipe);
//# sourceMappingURL=StateParamValidationPipe.js.map