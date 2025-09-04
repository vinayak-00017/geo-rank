export interface CountryData {
  id: string;
  name: string;
  code: string;
  flag: string;
  cnpScore: number;
  rank: number;
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
    cnpScore: 94.2,
    rank: 1,
    economy: {
      gdp: 26.9,
      gdpGrowth: 2.1,
      score: 95
    },
    military: {
      spending: 801,
      spendingPercent: 3.5,
      score: 98
    },
    population: {
      total: 331,
      growth: 0.4,
      score: 85
    },
    technology: {
      rdSpending: 679,
      rdPercent: 3.5,
      score: 96
    },
    resources: {
      energyProduction: 4401,
      energyScore: 92,
      score: 92
    }
  },
  {
    id: "china",
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    cnpScore: 89.1,
    rank: 2,
    economy: {
      gdp: 17.7,
      gdpGrowth: 5.2,
      score: 88
    },
    military: {
      spending: 293,
      spendingPercent: 1.7,
      score: 85
    },
    population: {
      total: 1412,
      growth: 0.2,
      score: 98
    },
    technology: {
      rdSpending: 554,
      rdPercent: 2.4,
      score: 90
    },
    resources: {
      energyProduction: 8534,
      energyScore: 98,
      score: 95
    }
  },
  {
    id: "russia",
    name: "Russia",
    code: "RU",
    flag: "🇷🇺",
    cnpScore: 73.8,
    rank: 3,
    economy: {
      gdp: 2.2,
      gdpGrowth: -2.1,
      score: 45
    },
    military: {
      spending: 84,
      spendingPercent: 4.3,
      score: 92
    },
    population: {
      total: 144,
      growth: -0.2,
      score: 65
    },
    technology: {
      rdSpending: 40,
      rdPercent: 1.1,
      score: 70
    },
    resources: {
      energyProduction: 1181,
      energyScore: 95,
      score: 96
    }
  },
  {
    id: "india",
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    cnpScore: 71.5,
    rank: 4,
    economy: {
      gdp: 3.7,
      gdpGrowth: 6.1,
      score: 72
    },
    military: {
      spending: 81,
      spendingPercent: 2.9,
      score: 78
    },
    population: {
      total: 1408,
      growth: 0.7,
      score: 96
    },
    technology: {
      rdSpending: 66,
      rdPercent: 0.7,
      score: 65
    },
    resources: {
      energyProduction: 1708,
      energyScore: 75,
      score: 70
    }
  },
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    cnpScore: 68.9,
    rank: 5,
    economy: {
      gdp: 4.3,
      gdpGrowth: -0.3,
      score: 78
    },
    military: {
      spending: 56,
      spendingPercent: 1.4,
      score: 65
    },
    population: {
      total: 84,
      growth: 0.1,
      score: 58
    },
    technology: {
      rdSpending: 136,
      rdPercent: 3.1,
      score: 88
    },
    resources: {
      energyProduction: 612,
      energyScore: 45,
      score: 68
    }
  },
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    cnpScore: 67.2,
    rank: 6,
    economy: {
      gdp: 4.9,
      gdpGrowth: 1.0,
      score: 82
    },
    military: {
      spending: 54,
      spendingPercent: 1.4,
      score: 62
    },
    population: {
      total: 125,
      growth: -0.5,
      score: 68
    },
    technology: {
      rdSpending: 170,
      rdPercent: 3.3,
      score: 92
    },
    resources: {
      energyProduction: 1065,
      energyScore: 60,
      score: 65
    }
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    cnpScore: 64.7,
    rank: 7,
    economy: {
      gdp: 3.1,
      gdpGrowth: 0.5,
      score: 68
    },
    military: {
      spending: 59,
      spendingPercent: 2.3,
      score: 78
    },
    population: {
      total: 67,
      growth: 0.5,
      score: 52
    },
    technology: {
      rdSpending: 53,
      rdPercent: 1.7,
      score: 82
    },
    resources: {
      energyProduction: 323,
      energyScore: 35,
      score: 60
    }
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    cnpScore: 63.1,
    rank: 8,
    economy: {
      gdp: 2.9,
      gdpGrowth: 0.7,
      score: 65
    },
    military: {
      spending: 53,
      spendingPercent: 2.0,
      score: 72
    },
    population: {
      total: 68,
      growth: 0.3,
      score: 54
    },
    technology: {
      rdSpending: 65,
      rdPercent: 2.2,
      score: 78
    },
    resources: {
      energyProduction: 537,
      energyScore: 42,
      score: 62
    }
  },
  {
    id: "brazil",
    name: "Brazil",
    code: "BR",
    flag: "🇧🇷",
    cnpScore: 58.3,
    rank: 9,
    economy: {
      gdp: 2.1,
      gdpGrowth: 2.9,
      score: 55
    },
    military: {
      spending: 19,
      spendingPercent: 1.4,
      score: 45
    },
    population: {
      total: 215,
      growth: 0.7,
      score: 82
    },
    technology: {
      rdSpending: 42,
      rdPercent: 1.2,
      score: 58
    },
    resources: {
      energyProduction: 601,
      energyScore: 78,
      score: 75
    }
  },
  {
    id: "italy",
    name: "Italy",
    code: "IT",
    flag: "🇮🇹",
    cnpScore: 56.8,
    rank: 10,
    economy: {
      gdp: 2.1,
      gdpGrowth: 3.7,
      score: 58
    },
    military: {
      spending: 29,
      spendingPercent: 1.5,
      score: 52
    },
    population: {
      total: 59,
      growth: -0.3,
      score: 48
    },
    technology: {
      rdSpending: 37,
      rdPercent: 1.5,
      score: 65
    },
    resources: {
      energyProduction: 294,
      energyScore: 32,
      score: 55
    }
  }
];

export const getCountryById = (id: string): CountryData | undefined => {
  return countries.find(country => country.id === id);
};

export const getCountriesByRank = (): CountryData[] => {
  return [...countries].sort((a, b) => a.rank - b.rank);
};