import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GermanyDeathsDTO } from 'src/dto/GermanyDeathsDTO';
import { LatestGermanyDeathsDTO } from 'src/dto/LatestGermanyDeathsDTO';
import { LatestStateDeathsDTO } from 'src/dto/LatestStateDeathsDTO';
import { StateDeathsDTO } from 'src/dto/StateDeathsDTO';
import { QueryClient } from 'src/utils/QueryClient';
import {
  casesResponseToStateDeathsDTO,
  germanyCasesResponseToGermanyDeathsDTO,
  latestDeathsResponseToLatestDeathsForGermanyDTO,
  latestDeathsResponseToLatestDeathsForStateDTO,
} from 'src/utils/dataMappers';
import { getStateFullNameForAbbreviation } from 'src/utils/utils';

@Injectable()
export class DeathsService {
  private queryClient: QueryClient;
  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  public async getDeathsForGermany(): Promise<GermanyDeathsDTO> {
    try {
      const response = await this.queryClient.request(`/states`);
      const { data } = response.data;
      const mappedResponse = germanyCasesResponseToGermanyDeathsDTO(data);
      return mappedResponse;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  public async getDeathsByState(state: string): Promise<StateDeathsDTO> {
    const response = await this.queryClient.request(`/states/${state}`);

    const { data } = response.data;
    const stateName = getStateFullNameForAbbreviation(state);
    const dataForMapper = {
      ...data[state],
      stateName,
    };
    const stateDeathsDTO = casesResponseToStateDeathsDTO(dataForMapper);
    return stateDeathsDTO;
  }

  public async getLatestDeathsForState(
    state: string,
    dayRange: number,
  ): Promise<LatestStateDeathsDTO> {
    const response = await this.queryClient.request(
      `/states/history/deaths/${dayRange}`,
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
      latestDeathsResponseToLatestDeathsForStateDTO(dataForMapper);
    return mappedResponse;
  }

  public async getLatestDeathsForGermany(
    dayRange: number,
  ): Promise<LatestGermanyDeathsDTO> {
    const response = await this.queryClient.request(
      `states/history/deaths/${dayRange}`,
    );
    const { data } = response.data;
    const dataForMapper = {
      ...data,
      dayRange: dayRange,
    };

    const mappedResponse =
      latestDeathsResponseToLatestDeathsForGermanyDTO(dataForMapper);
    return mappedResponse;
  }
}
