import { PipeTransform } from '@nestjs/common';
export declare class CountryValidationPipe implements PipeTransform {
    transform(value: string): string;
}
