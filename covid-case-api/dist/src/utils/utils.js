"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConfiguredCountry = exports.mapStateNameOrAbbreviationToAbbreviation = exports.getStateFullNameForAbbreviation = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("../types");
const getStateFullNameForAbbreviation = (stateAbbreviation) => {
    const [key] = Object.entries(types_1.states).find(([_, value]) => {
        return value === stateAbbreviation;
    });
    return key;
};
exports.getStateFullNameForAbbreviation = getStateFullNameForAbbreviation;
const mapStateNameOrAbbreviationToAbbreviation = (stateNameOrAbbreviation) => {
    const uppercaseStateNameOrAbbreviation = stateNameOrAbbreviation.toUpperCase();
    try {
        const [_, value] = Object.entries(types_1.states).find(([k, v]) => {
            return (v.toUpperCase() === uppercaseStateNameOrAbbreviation ||
                k.toUpperCase() === uppercaseStateNameOrAbbreviation);
        });
        return value;
    }
    catch (error) {
        throw new common_1.NotFoundException(`Error: Configuration for state: ${stateNameOrAbbreviation} does not exist`);
    }
};
exports.mapStateNameOrAbbreviationToAbbreviation = mapStateNameOrAbbreviationToAbbreviation;
const isConfiguredCountry = (country) => {
    const configuredCountries = ['germany', 'deutschland'];
    return configuredCountries
        .map((countryName) => countryName.toUpperCase())
        .includes(country);
};
exports.isConfiguredCountry = isConfiguredCountry;
//# sourceMappingURL=utils.js.map