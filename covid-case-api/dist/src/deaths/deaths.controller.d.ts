import { DeathsService } from './deaths.service';
export declare class DeathsController {
    private readonly deathsService;
    constructor(deathsService: DeathsService);
    getDeathsForCountry(_country: string): Promise<import("../dto/GermanyDeathsDTO").GermanyDeathsDTO>;
    getDeathsByState(_country: string, state: string): Promise<import("../dto/StateDeathsDTO").StateDeathsDTO>;
    getLatestCasesForGermanyDayRange(_country: string, dayRange: number): Promise<import("../dto/LatestGermanyDeathsDTO").LatestGermanyDeathsDTO>;
    getLatestCasesForStateDayRange(_country: string, state: string, dayRange: number): Promise<import("../dto/LatestStateDeathsDTO").LatestStateDeathsDTO>;
}
