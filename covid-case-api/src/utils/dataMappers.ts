import { GermanyCasesDTO } from 'src/dto/GermanyCasesDTO';
import { GermanyDeathsDTO } from 'src/dto/GermanyDeathsDTO';
import { LatestGermanyCasesDTO } from 'src/dto/LatestGermanyCasesDTO';
import { LatestGermanyDeathsDTO } from 'src/dto/LatestGermanyDeathsDTO';
import { LatestStateCasesDTO } from 'src/dto/LatestStateCasesDTO';
import { LatestStateDeathsDTO } from 'src/dto/LatestStateDeathsDTO';
import { StateCasesDto } from 'src/dto/StateCasesDTO';
import { StateDeathsDTO } from 'src/dto/StateDeathsDTO';
import {
  LatestStateCasesHistory,
  LatestStateDeathsHistory,
  RawCovidApiResponseType,
  states,
} from 'src/types';

export const casesResponseToStateCasesDTO = ({
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
}: {
  abbreviation: string;
  cases: string;
  recovered: string;
  casesPer100k: string;
  casesPerWeek: string;
  delta: string;
  hospitalization: string;
  population: string;
  stateName: string;
  weekIncidence: string;
}): StateCasesDto => {
  const response = new StateCasesDto({
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

export const casesResponseToGermanyCasesDTO = (
  rawData: RawCovidApiResponseType,
): GermanyCasesDTO => {
  const mapped: Record<keyof typeof states, StateCasesDto> = {} as Record<
    keyof typeof states,
    StateCasesDto
  >;

  for (const [state] of Object.entries(states)) {
    mapped[state] = new StateCasesDto({
      ...rawData[states[state]],
      stateName: state,
    });
  }
  const response = new GermanyCasesDTO(mapped);
  return response;
};

export const casesResponseToStateDeathsDTO = ({
  abbreviation,
  deaths,
  deathsPerWeek,
  population,
  stateName,
}: {
  abbreviation: string;
  deaths: number;
  deathsPerWeek: number;
  population: number;
  stateName: string;
}): StateDeathsDTO => {
  const response = new StateDeathsDTO({
    abbreviation,
    deaths,
    deathsPerWeek,
    population,
    stateName,
  });
  return response;
};

export const casesResponseToGermanyDeathsDTO = (
  rawData: RawCovidApiResponseType,
) => {
  const mapped: Record<keyof typeof states, StateDeathsDTO> = {} as Record<
    keyof typeof states,
    StateDeathsDTO
  >;

  for (const [state] of Object.entries(states)) {
    mapped[state] = new StateDeathsDTO({
      ...rawData[states[state]],
      stateName: state,
    });
  }
  const response = new GermanyDeathsDTO(mapped);
  return response;
};

export const latestCasesResponseToLatestCasesForStateDTO = ({
  stateName,
  abbreviation,
  history,
  dayRange,
}: {
  stateName: string;
  abbreviation: string;
  history: LatestStateCasesHistory;
  dayRange: number;
}): LatestStateCasesDTO => {
  const response = new LatestStateCasesDTO({
    abbreviation,
    history,
    stateName,
    dayRange,
  });
  return response;
};

export const latestCasesResponseToLatestCasesForGermanyDTO = (
  rawData: RawCovidApiResponseType,
): LatestGermanyCasesDTO => {
  const mapped: Record<keyof typeof states, LatestStateCasesDTO> = {} as Record<
    keyof typeof states,
    LatestStateCasesDTO
  >;

  for (const [state] of Object.entries(states)) {
    mapped[state] = new LatestStateCasesDTO({
      ...rawData[states[state]],
      stateName: state,
    });
  }
  const response = new LatestGermanyCasesDTO(mapped);
  return response;
};

export const latestDeathsResponseToLatestDeathsForStateDTO = ({
  stateName,
  abbreviation,
  history,
  dayRange,
}: {
  stateName: string;
  abbreviation: string;
  history: LatestStateDeathsHistory;
  dayRange: number;
}): LatestStateDeathsDTO => {
  const response = new LatestStateDeathsDTO({
    abbreviation,
    history,
    stateName,
    dayRange,
  });
  return response;
};

export const latestDeathsResponseToLatestDeathsForGermanyDTO = (
  rawData: RawCovidApiResponseType,
): LatestGermanyDeathsDTO => {
  const mapped: Record<keyof typeof states, LatestStateDeathsDTO> =
    {} as Record<keyof typeof states, LatestStateDeathsDTO>;

  for (const [state] of Object.entries(states)) {
    mapped[state] = new LatestStateDeathsDTO({
      ...rawData[states[state]],
      stateName: state,
    });
  }

  const response = new LatestGermanyDeathsDTO(mapped);

  return response;
};
