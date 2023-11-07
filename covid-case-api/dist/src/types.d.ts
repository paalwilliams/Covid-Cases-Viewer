import { LatestStateCasesDTO } from './dto/LatestStateCasesDTO';
import { LatestStateDeathsDTO } from './dto/LatestStateDeathsDTO';
import { StateCasesDto } from './dto/StateCasesDTO';
import { StateDeathsDTO } from './dto/StateDeathsDTO';
export declare const states: {
    Hamburg: string;
    'Schleswig-Holstein': string;
    Niedersachsen: string;
    Bremen: string;
    'Nordrhein-Westfalen': string;
    Hessen: string;
    'Rheinland-Pfalz': string;
    Berlin: string;
    Bayern: string;
    'Baden-W\u00FCrttemberg': string;
    Sachsen: string;
    Thüringen: string;
    'Sachsen-Anhalt': string;
    Brandenburg: string;
    'Mecklenburg-Vorpommern': string;
    Saarland: string;
};
export type GermanyCasesDTOType = {
    [key in keyof typeof states]: StateCasesDto;
};
export type GermanyDeathsDTOType = {
    [key in keyof typeof states]: StateDeathsDTO;
};
export type GermanyLatestCasesDTOType = {
    [key in keyof typeof states]: LatestStateCasesDTO;
};
export type GermanyLatestDeathsDTOType = {
    [key in keyof typeof states]: LatestStateDeathsDTO;
};
export type RawCovidApiResponseType = {
    [key in keyof typeof states]: string;
};
export type HealthcheckResponseDTO = {
    uptime: number;
    version: string;
    ok: boolean;
};
export type LatestStateCasesHistory = {
    cases: number;
    date: string;
}[];
export type LatestStateDeathsHistory = {
    deaths: number;
    date: string;
}[];
