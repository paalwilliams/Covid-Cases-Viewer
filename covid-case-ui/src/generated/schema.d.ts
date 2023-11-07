/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/healthcheck": {
    get: operations["HealthcheckController_getHealthCheckInfo"];
  };
  "/api/deaths/{country}": {
    get: operations["DeathsController_getDeathsForCountry"];
  };
  "/api/deaths/{country}/{state}": {
    get: operations["DeathsController_getDeathsByState"];
  };
  "/api/deaths/{country}/latest/{dayRange}": {
    get: operations["DeathsController_getLatestCasesForGermanyDayRange"];
  };
  "/api/deaths/{country}/{state}/latest/{dayRange}": {
    get: operations["DeathsController_getLatestCasesForStateDayRange"];
  };
  "/api/cases/{country}": {
    get: operations["CasesController_getCasesForGermany"];
  };
  "/api/cases/{country}/{state}": {
    get: operations["CasesController_getByState"];
  };
  "/api/cases/{country}/latest/{dayRange}": {
    get: operations["CasesController_getLatestCasesForGermanyDayRange"];
  };
  "/api/cases/{country}/latest/{state}/{dayRange}": {
    get: operations["CasesController_getLatestCasesForStateDayRange"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    StateDeathsDTO: {
      stateName: string;
      abbreviation: string;
      population: string;
      deaths: number;
      deathsPerWeek: number;
      deathsPerCapita: number;
      deathsPer100k: number;
    };
    GermanyDeathsDTO: {
      Bayern: components["schemas"]["StateDeathsDTO"];
      Berlin: components["schemas"]["StateDeathsDTO"];
      Brandenburg: components["schemas"]["StateDeathsDTO"];
      Bremen: components["schemas"]["StateDeathsDTO"];
      Hamburg: components["schemas"]["StateDeathsDTO"];
      Hessen: components["schemas"]["StateDeathsDTO"];
      Niedersachsen: components["schemas"]["StateDeathsDTO"];
      Saarland: components["schemas"]["StateDeathsDTO"];
      Sachsen: components["schemas"]["StateDeathsDTO"];
      "Thüringen": components["schemas"]["StateDeathsDTO"];
      "Nordrhein-Westfalen": components["schemas"]["StateDeathsDTO"];
      "Schleswig-Holstein": components["schemas"]["StateDeathsDTO"];
      "Rheinland-Pfalz": components["schemas"]["StateDeathsDTO"];
      "Baden-Württemberg": components["schemas"]["StateDeathsDTO"];
      "Sachsen-Anhalt": components["schemas"]["StateDeathsDTO"];
      "Mecklenburg-Vorpommern": components["schemas"]["StateDeathsDTO"];
    };
    LatestStateDeathsDTO: {
      stateName: string;
      abbreviation: string;
      history: string[];
      dayRange: number;
    };
    LatestGermanyDeathsDTO: {
      Bayern: components["schemas"]["LatestStateDeathsDTO"];
      Berlin: components["schemas"]["LatestStateDeathsDTO"];
      Brandenburg: components["schemas"]["LatestStateDeathsDTO"];
      Bremen: components["schemas"]["LatestStateDeathsDTO"];
      Hamburg: components["schemas"]["LatestStateDeathsDTO"];
      Hessen: components["schemas"]["LatestStateDeathsDTO"];
      Niedersachsen: components["schemas"]["LatestStateDeathsDTO"];
      Saarland: components["schemas"]["LatestStateDeathsDTO"];
      Sachsen: components["schemas"]["LatestStateDeathsDTO"];
      "Thüringen": components["schemas"]["LatestStateDeathsDTO"];
      "Nordrhein-Westfalen": components["schemas"]["LatestStateDeathsDTO"];
      "Schleswig-Holstein": components["schemas"]["LatestStateDeathsDTO"];
      "Rheinland-Pfalz": components["schemas"]["LatestStateDeathsDTO"];
      "Baden-Württemberg": components["schemas"]["LatestStateDeathsDTO"];
      "Sachsen-Anhalt": components["schemas"]["LatestStateDeathsDTO"];
      "Mecklenburg-Vorpommern": components["schemas"]["LatestStateDeathsDTO"];
    };
    StateCasesDto: {
      stateName: string;
      abbreviation: string;
      population: string;
      cases: number;
      casesPerWeek: number;
      recovered: number;
      weekIncidence: number;
      casesPer100k: number;
      delta: Record<string, never>;
      hospitaliations: Record<string, never>;
    };
    GermanyCasesDTO: {
      Bayern: components["schemas"]["StateCasesDto"];
      Berlin: components["schemas"]["StateCasesDto"];
      Brandenburg: components["schemas"]["StateCasesDto"];
      Bremen: components["schemas"]["StateCasesDto"];
      Hamburg: components["schemas"]["StateCasesDto"];
      Hessen: components["schemas"]["StateCasesDto"];
      Niedersachsen: components["schemas"]["StateCasesDto"];
      Saarland: components["schemas"]["StateCasesDto"];
      Sachsen: components["schemas"]["StateCasesDto"];
      "Thüringen": components["schemas"]["StateCasesDto"];
      "Nordrhein-Westfalen": components["schemas"]["StateCasesDto"];
      "Schleswig-Holstein": components["schemas"]["StateCasesDto"];
      "Rheinland-Pfalz": components["schemas"]["StateCasesDto"];
      "Baden-Württemberg": components["schemas"]["StateCasesDto"];
      "Sachsen-Anhalt": components["schemas"]["StateCasesDto"];
      "Mecklenburg-Vorpommern": components["schemas"]["StateCasesDto"];
    };
    LatestStateCasesDTO: {
      stateName: string;
      abbreviation: string;
      history: string[];
      dayRange: number;
    };
    LatestGermanyCasesDTO: {
      Bayern: components["schemas"]["LatestStateCasesDTO"];
      Berlin: components["schemas"]["LatestStateCasesDTO"];
      Brandenburg: components["schemas"]["LatestStateCasesDTO"];
      Bremen: components["schemas"]["LatestStateCasesDTO"];
      Hamburg: components["schemas"]["LatestStateCasesDTO"];
      Hessen: components["schemas"]["LatestStateCasesDTO"];
      Niedersachsen: components["schemas"]["LatestStateCasesDTO"];
      Saarland: components["schemas"]["LatestStateCasesDTO"];
      Sachsen: components["schemas"]["LatestStateCasesDTO"];
      "Thüringen": components["schemas"]["LatestStateCasesDTO"];
      "Nordrhein-Westfalen": components["schemas"]["LatestStateCasesDTO"];
      "Schleswig-Holstein": components["schemas"]["LatestStateCasesDTO"];
      "Rheinland-Pfalz": components["schemas"]["LatestStateCasesDTO"];
      "Baden-Württemberg": components["schemas"]["LatestStateCasesDTO"];
      "Sachsen-Anhalt": components["schemas"]["LatestStateCasesDTO"];
      "Mecklenburg-Vorpommern": components["schemas"]["LatestStateCasesDTO"];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  HealthcheckController_getHealthCheckInfo: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  DeathsController_getDeathsForCountry: {
    parameters: {
      path: {
        country: string;
      };
    };
    responses: {
      /** @description All recorded deaths for a given country */
      200: {
        content: {
          "application/json": components["schemas"]["GermanyDeathsDTO"];
        };
      };
    };
  };
  DeathsController_getDeathsByState: {
    parameters: {
      path: {
        country: string;
        state: string;
      };
    };
    responses: {
      /** @description All recorded deaths by a given state and country */
      200: {
        content: {
          "application/json": components["schemas"]["StateDeathsDTO"];
        };
      };
    };
  };
  DeathsController_getLatestCasesForGermanyDayRange: {
    parameters: {
      path: {
        country: string;
        dayRange: number;
      };
    };
    responses: {
      /** @description Latest deaths for a given country for a given number of days */
      200: {
        content: {
          "application/json": components["schemas"]["LatestGermanyDeathsDTO"];
        };
      };
    };
  };
  DeathsController_getLatestCasesForStateDayRange: {
    parameters: {
      path: {
        country: string;
        state: string;
        dayRange: number;
      };
    };
    responses: {
      /** @description Records for deaths by state and country for a given number of days */
      200: {
        content: {
          "application/json": components["schemas"]["LatestStateDeathsDTO"];
        };
      };
    };
  };
  CasesController_getCasesForGermany: {
    parameters: {
      path: {
        country: string;
      };
    };
    responses: {
      /** @description All recorded cases for a given country */
      200: {
        content: {
          "application/json": components["schemas"]["GermanyCasesDTO"];
        };
      };
    };
  };
  CasesController_getByState: {
    parameters: {
      path: {
        state: string;
        country: string;
      };
    };
    responses: {
      /** @description All recorded cases for a given state */
      200: {
        content: {
          "application/json": components["schemas"]["StateCasesDto"];
        };
      };
    };
  };
  CasesController_getLatestCasesForGermanyDayRange: {
    parameters: {
      path: {
        dayRange: number;
        country: string;
      };
    };
    responses: {
      /** @description Latest recorded cases for a given state */
      200: {
        content: {
          "application/json": components["schemas"]["LatestGermanyCasesDTO"];
        };
      };
    };
  };
  CasesController_getLatestCasesForStateDayRange: {
    parameters: {
      path: {
        state: string;
        dayRange: number;
        country: string;
      };
    };
    responses: {
      /** @description Latest recorded cases for a given state and day range */
      200: {
        content: {
          "application/json": components["schemas"]["LatestStateCasesDTO"];
        };
      };
    };
  };
}
