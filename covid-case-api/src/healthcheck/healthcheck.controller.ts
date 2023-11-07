import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { HealthcheckResponseDTO } from 'src/types';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get()
  public getHealthCheckInfo(): HealthcheckResponseDTO {
    const healthCheckData = this.healthcheckService.getHealthcheckData();
    return healthCheckData;
  }
}
