import { Controller, Get, Param } from '@nestjs/common';
import { StateParamValidationPipe } from 'src/validation/StateParamValidationPipe';
import { DeathsService } from './deaths.service';
import { DayRangeValidationPipe } from 'src/validation/DayRangeValidationPipe';
import { CountryValidationPipe } from 'src/validation/CountryValidationPipe';

@Controller('deaths/:country')
export class DeathsController {
  constructor(private readonly deathsService: DeathsService) {}

  @Get()
  async getDeathsForCountry(
    @Param('country', CountryValidationPipe) _country: string,
  ) {
    return this.deathsService.getDeathsForGermany();
  }
  @Get(':state')
  public getDeathsByState(
    @Param('country', CountryValidationPipe) _country: string,
    @Param('state', StateParamValidationPipe) state: string,
  ) {
    return this.deathsService.getDeathsByState(state);
  }
  @Get('/latest/:dayRange')
  async getLatestCasesForGermanyDayRange(
    @Param('country', CountryValidationPipe) _country: string,
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
  ) {
    return this.deathsService.getLatestDeathsForGermany(dayRange);
  }

  @Get(':state/latest/:dayRange')
  async getLatestCasesForStateDayRange(
    @Param('country', CountryValidationPipe) _country: string,
    @Param('state', StateParamValidationPipe) state: string,
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
  ) {
    return this.deathsService.getLatestDeathsForState(state, dayRange);
  }
}
