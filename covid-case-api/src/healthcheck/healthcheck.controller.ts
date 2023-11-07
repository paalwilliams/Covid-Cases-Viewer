import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { HealtcheckResponseDTO } from 'src/types';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get()
  public getHealthCheckInfo(): HealtcheckResponseDTO {
    const healthCheckData = this.healthcheckService.getHealthcheckData();
    return healthCheckData;
  }
}
