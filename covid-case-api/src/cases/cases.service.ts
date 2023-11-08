import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GermanyCasesDTO } from 'src/dto/GermanyCasesDTO';
import { LatestGermanyCasesDTO } from 'src/dto/LatestGermanyCasesDTO';
import { LatestStateCasesDTO } from 'src/dto/LatestStateCasesDTO';
import { StateCasesDto } from 'src/dto/StateCasesDTO';
import { QueryClient } from 'src/utils/QueryClient';
import {
  casesResponseToStateCasesDTO,
  casesResponseToGermanyCasesDTO,
  latestCasesResponseToLatestCasesForGermanyDTO,
  latestCasesResponseToLatestCasesForStateDTO,
} from 'src/utils/dataMappers';
import { getStateFullNameForAbbreviation } from 'src/utils/utils';

@Injectable()
export class CasesService {
  private queryClient: QueryClient;
  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }
  public async getCasesForState(state: string): Promise<StateCasesDto> {
    try {
      const response = await this.queryClient.request(`/states/${state}`);
      const { data } = response.data;
      const stateName = getStateFullNameForAbbreviation(state);
      const dataForMapper = {
        ...data[state],
        stateName,
      };
      const mappedResponse = casesResponseToStateCasesDTO(dataForMapper);
      return mappedResponse;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  public async getCasesForGermany(): Promise<GermanyCasesDTO> {
    try {
      const response = await this.queryClient.request(`/states`);
      const { data } = response.data;
      const mappedResponse = casesResponseToGermanyCasesDTO(data);
      return mappedResponse;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  public async getLatestCasesForGermany(
    dayRange: number,
  ): Promise<LatestGermanyCasesDTO> {
    const response = await this.queryClient.request(
      `states/history/cases/${dayRange}`,
    );
    const { data } = response.data;
    const dataForMapper = {
      ...data,
      dayRange: dayRange,
    };

    const mappedResponse = latestCasesResponseToLatestCasesForGermanyDTO(
      dataForMapper,
      dayRange,
    );
    return mappedResponse;
  }

  public async getLatestCasesForState(
    state: string,
    dayRange: number,
  ): Promise<LatestStateCasesDTO> {
    const response = await this.queryClient.request(
      `states/history/cases/${dayRange}`,
    );
    const { data } = response.data;
    const stateName = getStateFullNameForAbbreviation(state);
    const dataForMapper = {
      ...data[state],
      stateName,
      abbreviation: state,
      dayRange: dayRange,
    };
    const mappedResponse =
      latestCasesResponseToLatestCasesForStateDTO(dataForMapper);
    return mappedResponse;
  }
}
