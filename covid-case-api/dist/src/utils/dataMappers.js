"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestDeathsResponseToLatestDeathsForGermanyDTO = exports.latestDeathsResponseToLatestDeathsForStateDTO = exports.latestCasesResponseToLatestCasesForGermanyDTO = exports.latestCasesResponseToLatestCasesForStateDTO = exports.casesResponseToGermanyDeathsDTO = exports.casesResponseToStateDeathsDTO = exports.casesResponseToGermanyCasesDTO = exports.casesResponseToStateCasesDTO = void 0;
const GermanyCasesDTO_1 = require("../dto/GermanyCasesDTO");
const GermanyDeathsDTO_1 = require("../dto/GermanyDeathsDTO");
const LatestGermanyCasesDTO_1 = require("../dto/LatestGermanyCasesDTO");
const LatestGermanyDeathsDTO_1 = require("../dto/LatestGermanyDeathsDTO");
const LatestStateCasesDTO_1 = require("../dto/LatestStateCasesDTO");
const LatestStateDeathsDTO_1 = require("../dto/LatestStateDeathsDTO");
const StateCasesDTO_1 = require("../dto/StateCasesDTO");
const StateDeathsDTO_1 = require("../dto/StateDeathsDTO");
const types_1 = require("../types");
const casesResponseToStateCasesDTO = ({ abbreviation, cases, recovered, casesPer100k, casesPerWeek, delta, hospitalization, population, stateName, weekIncidence, }) => {
    const response = new StateCasesDTO_1.StateCasesDto({
        abbreviation,
        cases,
        recovered,
        casesPer100k,
        casesPerWeek,
        delta,
        hospitalization,
        population,
        stateName,
        weekIncidence,
    });
    return response;
};
exports.casesResponseToStateCasesDTO = casesResponseToStateCasesDTO;
const casesResponseToGermanyCasesDTO = (rawData) => {
    const mapped = {};
    for (const [state] of Object.entries(types_1.states)) {
        mapped[state] = new StateCasesDTO_1.StateCasesDto({
            ...rawData[types_1.states[state]],
            stateName: state,
        });
    }
    const response = new GermanyCasesDTO_1.GermanyCasesDTO(mapped);
    return response;
};
exports.casesResponseToGermanyCasesDTO = casesResponseToGermanyCasesDTO;
const casesResponseToStateDeathsDTO = ({ abbreviation, deaths, deathsPerWeek, population, stateName, }) => {
    const response = new StateDeathsDTO_1.StateDeathsDTO({
        abbreviation,
        deaths,
        deathsPerWeek,
        population,
        stateName,
    });
    return response;
};
exports.casesResponseToStateDeathsDTO = casesResponseToStateDeathsDTO;
const casesResponseToGermanyDeathsDTO = (rawData) => {
    const mapped = {};
    for (const [state] of Object.entries(types_1.states)) {
        mapped[state] = new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states[state]],
            stateName: state,
        });
    }
    const response = new GermanyDeathsDTO_1.GermanyDeathsDTO(mapped);
    return response;
};
exports.casesResponseToGermanyDeathsDTO = casesResponseToGermanyDeathsDTO;
const latestCasesResponseToLatestCasesForStateDTO = ({ stateName, abbreviation, history, dayRange, }) => {
    const response = new LatestStateCasesDTO_1.LatestStateCasesDTO({
        abbreviation,
        history,
        stateName,
        dayRange,
    });
    return response;
};
exports.latestCasesResponseToLatestCasesForStateDTO = latestCasesResponseToLatestCasesForStateDTO;
const latestCasesResponseToLatestCasesForGermanyDTO = (rawData, dayRange) => {
    const mapped = {};
    for (const [state] of Object.entries(types_1.states)) {
        mapped[state] = new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states[state]],
            stateName: state,
            abbreviation: types_1.states[state],
            dayRange: dayRange,
        });
    }
    const response = new LatestGermanyCasesDTO_1.LatestGermanyCasesDTO(mapped);
    return response;
};
exports.latestCasesResponseToLatestCasesForGermanyDTO = latestCasesResponseToLatestCasesForGermanyDTO;
const latestDeathsResponseToLatestDeathsForStateDTO = ({ stateName, abbreviation, history, dayRange, }) => {
    const response = new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
        abbreviation,
        history,
        stateName,
        dayRange,
    });
    return response;
};
exports.latestDeathsResponseToLatestDeathsForStateDTO = latestDeathsResponseToLatestDeathsForStateDTO;
const latestDeathsResponseToLatestDeathsForGermanyDTO = (rawData) => {
    const mapped = {};
    for (const [state] of Object.entries(types_1.states)) {
        mapped[state] = new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states[state]],
            stateName: state,
        });
    }
    const response = new LatestGermanyDeathsDTO_1.LatestGermanyDeathsDTO(mapped);
    return response;
};
exports.latestDeathsResponseToLatestDeathsForGermanyDTO = latestDeathsResponseToLatestDeathsForGermanyDTO;
//# sourceMappingURL=dataMappers.js.map