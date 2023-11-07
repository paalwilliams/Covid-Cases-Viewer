import { GermanyDeathsDTOType, states } from 'src/types';
import { StateDeathsDTO } from './StateDeathsDTO';
export declare class GermanyDeathsDTO implements GermanyDeathsDTOType {
    'Bayern': StateDeathsDTO;
    'Berlin': StateDeathsDTO;
    'Brandenburg': StateDeathsDTO;
    'Bremen': StateDeathsDTO;
    'Hamburg': StateDeathsDTO;
    'Hessen': StateDeathsDTO;
    'Niedersachsen': StateDeathsDTO;
    'Saarland': StateDeathsDTO;
    'Sachsen': StateDeathsDTO;
    'Thüringen': StateDeathsDTO;
    'Nordrhein-Westfalen': StateDeathsDTO;
    'Schleswig-Holstein': StateDeathsDTO;
    'Rheinland-Pfalz': StateDeathsDTO;
    'Baden-Württemberg': StateDeathsDTO;
    'Sachsen-Anhalt': StateDeathsDTO;
    'Mecklenburg-Vorpommern': StateDeathsDTO;
    constructor(data: Record<keyof typeof states, StateDeathsDTO>);
}
