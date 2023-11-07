"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateDeathsDTO = void 0;
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
//# sourceMappingURL=StateDeathsDTO.js.map