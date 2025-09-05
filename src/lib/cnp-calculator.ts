import { CountryData } from '@/data/countries';

export interface CNPComponents {
  criticalMass: number;       // CM = (Population/World Population * 50) + (Land Area/World Land Area * 50)
  economicStrength: number;   // ES = (Nation's GDP / World's Total GDP) * 100
  militaryStrength: number;   // MS = (Nation's Military Expenditure / World's Total Military Expenditure) * 100
  nuclearStrength: number;    // NS = (Number of Nuclear Warheads / World Total) * 100
  powerProjection: number;    // PP = Country-specific power projection factor × 100
  energySelfSufficiency: number; // ESS = min(Energy Production / Energy Consumption, 1.0)
}

export interface WorldTotals {
  population: number;          // in millions
  landArea: number;           // in km²
  gdp: number;               // in trillions USD
  militaryExpenditure: number; // in billions USD
  nuclearWarheads: number;    // total global nuclear warheads
}

export interface CountryExtendedData {
  nuclearWarheads: number;    // Number of nuclear warheads
  powerProjectionArea: number; // Area under influence in km²
  energyProduction: number;   // Energy production in TWh
  energyConsumption: number;  // Energy consumption in TWh
}

// World totals for 2025 (based on comprehensive dataset)
export const WORLD_TOTALS: WorldTotals = {
  population: 8190,           // ~8.19 billion people
  landArea: 148940000,        // ~148.94 million km² (total land area)
  gdp: 113.8,                // ~$113.8 trillion USD (global GDP estimated)
  militaryExpenditure: 2720,  // ~$2.72 trillion USD (global military spending estimated)
  nuclearWarheads: 12241,     // ~12,241 nuclear warheads globally (2025)
};

/**
 * Calculate Critical Mass component
 * CM = (Nation's Population / World Total Population) × 50 + (Nation's Land Area / World Total Land Area) × 50
 */
export function calculateCriticalMass(
  population: number,      // in millions
  landArea: number,        // in km²
  worldTotals: WorldTotals = WORLD_TOTALS
): number {
  const populationComponent = (population / worldTotals.population) * 50;
  const landAreaComponent = (landArea / worldTotals.landArea) * 50;
  return populationComponent + landAreaComponent;
}

/**
 * Calculate Economic Strength component
 * ES = (Nation's GDP / World's Total GDP) × 100
 */
export function calculateEconomicStrength(
  gdp: number,            // in trillions USD
  worldTotals: WorldTotals = WORLD_TOTALS
): number {
  return (gdp / worldTotals.gdp) * 100;
}

/**
 * Calculate Military Strength component
 * MS = (Nation's Yearly Military Expenditure / World's Total Military Expenditure) × 100
 */
export function calculateMilitaryStrength(
  militaryExpenditure: number, // in billions USD
  worldTotals: WorldTotals = WORLD_TOTALS
): number {
  return (militaryExpenditure / worldTotals.militaryExpenditure) * 100;
}

/**
 * Calculate Nuclear Strength component
 * NS = (Number of Nuclear Warheads / World Total) × 100
 */
export function calculateNuclearStrength(
  nuclearWarheads: number,
  worldTotals: WorldTotals = WORLD_TOTALS
): number {
  return (nuclearWarheads / worldTotals.nuclearWarheads) * 100;
}

/**
 * Calculate Power Projection component using specific country factors
 * PP = Country-specific power projection factor × 100
 */
export function calculatePowerProjection(
  countryId: string
): number {
  const powerProjectionFactors: Record<string, number> = {
    'usa': 0.6,
    'france': 0.1,
    'russia': 0.1,
    'india': 0.05,
    'china': 0.05,
    'turkey': 0.05,
    'iran': 0.03,
  };
  
  const factor = powerProjectionFactors[countryId] || 0;
  return factor * 100; // Convert to percentage
}

/**
 * Calculate Energy Self-Sufficiency component
 * ESS = (Nation's Energy Production / Nation's Energy Consumption) × 100
 * Capped at 1 (100%) if the nation produces more than it consumes
 */
export function calculateEnergySelfSufficiency(
  energyProduction: number,   // in TWh
  energyConsumption: number   // in TWh
): number {
  if (energyConsumption === 0) return 0;
  const ratio = energyProduction / energyConsumption;
  // Cap at 1.0 (100%) 
  return Math.min(ratio, 1.0);
}

/**
 * Calculate CNP score using the extended formula with all components
 * CNP = [(CM + ES + MS)/3 + NS + (ES + MS)/2 × PP] × ESS
 * @param country - Country data
 * @param landArea - Country's land area in km²
 * @param extendedData - Additional data for nuclear, power projection, and energy
 * @param worldTotals - World totals for calculations
 * @param includeNuclear - Whether to include nuclear strength in calculations
 * @returns CNP components and final score
 */
export function calculateExtendedCNPScore(
  country: Omit<CountryData, 'cnpScore' | 'rank'>,
  landArea: number = 0,
  extendedData: CountryExtendedData,
  worldTotals: WorldTotals = WORLD_TOTALS,
  includeNuclear: boolean = true
): { components: CNPComponents; cnpScore: number } {
  const criticalMass = calculateCriticalMass(
    country.population.total,
    landArea,
    worldTotals
  );
  
  const economicStrength = calculateEconomicStrength(
    country.economy.gdp,
    worldTotals
  );
  
  const militaryStrength = calculateMilitaryStrength(
    country.military.spending,
    worldTotals
  );

  const nuclearStrength = includeNuclear ? calculateNuclearStrength(
    extendedData.nuclearWarheads,
    worldTotals
  ) : 0;

  const powerProjection = calculatePowerProjection(
    country.id
  );

  const energySelfSufficiency = calculateEnergySelfSufficiency(
    extendedData.energyProduction,
    extendedData.energyConsumption
  );

  // Calculate CNP using the extended formula
  // CNP = [(CM + ES + MS)/3 + NS + (ES + MS)/2 × PP] × ESS
  const baseCNP = (criticalMass + economicStrength + militaryStrength) / 3;
  const powerProjectionFactor = ((economicStrength + militaryStrength) / 2) * (powerProjection / 100);
  const preEnergyCNP = baseCNP + nuclearStrength + powerProjectionFactor;
  const cnpScore = preEnergyCNP * energySelfSufficiency; 
  
  return {
    components: {
      criticalMass,
      economicStrength,
      militaryStrength,
      nuclearStrength,
      powerProjection,
      energySelfSufficiency
    },
    cnpScore: Math.round(cnpScore * 100) / 100 // Round to 2 decimal places
  };
}

/**
 * Calculate CNP score using the basic formula (without nuclear, power projection, energy)
 * CNP = (CM + ES + MS) / 3
 */
export function calculateBasicCNPScore(
  country: Omit<CountryData, 'cnpScore' | 'rank'>,
  landArea: number = 0,
  worldTotals: WorldTotals = WORLD_TOTALS
): { components: Pick<CNPComponents, 'criticalMass' | 'economicStrength' | 'militaryStrength'>; cnpScore: number } {
  const criticalMass = calculateCriticalMass(
    country.population.total,
    landArea,
    worldTotals
  );
  
  const economicStrength = calculateEconomicStrength(
    country.economy.gdp,
    worldTotals
  );
  
  const militaryStrength = calculateMilitaryStrength(
    country.military.spending,
    worldTotals
  );
  
  const cnpScore = (criticalMass + economicStrength + militaryStrength) / 3;
  
  return {
    components: {
      criticalMass,
      economicStrength,
      militaryStrength
    },
    cnpScore: Math.round(cnpScore * 100) / 100
  };
}

/**
 * Calculate CNP scores for all countries and rank them using the extended formula
 * @param countries - Array of countries with their data
 * @param landAreas - Map of country IDs to their land areas in km²
 * @param extendedDataMap - Map of country IDs to their extended data
 * @param worldTotals - World totals for calculations
 * @param useExtended - Whether to use extended formula or basic formula
 * @param includeNuclear - Whether to include nuclear strength in calculations
 * @returns Countries with calculated CNP scores and ranks
 */
export function calculateCNPRankings(
  countries: Omit<CountryData, 'cnpScore' | 'rank'>[],
  landAreas: Record<string, number>,
  extendedDataMap: Record<string, CountryExtendedData>,
  worldTotals: WorldTotals = WORLD_TOTALS,
  useExtended: boolean = false,
  includeNuclear: boolean = true
): CountryData[] {
  // Calculate CNP scores
  const countriesWithCNP = countries.map(country => {
    const landArea = landAreas[country.id] || 0;
    const extendedData = extendedDataMap[country.id] || {
      nuclearWarheads: 0,
      powerProjectionArea: 0,
      energyProduction: 0,
      energyConsumption: 1,
    };
    
    let cnpScore: number;
    
    if (useExtended) {
      const result = calculateExtendedCNPScore(country, landArea, extendedData, worldTotals, includeNuclear);
      cnpScore = result.cnpScore;
    } else {
      const result = calculateBasicCNPScore(country, landArea, worldTotals);
      cnpScore = result.cnpScore;
    }
    
    return {
      ...country,
      cnpScore,
      rank: 0, // Will be set below
    };
  });

  // Sort by CNP score (descending) and assign ranks
  const rankedCountries = countriesWithCNP
    .sort((a, b) => b.cnpScore - a.cnpScore)
    .map((country, index) => ({
      ...country,
      rank: index + 1,
    }));

  return rankedCountries;
}
