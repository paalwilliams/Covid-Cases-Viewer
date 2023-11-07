export declare class StateDeathsDTO {
    stateName: string;
    abbreviation: string;
    population: string;
    deaths: number;
    deathsPerWeek: number;
    deathsPerCapita: number;
    deathsPer100k: number;
    constructor({ stateName, abbreviation, population, deaths, deathsPerWeek }: {
        stateName: any;
        abbreviation: any;
        population: any;
        deaths: any;
        deathsPerWeek: any;
    });
}
