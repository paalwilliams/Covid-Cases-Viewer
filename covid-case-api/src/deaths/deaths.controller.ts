import { Controller, Get, Param } from '@nestjs/common';
import { StateParamValidationPipe } from 'src/validation/StateParamValidationPipe';
import { DeathsService } from './deaths.service';
import { DayRangeValidationPipe } from 'src/validation/DayRangeValidationPipe';
import { CountryValidationPipe } from 'src/validation/CountryValidationPipe';
import { ApiOkResponse } from '@nestjs/swagger';
import { StateDeathsDTO } from 'src/dto/StateDeathsDTO';
import { GermanyDeathsDTO } from 'src/dto/GermanyDeathsDTO';
import { LatestGermanyDeathsDTO } from 'src/dto/LatestGermanyDeathsDTO';
import { LatestStateDeathsDTO } from 'src/dto/LatestStateDeathsDTO';

@Controller('deaths/:country')
export class DeathsController {
  constructor(private readonly deathsService: DeathsService) {}

  @Get()
  @ApiOkResponse({
    description: 'All recorded deaths for a given country',
    type: GermanyDeathsDTO,
    isArray: false,
  })
  async getDeathsForCountry(
    @Param('country', CountryValidationPipe) _country: string,
  ): Promise<GermanyDeathsDTO> {
    return this.deathsService.getDeathsForGermany();
  }

  @Get(':state')
  @ApiOkResponse({
    description: 'All recorded deaths by a given state and country',
    type: StateDeathsDTO,
    isArray: false,
  })
  public getDeathsByState(
    @Param('country', CountryValidationPipe) _country: string,
    @Param('state', StateParamValidationPipe) state: string,
  ): Promise<StateDeathsDTO> {
    return this.deathsService.getDeathsByState(state);
  }

  @Get('/latest/:dayRange')
  @ApiOkResponse({
    description: 'Latest deaths for a given country for a given number of days',
    type: LatestGermanyDeathsDTO,
    isArray: false,
  })
  async getLatestCasesForGermanyDayRange(
    @Param('country', CountryValidationPipe) _country: string,
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
  ): Promise<LatestGermanyDeathsDTO> {
    return this.deathsService.getLatestDeathsForGermany(dayRange);
  }

  @Get(':state/latest/:dayRange')
  @ApiOkResponse({
    description:
      'Records for deaths by state and country for a given number of days',
    type: LatestStateDeathsDTO,
    isArray: false,
  })
  async getLatestCasesForStateDayRange(
    @Param('country', CountryValidationPipe) _country: string,
    @Param('state', StateParamValidationPipe) state: string,
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
  ): Promise<LatestStateDeathsDTO> {
    return this.deathsService.getLatestDeathsForState(state, dayRange);
  }
}
