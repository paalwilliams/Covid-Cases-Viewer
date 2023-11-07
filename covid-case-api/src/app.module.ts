import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasesService } from './cases/cases.service';
import { CasesModule } from './cases/cases.module';
import { QueryClient } from './utils/QueryClient';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { HealthcheckService } from './healthcheck/healthcheck.service';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { DeathsController } from './deaths/deaths.controller';
import { DeathsService } from './deaths/deaths.service';
import { DeathsModule } from './deaths/deaths.module';

@Module({
  imports: [CasesModule, HealthcheckModule, DeathsModule],
  controllers: [AppController, HealthcheckController, DeathsController],
  providers: [
    AppService,
    CasesService,
    QueryClient,
    HealthcheckService,
    DeathsService,
  ],
})
export class AppModule {}
