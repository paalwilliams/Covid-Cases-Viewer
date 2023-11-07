import { Controller, Get, Param } from '@nestjs/common';
import { CasesService } from './cases.service';
import { StateParamValidationPipe } from 'src/validation/StateParamValidationPipe';
import { DayRangeValidationPipe } from 'src/validation/DayRangeValidationPipe';
import { CountryValidationPipe } from 'src/validation/CountryValidationPipe';

@Controller('cases/:country')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}
  @Get()
  async getCasesForGermany(
    @Param('country', CountryValidationPipe) _country: string,
  ) {
    return this.casesService.getCasesForGermany();
  }
  @Get(':state')
  async getByState(
    @Param('state', StateParamValidationPipe) state: string,
    @Param('country', CountryValidationPipe) _country: string,
  ) {
    return this.casesService.getCasesForState(state);
  }

  @Get('/latest/:dayRange')
  async getLatestCasesForGermanyDayRange(
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
    @Param('country', CountryValidationPipe) _country: string,
  ) {
    return this.casesService.getLatestCasesForGermany(dayRange);
  }

  @Get('/latest/:state/:dayRange')
  async getLatestCasesForStateDayRange(
    @Param('state', StateParamValidationPipe) state: string,
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
    @Param('country', CountryValidationPipe) _country: string,
  ) {
    return this.casesService.getLatestCasesForState(state, dayRange);
  }
}
