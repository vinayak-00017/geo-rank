// Land areas for countries in km²
// Source: Updated raw data provided

export const COUNTRY_LAND_AREAS: Record<string, number> = {
  "usa": 9147420,        // United States
  "china": 9388211,      // China
  "germany": 348560,     // Germany
  "india": 2973190,      // India
  "japan": 364555,       // Japan
  "uk": 241930,          // United Kingdom
  "france": 547557,      // France
  "italy": 294140,       // Italy
  "canada": 9093510,     // Canada
  "brazil": 8358140,     // Brazil
  "russia": 17075400,    // Russia
  "spain": 499714,       // Spain
  "southkorea": 97230,   // South Korea
  "australia": 7688126,  // Australia
  "mexico": 1943950,     // Mexico
  "indonesia": 1811570,  // Indonesia
  "turkey": 769630,      // Turkey
  "poland": 306090,      // Poland
  "saudiarabia": 2149690, // Saudi Arabia
  "iran": 1628550,       // Iran
  "israel": 21640,       // Israel
  "pakistan": 770880,    // Pakistan
  "ukraine": 603549,     // Ukraine
  "northkorea": 120410,  // North Korea
};

export function getCountryLandArea(countryId: string): number {
  return COUNTRY_LAND_AREAS[countryId] || 0;
}

export function getAllLandAreas(): Record<string, number> {
  return COUNTRY_LAND_AREAS;
}

// Total world land area for reference: ~148.94 million km²
export const WORLD_LAND_AREA = 148940000;
