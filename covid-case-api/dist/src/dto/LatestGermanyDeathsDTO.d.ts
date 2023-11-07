import { GermanyLatestDeathsDTOType, states } from 'src/types';
import { LatestStateDeathsDTO } from './LatestStateDeathsDTO';
export declare class LatestGermanyDeathsDTO implements GermanyLatestDeathsDTOType {
    Bayern: LatestStateDeathsDTO;
    'Berlin': LatestStateDeathsDTO;
    'Brandenburg': LatestStateDeathsDTO;
    'Bremen': LatestStateDeathsDTO;
    'Hamburg': LatestStateDeathsDTO;
    'Hessen': LatestStateDeathsDTO;
    'Niedersachsen': LatestStateDeathsDTO;
    'Saarland': LatestStateDeathsDTO;
    'Sachsen': LatestStateDeathsDTO;
    'Thüringen': LatestStateDeathsDTO;
    'Nordrhein-Westfalen': LatestStateDeathsDTO;
    'Schleswig-Holstein': LatestStateDeathsDTO;
    'Rheinland-Pfalz': LatestStateDeathsDTO;
    'Baden-Württemberg': LatestStateDeathsDTO;
    'Sachsen-Anhalt': LatestStateDeathsDTO;
    'Mecklenburg-Vorpommern': LatestStateDeathsDTO;
    constructor(data: Record<keyof typeof states, LatestStateDeathsDTO>);
}
