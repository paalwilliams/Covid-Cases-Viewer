import { NotFoundException } from '@nestjs/common';
import { states } from 'src/types';

export const getStateFullNameForAbbreviation = (stateAbbreviation: string) => {
  const [key] = Object.entries(states).find(([_, value]) => {
    return value === stateAbbreviation;
  });
  return key;
};

export const mapStateNameOrAbbreviationToAbbreviation = (
  stateNameOrAbbreviation: string,
) => {
  const uppercaseStateNameOrAbbreviation =
    stateNameOrAbbreviation.toUpperCase();

  try {
    const [_, value] = Object.entries(states).find(([k, v]) => {
      return (
        v.toUpperCase() === uppercaseStateNameOrAbbreviation ||
        k.toUpperCase() === uppercaseStateNameOrAbbreviation
      );
    });
    return value;
  } catch (error) {
    throw new NotFoundException(
      `Error: Configuration for state: ${stateNameOrAbbreviation} does not exist`,
    );
  }
};

export const isConfiguredCountry = (country: string): boolean => {
  const configuredCountries = ['germany', 'deutschland'];
  return configuredCountries
    .map((countryName) => countryName.toUpperCase())
    .includes(country);
};
