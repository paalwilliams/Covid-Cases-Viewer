import { HealthcheckService } from './healthcheck.service';
import { HealthcheckResponseDTO } from 'src/types';
export declare class HealthcheckController {
    private readonly healthcheckService;
    constructor(healthcheckService: HealthcheckService);
    getHealthCheckInfo(): HealthcheckResponseDTO;
}
