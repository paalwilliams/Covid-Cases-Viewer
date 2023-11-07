import { PipeTransform } from '@nestjs/common';
export declare class StateParamValidationPipe implements PipeTransform {
    transform(value: string): string;
}
