import axios, { AxiosResponse } from 'axios';
type FetchArguments = Parameters<typeof axios>;
export declare class QueryClient {
    private _fetch;
    constructor();
    request(url: string, init?: FetchArguments[1]): Promise<AxiosResponse>;
}
export {};
