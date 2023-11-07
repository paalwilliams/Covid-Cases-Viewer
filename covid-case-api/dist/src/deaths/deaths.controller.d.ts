import { DeathsService } from './deaths.service';
import { StateDeathsDTO } from 'src/dto/StateDeathsDTO';
import { GermanyDeathsDTO } from 'src/dto/GermanyDeathsDTO';
import { LatestGermanyDeathsDTO } from 'src/dto/LatestGermanyDeathsDTO';
import { LatestStateDeathsDTO } from 'src/dto/LatestStateDeathsDTO';
export declare class DeathsController {
    private readonly deathsService;
    constructor(deathsService: DeathsService);
    getDeathsForCountry(_country: string): Promise<GermanyDeathsDTO>;
    getDeathsByState(_country: string, state: string): Promise<StateDeathsDTO>;
    getLatestCasesForGermanyDayRange(_country: string, dayRange: number): Promise<LatestGermanyDeathsDTO>;
    getLatestCasesForStateDayRange(_country: string, state: string, dayRange: number): Promise<LatestStateDeathsDTO>;
}
