import { LatestStateDeathsHistory } from 'src/types';
export declare class LatestStateDeathsDTO {
    stateName: string;
    abbreviation: string;
    history: LatestStateDeathsHistory;
    dayRange: number;
    constructor({ stateName, abbreviation, history, dayRange, }: {
        stateName: string;
        abbreviation: string;
        dayRange: number;
        history: LatestStateDeathsHistory;
    });
}
