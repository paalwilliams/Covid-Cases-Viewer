import { CasesService } from './cases.service';
import { GermanyCasesDTO } from 'src/dto/GermanyCasesDTO';
import { StateCasesDto } from 'src/dto/StateCasesDTO';
import { LatestGermanyCasesDTO } from 'src/dto/LatestGermanyCasesDTO';
import { LatestStateCasesDTO } from 'src/dto/LatestStateCasesDTO';
export declare class CasesController {
    private readonly casesService;
    constructor(casesService: CasesService);
    getCasesForGermany(_country: string): Promise<GermanyCasesDTO>;
    getByState(state: string, _country: string): Promise<StateCasesDto>;
    getLatestCasesForGermanyDayRange(dayRange: number, _country: string): Promise<LatestGermanyCasesDTO>;
    getLatestCasesForStateDayRange(state: string, dayRange: number, _country: string): Promise<LatestStateCasesDTO>;
}
