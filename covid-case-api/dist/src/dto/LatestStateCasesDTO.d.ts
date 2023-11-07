import { LatestStateCasesHistory } from 'src/types';
export declare class LatestStateCasesDTO {
    stateName: string;
    abbreviation: string;
    history: LatestStateCasesHistory;
    dayRange: number;
    constructor({ stateName, abbreviation, history, dayRange, }: {
        stateName: string;
        abbreviation: string;
        dayRange: number;
        history: LatestStateCasesHistory;
    });
}
