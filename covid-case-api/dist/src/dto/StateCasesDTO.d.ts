export declare class StateCasesDto {
    stateName: string;
    abbreviation: string;
    population: string;
    cases: number;
    casesPerWeek: number;
    recovered: number;
    weekIncidence: number;
    casesPer100k: number;
    delta: {
        cases: number;
        recovered: number;
        weekIncidence: number;
    };
    hospitaliations: {
        cases7Days: number;
        incidence7Days: number;
        date: string;
        lastUpdate: string;
    };
    constructor({ stateName, abbreviation, population, cases, casesPerWeek, weekIncidence, casesPer100k, delta, recovered, hospitaliations, }: {
        stateName: any;
        abbreviation: any;
        population: any;
        cases: any;
        casesPerWeek: any;
        weekIncidence: any;
        casesPer100k: any;
        delta: any;
        recovered: any;
        hospitaliations: any;
    });
}
