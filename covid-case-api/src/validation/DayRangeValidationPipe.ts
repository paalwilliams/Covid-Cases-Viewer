import {
  Injectable,
  InternalServerErrorException,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class DayRangeValidationPipe implements PipeTransform {
  transform(value: string) {
    try {
      const parsedValue = parseInt(value);
      if (parsedValue > 365 || parsedValue <= 0) {
        throw new RangeError();
      }
      return parsedValue;
    } catch (error) {
      if (error instanceof RangeError) {
        throw new InternalServerErrorException(
          `Invalid Parameter: ${value}. Must be a number between 1 and 365.`,
        );
      }
      throw new InternalServerErrorException(
        `Invalid Parameter: ${value}. Must be a number.`,
      );
    }
  }
}
