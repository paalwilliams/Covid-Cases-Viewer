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
const casesResponseToStateCasesDTO = ({ abbreviation, cases, recovered, casesPer100k, casesPerWeek, delta, hospitaliations, population, stateName, weekIncidence, }) => {
    const response = new StateCasesDTO_1.StateCasesDto({
        abbreviation,
        cases,
        recovered,
        casesPer100k,
        casesPerWeek,
        delta,
        hospitaliations,
        population,
        stateName,
        weekIncidence,
    });
    return response;
};
exports.casesResponseToStateCasesDTO = casesResponseToStateCasesDTO;
const casesResponseToGermanyCasesDTO = (rawData) => {
    const response = new GermanyCasesDTO_1.GermanyCasesDTO({
        Bayern: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Bayern] }),
        Berlin: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Berlin] }),
        Brandenburg: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Brandenburg] }),
        Bremen: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Bremen] }),
        Hamburg: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Hamburg] }),
        Hessen: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Hessen] }),
        Niedersachsen: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Niedersachsen] }),
        Saarland: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Saarland] }),
        Sachsen: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Sachsen] }),
        Thüringen: new StateCasesDTO_1.StateCasesDto({ ...rawData[types_1.states.Thüringen] }),
        'Nordrhein-Westfalen': new StateCasesDTO_1.StateCasesDto({
            ...rawData[types_1.states['Nordrhein-Westfalen']],
        }),
        'Schleswig-Holstein': new StateCasesDTO_1.StateCasesDto({
            ...rawData[types_1.states['Schleswig-Holstein']],
        }),
        'Rheinland-Pfalz': new StateCasesDTO_1.StateCasesDto({
            ...rawData[types_1.states['Rheinland-Pfalz']],
        }),
        'Baden-Württemberg': new StateCasesDTO_1.StateCasesDto({
            ...rawData[types_1.states['Baden-Württemberg']],
        }),
        'Sachsen-Anhalt': new StateCasesDTO_1.StateCasesDto({
            ...rawData[types_1.states['Sachsen-Anhalt']],
        }),
        'Mecklenburg-Vorpommern': new StateCasesDTO_1.StateCasesDto({
            ...rawData[types_1.states['Mecklenburg-Vorpommern']],
        }),
    });
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
    const response = new GermanyDeathsDTO_1.GermanyDeathsDTO({
        Bayern: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Bayern] }),
        Berlin: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Berlin] }),
        Brandenburg: new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states.Brandenburg],
        }),
        Bremen: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Bremen] }),
        Hamburg: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Hamburg] }),
        Hessen: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Hessen] }),
        Niedersachsen: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Niedersachsen] }),
        Saarland: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Saarland] }),
        Sachsen: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Sachsen] }),
        Thüringen: new StateDeathsDTO_1.StateDeathsDTO({ ...rawData[types_1.states.Thüringen] }),
        'Nordrhein-Westfalen': new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states['Nordrhein-Westfalen']],
        }),
        'Schleswig-Holstein': new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states['Schleswig-Holstein']],
        }),
        'Rheinland-Pfalz': new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states['Rheinland-Pfalz']],
        }),
        'Baden-Württemberg': new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states['Baden-Württemberg']],
        }),
        'Sachsen-Anhalt': new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states['Sachsen-Anhalt']],
        }),
        'Mecklenburg-Vorpommern': new StateDeathsDTO_1.StateDeathsDTO({
            ...rawData[types_1.states['Mecklenburg-Vorpommern']],
        }),
    });
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
const latestCasesResponseToLatestCasesForGermanyDTO = (rawData) => {
    const response = new LatestGermanyCasesDTO_1.LatestGermanyCasesDTO({
        Bayern: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Bayern] }),
        Berlin: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Berlin] }),
        Brandenburg: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Brandenburg] }),
        Bremen: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Bremen] }),
        Hamburg: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Hamburg] }),
        Hessen: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Hessen] }),
        Niedersachsen: new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states.Niedersachsen],
        }),
        Saarland: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Saarland] }),
        Sachsen: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Sachsen] }),
        Thüringen: new LatestStateCasesDTO_1.LatestStateCasesDTO({ ...rawData[types_1.states.Thüringen] }),
        'Nordrhein-Westfalen': new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states['Nordrhein-Westfalen']],
        }),
        'Schleswig-Holstein': new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states['Schleswig-Holstein']],
        }),
        'Rheinland-Pfalz': new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states['Rheinland-Pfalz']],
        }),
        'Baden-Württemberg': new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states['Baden-Württemberg']],
        }),
        'Sachsen-Anhalt': new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states['Sachsen-Anhalt']],
        }),
        'Mecklenburg-Vorpommern': new LatestStateCasesDTO_1.LatestStateCasesDTO({
            ...rawData[types_1.states['Mecklenburg-Vorpommern']],
        }),
    });
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
    const response = new LatestGermanyDeathsDTO_1.LatestGermanyDeathsDTO({
        Bayern: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Bayern] }),
        Berlin: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Berlin] }),
        Brandenburg: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Brandenburg] }),
        Bremen: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Bremen] }),
        Hamburg: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Hamburg] }),
        Hessen: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Hessen] }),
        Niedersachsen: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states.Niedersachsen],
        }),
        Saarland: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Saarland] }),
        Sachsen: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Sachsen] }),
        Thüringen: new LatestStateDeathsDTO_1.LatestStateDeathsDTO({ ...rawData[types_1.states.Thüringen] }),
        'Nordrhein-Westfalen': new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states['Nordrhein-Westfalen']],
        }),
        'Schleswig-Holstein': new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states['Schleswig-Holstein']],
        }),
        'Rheinland-Pfalz': new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states['Rheinland-Pfalz']],
        }),
        'Baden-Württemberg': new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states['Baden-Württemberg']],
        }),
        'Sachsen-Anhalt': new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states['Sachsen-Anhalt']],
        }),
        'Mecklenburg-Vorpommern': new LatestStateDeathsDTO_1.LatestStateDeathsDTO({
            ...rawData[types_1.states['Mecklenburg-Vorpommern']],
        }),
    });
    return response;
};
exports.latestDeathsResponseToLatestDeathsForGermanyDTO = latestDeathsResponseToLatestDeathsForGermanyDTO;
//# sourceMappingURL=dataMappers.js.map