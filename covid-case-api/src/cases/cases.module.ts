import { Module } from '@nestjs/common';
import { CasesController } from './cases.controller';
import { CasesService } from './cases.service';
import { QueryClient } from 'src/utils/QueryClient';

@Module({
  controllers: [CasesController],
  providers: [CasesService, QueryClient],
})
export class CasesModule {}
