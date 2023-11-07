import { GermanyCasesDTO } from 'src/dto/GermanyCasesDTO';
import { LatestGermanyCasesDTO } from 'src/dto/LatestGermanyCasesDTO';
import { LatestStateCasesDTO } from 'src/dto/LatestStateCasesDTO';
import { StateCasesDto } from 'src/dto/StateCasesDTO';
import { QueryClient } from 'src/utils/QueryClient';
export declare class CasesService {
    private queryClient;
    constructor(queryClient: QueryClient);
    getCasesForState(state: string): Promise<StateCasesDto>;
    getCasesForGermany(): Promise<GermanyCasesDTO>;
    getLatestCasesForGermany(dayRange: number): Promise<LatestGermanyCasesDTO>;
    getLatestCasesForState(state: string, dayRange: number): Promise<LatestStateCasesDTO>;
}
