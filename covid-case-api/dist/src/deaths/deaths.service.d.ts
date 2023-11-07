import { GermanyDeathsDTO } from 'src/dto/GermanyDeathsDTO';
import { LatestGermanyDeathsDTO } from 'src/dto/LatestGermanyDeathsDTO';
import { LatestStateDeathsDTO } from 'src/dto/LatestStateDeathsDTO';
import { StateDeathsDTO } from 'src/dto/StateDeathsDTO';
import { QueryClient } from 'src/utils/QueryClient';
export declare class DeathsService {
    private queryClient;
    constructor(queryClient: QueryClient);
    getDeathsForGermany(): Promise<GermanyDeathsDTO>;
    getDeathsByState(state: string): Promise<StateDeathsDTO>;
    getLatestDeathsForState(state: string, dayRange: number): Promise<LatestStateDeathsDTO>;
    getLatestDeathsForGermany(dayRange: number): Promise<LatestGermanyDeathsDTO>;
}
