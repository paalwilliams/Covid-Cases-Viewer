import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { isConfiguredCountry } from 'src/utils/utils';

@Injectable()
export class CountryValidationPipe implements PipeTransform {
  transform(value: string) {
    const transformedValue = value.toUpperCase();
    if (!isConfiguredCountry(transformedValue)) {
      throw new NotFoundException(
        `Error: configuration for country "${value}" does not exist.`,
      );
    }
    return value;
  }
}
