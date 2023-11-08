import { Controller, Get, Param } from '@nestjs/common';
import { CasesService } from './cases.service';
import { StateParamValidationPipe } from 'src/validation/StateParamValidationPipe';
import { DayRangeValidationPipe } from 'src/validation/DayRangeValidationPipe';
import { CountryValidationPipe } from 'src/validation/CountryValidationPipe';
import { ApiOkResponse } from '@nestjs/swagger';
import { GermanyCasesDTO } from 'src/dto/GermanyCasesDTO';
import { StateCasesDto } from 'src/dto/StateCasesDTO';
import { LatestGermanyCasesDTO } from 'src/dto/LatestGermanyCasesDTO';
import { LatestStateCasesDTO } from 'src/dto/LatestStateCasesDTO';

@Controller('cases/:country')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Get()
  @ApiOkResponse({
    description: 'All recorded cases for a given country',
    type: GermanyCasesDTO,
  })
  async getCasesForGermany(
    @Param('country', CountryValidationPipe) _country: string,
  ): Promise<GermanyCasesDTO> {
    return this.casesService.getCasesForGermany();
  }

  @Get(':state')
  @ApiOkResponse({
    description: 'All recorded cases for a given state',
    type: StateCasesDto,
  })
  async getByState(
    @Param('state', StateParamValidationPipe) state: string,
    @Param('country', CountryValidationPipe) _country: string,
  ): Promise<StateCasesDto> {
    return this.casesService.getCasesForState(state);
  }

  @Get('/latest/:dayRange')
  @ApiOkResponse({
    description: 'Latest recorded cases for a given state',
    type: LatestGermanyCasesDTO,
  })
  async getLatestCasesForGermanyDayRange(
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
    @Param('country', CountryValidationPipe) _country: string,
  ): Promise<LatestGermanyCasesDTO> {
    return this.casesService.getLatestCasesForGermany(dayRange);
  }

  @Get('/latest/:state/:dayRange')
  @ApiOkResponse({
    description: 'Latest recorded cases for a given state and day range',
    type: LatestStateCasesDTO,
  })
  async getLatestCasesForStateDayRange(
    @Param('state', StateParamValidationPipe) state: string,
    @Param('dayRange', DayRangeValidationPipe) dayRange: number,
    @Param('country', CountryValidationPipe) _country: string,
  ) {
    return this.casesService.getLatestCasesForState(state, dayRange);
  }
}
