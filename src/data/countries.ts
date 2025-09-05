import { calculateCNPRankings } from '@/lib/cnp-calculator';
import { getAllLandAreas } from '@/data/land-areas';
import { getAllExtendedData } from '@/data/extended-data';

export interface CountryData {
  id: string;
  name: string;
  code: string;
  flag: string;
  cnpScore?: number; // Optional - will be calculated dynamically
  rank?: number; // Optional - will be calculated dynamically
  economy: {
    gdp: number; // in trillions USD
    gdpGrowth: number; // percentage
    score: number;
  };
  military: {
    spending: number; // in billions USD
    spendingPercent: number; // % of GDP
    score: number;
  };
  population: {
    total: number; // in millions
    growth: number; // percentage
    score: number;
  };
  technology: {
    rdSpending: number; // in billions USD
    rdPercent: number; // % of GDP
    score: number;
  };
  resources: {
    energyProduction: number; // in TWh
    energyScore: number;
    score: number;
  };
}

export const countries: CountryData[] = [
  {
    id: "usa",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    economy: {
      gdp: 30.51,
      gdpGrowth: 2.5,
      score: 95
    },
    military: {
      spending: 997,
      spendingPercent: 3.3,
      score: 98
    },
    population: {
      total: 347.276,
      growth: 0.5,
      score: 85
    },
    technology: {
      rdSpending: 725,
      rdPercent: 3.5,
      score: 96
    },
    resources: {
      energyProduction: 4589,
      energyScore: 92,
      score: 92
    }
  },
  {
    id: "china",
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    economy: {
      gdp: 19.3,
      gdpGrowth: 4.8,
      score: 88
    },
    military: {
      spending: 325,
      spendingPercent: 1.7,
      score: 85
    },
    population: {
      total: 1418.2,
      growth: 0.1,
      score: 98
    },
    technology: {
      rdSpending: 580,
      rdPercent: 2.6,
      score: 90
    },
    resources: {
      energyProduction: 8920,
      energyScore: 98,
      score: 95
    }
  },
  {
    id: "russia",
    name: "Russia",
    code: "RU",
    flag: "🇷🇺",
    economy: {
      gdp: 2.24,
      gdpGrowth: 3.6,
      score: 45
    },
    military: {
      spending: 109,
      spendingPercent: 4.9,
      score: 92
    },
    population: {
      total: 144.4,
      growth: -0.3,
      score: 65
    },
    technology: {
      rdSpending: 42,
      rdPercent: 1.2,
      score: 72
    },
    resources: {
      energyProduction: 1756,
      energyScore: 95,
      score: 88
    }
  },
  {
    id: "india",
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    economy: {
      gdp: 4.18,
      gdpGrowth: 6.5,
      score: 82
    },
    military: {
      spending: 83.6,
      spendingPercent: 2.0,
      score: 78
    },
    population: {
      total: 1441.7,
      growth: 0.8,
      score: 96
    },
    technology: {
      rdSpending: 80,
      rdPercent: 0.7,
      score: 65
    },
    resources: {
      energyProduction: 1820,
      energyScore: 75,
      score: 70
    }
  },
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    economy: {
      gdp: 4.62,
      gdpGrowth: 0.2,
      score: 78
    },
    military: {
      spending: 66.8,
      spendingPercent: 1.4,
      score: 65
    },
    population: {
      total: 83.2,
      growth: -0.1,
      score: 58
    },
    technology: {
      rdSpending: 142,
      rdPercent: 3.1,
      score: 88
    },
    resources: {
      energyProduction: 630,
      energyScore: 45,
      score: 55
    }
  },
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    economy: {
      gdp: 4.11,
      gdpGrowth: 1.8,
      score: 82
    },
    military: {
      spending: 50.2,
      spendingPercent: 1.2,
      score: 62
    },
    population: {
      total: 123.3,
      growth: -0.7,
      score: 68
    },
    technology: {
      rdSpending: 169,
      rdPercent: 3.3,
      score: 92
    },
    resources: {
      energyProduction: 1089,
      energyScore: 60,
      score: 65
    }
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    economy: {
      gdp: 3.59,
      gdpGrowth: 1.1,
      score: 68
    },
    military: {
      spending: 74.9,
      spendingPercent: 2.1,
      score: 78
    },
    population: {
      total: 67.8,
      growth: 0.3,
      score: 52
    },
    technology: {
      rdSpending: 61,
      rdPercent: 1.7,
      score: 82
    },
    resources: {
      energyProduction: 339,
      energyScore: 35,
      score: 60
    }
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    economy: {
      gdp: 3.13,
      gdpGrowth: 1.3,
      score: 65
    },
    military: {
      spending: 64.6,
      spendingPercent: 2.1,
      score: 72
    },
    population: {
      total: 68.5,
      growth: 0.2,
      score: 54
    },
    technology: {
      rdSpending: 69,
      rdPercent: 2.2,
      score: 78
    },
    resources: {
      energyProduction: 563,
      energyScore: 42,
      score: 62
    }
  },
  {
    id: "brazil",
    name: "Brazil",
    code: "BR",
    flag: "🇧🇷",
    economy: {
      gdp: 2.33,
      gdpGrowth: 3.2,
      score: 55
    },
    military: {
      spending: 18.9,
      spendingPercent: 0.8,
      score: 45
    },
    population: {
      total: 216.4,
      growth: 0.6,
      score: 82
    },
    technology: {
      rdSpending: 46,
      rdPercent: 1.2,
      score: 58
    },
    resources: {
      energyProduction: 629,
      energyScore: 78,
      score: 75
    }
  },
  {
    id: "italy",
    name: "Italy",
    code: "IT",
    flag: "🇮🇹",
    economy: {
      gdp: 2.41,
      gdpGrowth: 1.0,
      score: 58
    },
    military: {
      spending: 35.5,
      spendingPercent: 1.5,
      score: 52
    },
    population: {
      total: 58.8,
      growth: -0.4,
      score: 48
    },
    technology: {
      rdSpending: 36,
      rdPercent: 1.5,
      score: 65
    },
    resources: {
      energyProduction: 304,
      energyScore: 32,
      score: 55
    }
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    economy: {
      gdp: 2.24,
      gdpGrowth: 1.2,
      score: 55
    },
    military: {
      spending: 27.2,
      spendingPercent: 1.2,
      score: 48
    },
    population: {
      total: 39.7,
      growth: 0.9,
      score: 42
    },
    technology: {
      rdSpending: 35,
      rdPercent: 1.6,
      score: 68
    },
    resources: {
      energyProduction: 654,
      energyScore: 85,
      score: 78
    }
  },
  {
    id: "southkorea",
    name: "South Korea",
    code: "KR",
    flag: "🇰🇷",
    economy: {
      gdp: 2.08,
      gdpGrowth: 3.1,
      score: 52
    },
    military: {
      spending: 47.7,
      spendingPercent: 2.3,
      score: 65
    },
    population: {
      total: 51.7,
      growth: 0.1,
      score: 48
    },
    technology: {
      rdSpending: 96,
      rdPercent: 4.6,
      score: 95
    },
    resources: {
      energyProduction: 567,
      energyScore: 38,
      score: 52
    }
  },
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    economy: {
      gdp: 1.75,
      gdpGrowth: 2.0,
      score: 48
    },
    military: {
      spending: 32.3,
      spendingPercent: 1.8,
      score: 55
    },
    population: {
      total: 26.6,
      growth: 1.0,
      score: 38
    },
    technology: {
      rdSpending: 28,
      rdPercent: 1.6,
      score: 65
    },
    resources: {
      energyProduction: 603,
      energyScore: 88,
      score: 82
    }
  },
  {
    id: "spain",
    name: "Spain",
    code: "ES",
    flag: "🇪🇸",
    economy: {
      gdp: 1.69,
      gdpGrowth: 2.5,
      score: 46
    },
    military: {
      spending: 22.4,
      spendingPercent: 1.3,
      score: 42
    },
    population: {
      total: 47.8,
      growth: 0.1,
      score: 45
    },
    technology: {
      rdSpending: 22,
      rdPercent: 1.3,
      score: 58
    },
    resources: {
      energyProduction: 293,
      energyScore: 35,
      score: 48
    }
  },
  {
    id: "turkey",
    name: "Turkey",
    code: "TR",
    flag: "🇹🇷",
    economy: {
      gdp: 0.82,
      gdpGrowth: 5.0,
      score: 38
    },
    military: {
      spending: 10.6,
      spendingPercent: 1.3,
      score: 35
    },
    population: {
      total: 85.8,
      growth: 0.9,
      score: 62
    },
    technology: {
      rdSpending: 12,
      rdPercent: 1.5,
      score: 52
    },
    resources: {
      energyProduction: 167,
      energyScore: 25,
      score: 42
    }
  },
  {
    id: "netherlands",
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    economy: {
      gdp: 1.01,
      gdpGrowth: 1.1,
      score: 42
    },
    military: {
      spending: 20.5,
      spendingPercent: 2.0,
      score: 45
    },
    population: {
      total: 17.6,
      growth: 0.3,
      score: 32
    },
    technology: {
      rdSpending: 21,
      rdPercent: 2.1,
      score: 72
    },
    resources: {
      energyProduction: 110,
      energyScore: 22,
      score: 45
    }
  },
  {
    id: "saudiarabia",
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    economy: {
      gdp: 0.83,
      gdpGrowth: 8.7,
      score: 45
    },
    military: {
      spending: 75.0,
      spendingPercent: 9.0,
      score: 82
    },
    population: {
      total: 36.4,
      growth: 1.8,
      score: 42
    },
    technology: {
      rdSpending: 4,
      rdPercent: 0.5,
      score: 35
    },
    resources: {
      energyProduction: 387,
      energyScore: 78,
      score: 68
    }
  },
  {
    id: "israel",
    name: "Israel",
    code: "IL",
    flag: "🇮🇱",
    economy: {
      gdp: 0.54,
      gdpGrowth: 2.0,
      score: 35
    },
    military: {
      spending: 27.5,
      spendingPercent: 5.1,
      score: 75
    },
    population: {
      total: 9.9,
      growth: 1.6,
      score: 28
    },
    technology: {
      rdSpending: 25,
      rdPercent: 4.6,
      score: 88
    },
    resources: {
      energyProduction: 70,
      energyScore: 18,
      score: 38
    }
  },
  {
    id: "pakistan",
    name: "Pakistan",
    code: "PK",
    flag: "🇵🇰",
    economy: {
      gdp: 0.35,
      gdpGrowth: 2.4,
      score: 28
    },
    military: {
      spending: 4.3,
      spendingPercent: 1.2,
      score: 25
    },
    population: {
      total: 241.5,
      growth: 2.0,
      score: 85
    },
    technology: {
      rdSpending: 2,
      rdPercent: 0.6,
      score: 32
    },
    resources: {
      energyProduction: 138,
      energyScore: 32,
      score: 45
    }
  },
  {
    id: "northkorea",
    name: "North Korea",
    code: "KP",
    flag: "🇰🇵",
    economy: {
      gdp: 0.02,
      gdpGrowth: -1.0,
      score: 15
    },
    military: {
      spending: 0.7,
      spendingPercent: 3.5,
      score: 45
    },
    population: {
      total: 26.2,
      growth: 0.4,
      score: 38
    },
    technology: {
      rdSpending: 0.1,
      rdPercent: 0.5,
      score: 28
    },
    resources: {
      energyProduction: 25,
      energyScore: 15,
      score: 32
    }
  },
  {
    id: "iran",
    name: "Iran",
    code: "IR",
    flag: "🇮🇷",
    economy: {
      gdp: 0.23,
      gdpGrowth: 3.0,
      score: 22
    },
    military: {
      spending: 6.8,
      spendingPercent: 3.0,
      score: 38
    },
    population: {
      total: 86.8,
      growth: 0.7,
      score: 62
    },
    technology: {
      rdSpending: 1.5,
      rdPercent: 0.7,
      score: 35
    },
    resources: {
      energyProduction: 358,
      energyScore: 68,
      score: 58
    }
  },
  {
    id: "egypt",
    name: "Egypt",
    code: "EG",
    flag: "🇪🇬",
    economy: {
      gdp: 0.47,
      gdpGrowth: 3.8,
      score: 32
    },
    military: {
      spending: 4.8,
      spendingPercent: 1.0,
      score: 28
    },
    population: {
      total: 112.7,
      growth: 1.9,
      score: 72
    },
    technology: {
      rdSpending: 3,
      rdPercent: 0.6,
      score: 32
    },
    resources: {
      energyProduction: 100,
      energyScore: 22,
      score: 38
    }
  },
  {
    id: "poland",
    name: "Poland",
    code: "PL",
    flag: "🇵🇱",
    economy: {
      gdp: 0.81,
      gdpGrowth: 2.9,
      score: 38
    },
    military: {
      spending: 24.4,
      spendingPercent: 3.0,
      score: 52
    },
    population: {
      total: 37.6,
      growth: -0.2,
      score: 42
    },
    technology: {
      rdSpending: 11,
      rdPercent: 1.4,
      score: 55
    },
    resources: {
      energyProduction: 170,
      energyScore: 28,
      score: 42
    }
  },
  {
    id: "ukraine",
    name: "Ukraine",
    code: "UA",
    flag: "🇺🇦",
    economy: {
      gdp: 0.20,
      gdpGrowth: -29.1,
      score: 18
    },
    military: {
      spending: 44.0,
      spendingPercent: 22.0,
      score: 85
    },
    population: {
      total: 37.8,
      growth: -7.5,
      score: 42
    },
    technology: {
      rdSpending: 1.5,
      rdPercent: 0.8,
      score: 38
    },
    resources: {
      energyProduction: 59,
      energyScore: 18,
      score: 35
    }
  }
];

export const getCountryById = (id: string): CountryData | undefined => {
  const countriesWithCNP = getCountriesWithCalculatedCNP();
  return countriesWithCNP.find(country => country.id === id);
};

// Get base country data without CNP scores for calculation
export const getBaseCountries = (): Omit<CountryData, 'cnpScore' | 'rank'>[] => {
  return countries.map(({ cnpScore, rank, ...baseData }) => baseData);
};

// Get countries with calculated CNP scores (extended formula - default)
export const getCountriesWithCalculatedCNP = (): CountryData[] => {
  const baseCountries = getBaseCountries();
  const landAreas = getAllLandAreas();
  const extendedData = getAllExtendedData();
  
  return calculateCNPRankings(baseCountries, landAreas, extendedData, undefined, true);
};

// Get countries with calculated CNP scores with nuclear toggle option
export const getCountriesWithCNP = (includeNuclear: boolean = true): CountryData[] => {
  const baseCountries = getBaseCountries();
  const landAreas = getAllLandAreas();
  const extendedData = getAllExtendedData();
  
  return calculateCNPRankings(baseCountries, landAreas, extendedData, undefined, true, includeNuclear);
};

