"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCasesDto = void 0;
class StateCasesDto {
    constructor({ stateName, abbreviation, population, cases, casesPerWeek, weekIncidence, casesPer100k, delta, recovered, hospitaliations, }) {
        this.stateName = stateName;
        this.abbreviation = abbreviation;
        this.population = population;
        this.cases = cases;
        this.casesPerWeek = casesPerWeek;
        this.weekIncidence = weekIncidence;
        this.casesPer100k = casesPer100k;
        this.recovered = recovered;
        this.delta = {
            recovered: delta.recovered,
            cases: delta.cases,
            weekIncidence: delta.weekIncidence,
        };
        this.hospitaliations = hospitaliations;
    }
}
exports.StateCasesDto = StateCasesDto;
//# sourceMappingURL=StateCasesDTO.js.map