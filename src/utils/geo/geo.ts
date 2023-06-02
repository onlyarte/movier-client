import countryByRegion from './regions-to-countries.json';
import iso2ByCountryName from './country-names-to-iso2.json';

export function getCountryCode() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const countryName = (countryByRegion as Record<string, string>)[timezone];
  const iso2 = (iso2ByCountryName as Record<string, string>)[countryName];
  return iso2;
}
