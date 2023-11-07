import { HealthcheckService } from './healthcheck.service';
import { HealtcheckResponseDTO } from 'src/types';
export declare class HealthcheckController {
    private readonly healthcheckService;
    constructor(healthcheckService: HealthcheckService);
    getHealthCheckInfo(): HealtcheckResponseDTO;
}
