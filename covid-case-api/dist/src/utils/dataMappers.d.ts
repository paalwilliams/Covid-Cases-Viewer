import { GermanyCasesDTO } from 'src/dto/GermanyCasesDTO';
import { GermanyDeathsDTO } from 'src/dto/GermanyDeathsDTO';
import { LatestGermanyCasesDTO } from 'src/dto/LatestGermanyCasesDTO';
import { LatestGermanyDeathsDTO } from 'src/dto/LatestGermanyDeathsDTO';
import { LatestStateCasesDTO } from 'src/dto/LatestStateCasesDTO';
import { LatestStateDeathsDTO } from 'src/dto/LatestStateDeathsDTO';
import { StateCasesDto } from 'src/dto/StateCasesDTO';
import { StateDeathsDTO } from 'src/dto/StateDeathsDTO';
import { LatestStateCasesHistory, LatestStateDeathsHistory, RawCovidApiResponseType } from 'src/types';
export declare const casesResponseToStateCasesDTO: ({ abbreviation, cases, recovered, casesPer100k, casesPerWeek, delta, hospitaliations, population, stateName, weekIncidence, }: {
    abbreviation: string;
    cases: string;
    recovered: string;
    casesPer100k: string;
    casesPerWeek: string;
    delta: string;
    hospitaliations: string;
    population: string;
    stateName: string;
    weekIncidence: string;
}) => StateCasesDto;
export declare const casesResponseToGermanyCasesDTO: (rawData: RawCovidApiResponseType) => GermanyCasesDTO;
export declare const casesResponseToStateDeathsDTO: ({ abbreviation, deaths, deathsPerWeek, population, stateName, }: {
    abbreviation: string;
    deaths: number;
    deathsPerWeek: number;
    population: number;
    stateName: string;
}) => StateDeathsDTO;
export declare const casesResponseToGermanyDeathsDTO: (rawData: RawCovidApiResponseType) => GermanyDeathsDTO;
export declare const latestCasesResponseToLatestCasesForStateDTO: ({ stateName, abbreviation, history, dayRange, }: {
    stateName: string;
    abbreviation: string;
    history: LatestStateCasesHistory;
    dayRange: number;
}) => LatestStateCasesDTO;
export declare const latestCasesResponseToLatestCasesForGermanyDTO: (rawData: RawCovidApiResponseType) => LatestGermanyCasesDTO;
export declare const latestDeathsResponseToLatestDeathsForStateDTO: ({ stateName, abbreviation, history, dayRange, }: {
    stateName: string;
    abbreviation: string;
    history: LatestStateDeathsHistory;
    dayRange: number;
}) => LatestStateDeathsDTO;
export declare const latestDeathsResponseToLatestDeathsForGermanyDTO: (rawData: RawCovidApiResponseType) => LatestGermanyDeathsDTO;
