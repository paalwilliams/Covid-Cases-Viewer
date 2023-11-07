import { GermanyCasesDTOType, states } from 'src/types';
import { StateCasesDto } from './StateCasesDTO';
export declare class GermanyCasesDTO implements GermanyCasesDTOType {
    'Bayern': StateCasesDto;
    'Berlin': StateCasesDto;
    'Brandenburg': StateCasesDto;
    'Bremen': StateCasesDto;
    'Hamburg': StateCasesDto;
    'Hessen': StateCasesDto;
    'Niedersachsen': StateCasesDto;
    'Saarland': StateCasesDto;
    'Sachsen': StateCasesDto;
    'Thüringen': StateCasesDto;
    'Nordrhein-Westfalen': StateCasesDto;
    'Schleswig-Holstein': StateCasesDto;
    'Rheinland-Pfalz': StateCasesDto;
    'Baden-Württemberg': StateCasesDto;
    'Sachsen-Anhalt': StateCasesDto;
    'Mecklenburg-Vorpommern': StateCasesDto;
    constructor(data: Record<keyof typeof states, StateCasesDto>);
}
