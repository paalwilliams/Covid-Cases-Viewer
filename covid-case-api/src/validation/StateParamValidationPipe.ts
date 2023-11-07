import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { mapStateNameOrAbbreviationToAbbreviation } from 'src/utils/utils';

@Injectable()
export class StateParamValidationPipe implements PipeTransform {
  transform(value: string) {
    const transformedValue = value.toUpperCase();
    const foundAbbreviation =
      mapStateNameOrAbbreviationToAbbreviation(transformedValue);
    if (!foundAbbreviation) {
      throw new NotFoundException(
        `Error: configuration for state "${value}" does not exist.`,
      );
    }
    return foundAbbreviation;
  }
}
