import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { Environment } from './Environment';
import { Injectable } from '@nestjs/common';

type FetchArguments = Parameters<typeof axios>;

@Injectable()
export class QueryClient {
  private _fetch: AxiosStatic;

  constructor() {
    this._fetch = axios;
    this._fetch.defaults.baseURL = new Environment().COVID_API_ROOT;
  }

  public async request(
    url: string,
    init?: FetchArguments[1],
  ): Promise<AxiosResponse> {
    return this._fetch(`${url}`, init);
  }
}
