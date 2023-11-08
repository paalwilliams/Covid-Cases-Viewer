import { Injectable } from '@nestjs/common';
import packageJson from '../../package.json';
import { HealthcheckResponseDTO } from 'src/types';
import os from 'node:os';

@Injectable()
export class HealthcheckService {
  public getHealthcheckData(): HealthcheckResponseDTO {
    return {
      version: packageJson.version,
      uptime: os.uptime(),
      ok: true,
    };
  }
}
