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
  hospitaliations,
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
  hospitaliations: string;
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
    hospitaliations,
    population,
    stateName,
    weekIncidence,
  });

  return response;
};

export const casesResponseToGermanyCasesDTO = (
  rawData: RawCovidApiResponseType,
): GermanyCasesDTO => {
  const response = new GermanyCasesDTO({
    Bayern: new StateCasesDto({ ...rawData[states.Bayern] }),
    Berlin: new StateCasesDto({ ...rawData[states.Berlin] }),
    Brandenburg: new StateCasesDto({ ...rawData[states.Brandenburg] }),
    Bremen: new StateCasesDto({ ...rawData[states.Bremen] }),
    Hamburg: new StateCasesDto({ ...rawData[states.Hamburg] }),
    Hessen: new StateCasesDto({ ...rawData[states.Hessen] }),
    Niedersachsen: new StateCasesDto({ ...rawData[states.Niedersachsen] }),
    Saarland: new StateCasesDto({ ...rawData[states.Saarland] }),
    Sachsen: new StateCasesDto({ ...rawData[states.Sachsen] }),
    Thüringen: new StateCasesDto({ ...rawData[states.Thüringen] }),
    'Nordrhein-Westfalen': new StateCasesDto({
      ...rawData[states['Nordrhein-Westfalen']],
    }),
    'Schleswig-Holstein': new StateCasesDto({
      ...rawData[states['Schleswig-Holstein']],
    }),
    'Rheinland-Pfalz': new StateCasesDto({
      ...rawData[states['Rheinland-Pfalz']],
    }),
    'Baden-Württemberg': new StateCasesDto({
      ...rawData[states['Baden-Württemberg']],
    }),
    'Sachsen-Anhalt': new StateCasesDto({
      ...rawData[states['Sachsen-Anhalt']],
    }),
    'Mecklenburg-Vorpommern': new StateCasesDto({
      ...rawData[states['Mecklenburg-Vorpommern']],
    }),
  });

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
  const response = new GermanyDeathsDTO({
    Bayern: new StateDeathsDTO({ ...rawData[states.Bayern] }),
    Berlin: new StateDeathsDTO({ ...rawData[states.Berlin] }),
    Brandenburg: new StateDeathsDTO({
      ...rawData[states.Brandenburg],
    }),
    Bremen: new StateDeathsDTO({ ...rawData[states.Bremen] }),
    Hamburg: new StateDeathsDTO({ ...rawData[states.Hamburg] }),
    Hessen: new StateDeathsDTO({ ...rawData[states.Hessen] }),
    Niedersachsen: new StateDeathsDTO({ ...rawData[states.Niedersachsen] }),
    Saarland: new StateDeathsDTO({ ...rawData[states.Saarland] }),
    Sachsen: new StateDeathsDTO({ ...rawData[states.Sachsen] }),
    Thüringen: new StateDeathsDTO({ ...rawData[states.Thüringen] }),
    'Nordrhein-Westfalen': new StateDeathsDTO({
      ...rawData[states['Nordrhein-Westfalen']],
    }),
    'Schleswig-Holstein': new StateDeathsDTO({
      ...rawData[states['Schleswig-Holstein']],
    }),
    'Rheinland-Pfalz': new StateDeathsDTO({
      ...rawData[states['Rheinland-Pfalz']],
    }),
    'Baden-Württemberg': new StateDeathsDTO({
      ...rawData[states['Baden-Württemberg']],
    }),
    'Sachsen-Anhalt': new StateDeathsDTO({
      ...rawData[states['Sachsen-Anhalt']],
    }),
    'Mecklenburg-Vorpommern': new StateDeathsDTO({
      ...rawData[states['Mecklenburg-Vorpommern']],
    }),
  });

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
  const response = new LatestGermanyCasesDTO({
    Bayern: new LatestStateCasesDTO({ ...rawData[states.Bayern] }),
    Berlin: new LatestStateCasesDTO({ ...rawData[states.Berlin] }),
    Brandenburg: new LatestStateCasesDTO({ ...rawData[states.Brandenburg] }),
    Bremen: new LatestStateCasesDTO({ ...rawData[states.Bremen] }),
    Hamburg: new LatestStateCasesDTO({ ...rawData[states.Hamburg] }),
    Hessen: new LatestStateCasesDTO({ ...rawData[states.Hessen] }),
    Niedersachsen: new LatestStateCasesDTO({
      ...rawData[states.Niedersachsen],
    }),
    Saarland: new LatestStateCasesDTO({ ...rawData[states.Saarland] }),
    Sachsen: new LatestStateCasesDTO({ ...rawData[states.Sachsen] }),
    Thüringen: new LatestStateCasesDTO({ ...rawData[states.Thüringen] }),
    'Nordrhein-Westfalen': new LatestStateCasesDTO({
      ...rawData[states['Nordrhein-Westfalen']],
    }),
    'Schleswig-Holstein': new LatestStateCasesDTO({
      ...rawData[states['Schleswig-Holstein']],
    }),
    'Rheinland-Pfalz': new LatestStateCasesDTO({
      ...rawData[states['Rheinland-Pfalz']],
    }),
    'Baden-Württemberg': new LatestStateCasesDTO({
      ...rawData[states['Baden-Württemberg']],
    }),
    'Sachsen-Anhalt': new LatestStateCasesDTO({
      ...rawData[states['Sachsen-Anhalt']],
    }),
    'Mecklenburg-Vorpommern': new LatestStateCasesDTO({
      ...rawData[states['Mecklenburg-Vorpommern']],
    }),
  });

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
  const response = new LatestGermanyDeathsDTO({
    Bayern: new LatestStateDeathsDTO({ ...rawData[states.Bayern] }),
    Berlin: new LatestStateDeathsDTO({ ...rawData[states.Berlin] }),
    Brandenburg: new LatestStateDeathsDTO({ ...rawData[states.Brandenburg] }),
    Bremen: new LatestStateDeathsDTO({ ...rawData[states.Bremen] }),
    Hamburg: new LatestStateDeathsDTO({ ...rawData[states.Hamburg] }),
    Hessen: new LatestStateDeathsDTO({ ...rawData[states.Hessen] }),
    Niedersachsen: new LatestStateDeathsDTO({
      ...rawData[states.Niedersachsen],
    }),
    Saarland: new LatestStateDeathsDTO({ ...rawData[states.Saarland] }),
    Sachsen: new LatestStateDeathsDTO({ ...rawData[states.Sachsen] }),
    Thüringen: new LatestStateDeathsDTO({ ...rawData[states.Thüringen] }),
    'Nordrhein-Westfalen': new LatestStateDeathsDTO({
      ...rawData[states['Nordrhein-Westfalen']],
    }),
    'Schleswig-Holstein': new LatestStateDeathsDTO({
      ...rawData[states['Schleswig-Holstein']],
    }),
    'Rheinland-Pfalz': new LatestStateDeathsDTO({
      ...rawData[states['Rheinland-Pfalz']],
    }),
    'Baden-Württemberg': new LatestStateDeathsDTO({
      ...rawData[states['Baden-Württemberg']],
    }),
    'Sachsen-Anhalt': new LatestStateDeathsDTO({
      ...rawData[states['Sachsen-Anhalt']],
    }),
    'Mecklenburg-Vorpommern': new LatestStateDeathsDTO({
      ...rawData[states['Mecklenburg-Vorpommern']],
    }),
  });
  return response;
};
