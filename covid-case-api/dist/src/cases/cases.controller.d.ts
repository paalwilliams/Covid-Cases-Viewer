import { CasesService } from './cases.service';
export declare class CasesController {
    private readonly casesService;
    constructor(casesService: CasesService);
    getCasesForGermany(_country: string): Promise<import("../dto/GermanyCasesDTO").GermanyCasesDTO>;
    getByState(state: string, _country: string): Promise<import("../dto/StateCasesDTO").StateCasesDto>;
    getLatestCasesForGermanyDayRange(dayRange: number, _country: string): Promise<import("../dto/LatestGermanyCasesDTO").LatestGermanyCasesDTO>;
    getLatestCasesForStateDayRange(state: string, dayRange: number, _country: string): Promise<import("../dto/LatestStateCasesDTO").LatestStateCasesDTO>;
}
