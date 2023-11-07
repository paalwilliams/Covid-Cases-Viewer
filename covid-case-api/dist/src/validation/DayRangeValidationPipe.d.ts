import { PipeTransform } from '@nestjs/common';
export declare class DayRangeValidationPipe implements PipeTransform {
    transform(value: string): number;
}
