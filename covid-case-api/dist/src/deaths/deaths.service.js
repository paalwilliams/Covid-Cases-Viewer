"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeathsService = void 0;
const common_1 = require("@nestjs/common");
const QueryClient_1 = require("../utils/QueryClient");
const dataMappers_1 = require("../utils/dataMappers");
const utils_1 = require("../utils/utils");
let DeathsService = class DeathsService {
    constructor(queryClient) {
        this.queryClient = queryClient;
    }
    async getDeathsForGermany() {
        try {
            const response = await this.queryClient.request(`/states`);
            const { data } = response.data;
            const mappedResponse = (0, dataMappers_1.germanyCasesResponseToGermanyDeathsDTO)(data);
            return mappedResponse;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async getDeathsByState(state) {
        const response = await this.queryClient.request(`/states/${state}`);
        const { data } = response.data;
        const stateName = (0, utils_1.getStateFullNameForAbbreviation)(state);
        const dataForMapper = {
            ...data[state],
            stateName,
        };
        const stateDeathsDTO = (0, dataMappers_1.casesResponseToStateDeathsDTO)(dataForMapper);
        return stateDeathsDTO;
    }
    async getLatestDeathsForState(state, dayRange) {
        const response = await this.queryClient.request(`/states/history/deaths/${dayRange}`);
        const { data } = response.data;
        const stateName = (0, utils_1.getStateFullNameForAbbreviation)(state);
        const dataForMapper = {
            ...data[state],
            stateName,
            abbreviation: state,
            dayRange: dayRange,
        };
        const mappedResponse = (0, dataMappers_1.latestDeathsResponseToLatestDeathsForStateDTO)(dataForMapper);
        return mappedResponse;
    }
    async getLatestDeathsForGermany(dayRange) {
        const response = await this.queryClient.request(`states/history/deaths/${dayRange}`);
        const { data } = response.data;
        const dataForMapper = {
            ...data,
            dayRange: dayRange,
        };
        const mappedResponse = (0, dataMappers_1.latestDeathsResponseToLatestDeathsForGermanyDTO)(dataForMapper);
        return mappedResponse;
    }
};
exports.DeathsService = DeathsService;
exports.DeathsService = DeathsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [QueryClient_1.QueryClient])
], DeathsService);
//# sourceMappingURL=deaths.service.js.map