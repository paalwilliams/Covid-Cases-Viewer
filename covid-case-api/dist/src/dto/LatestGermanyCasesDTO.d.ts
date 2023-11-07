import { GermanyLatestCasesDTOType, states } from 'src/types';
import { LatestStateCasesDTO } from './LatestStateCasesDTO';
export declare class LatestGermanyCasesDTO implements GermanyLatestCasesDTOType {
    Bayern: LatestStateCasesDTO;
    'Berlin': LatestStateCasesDTO;
    'Brandenburg': LatestStateCasesDTO;
    'Bremen': LatestStateCasesDTO;
    'Hamburg': LatestStateCasesDTO;
    'Hessen': LatestStateCasesDTO;
    'Niedersachsen': LatestStateCasesDTO;
    'Saarland': LatestStateCasesDTO;
    'Sachsen': LatestStateCasesDTO;
    'Thüringen': LatestStateCasesDTO;
    'Nordrhein-Westfalen': LatestStateCasesDTO;
    'Schleswig-Holstein': LatestStateCasesDTO;
    'Rheinland-Pfalz': LatestStateCasesDTO;
    'Baden-Württemberg': LatestStateCasesDTO;
    'Sachsen-Anhalt': LatestStateCasesDTO;
    'Mecklenburg-Vorpommern': LatestStateCasesDTO;
    constructor(data: Record<keyof typeof states, LatestStateCasesDTO>);
}
