// Extended data for countries including nuclear, power projection, and energy data
// Sources: Updated raw data provided

export interface CountryExtendedData {
  nuclearWarheads: number;    // Number of nuclear warheads
  powerProjectionArea: number; // Area under influence in km² (military bases, allies, economic zones)
  energyProduction: number;   // Energy production in TWh
  energyConsumption: number;  // Energy consumption in TWh
}

export const COUNTRY_EXTENDED_DATA: Record<string, CountryExtendedData> = {
  "usa": {
    nuclearWarheads: 3700,     // 3,700 warheads (2025 data)
    powerProjectionArea: 25000000, // ~25 million km² (NATO allies, military bases, economic influence)
    energyProduction: 4401,    // Estimated from ratio
    energyConsumption: 4401,   // 1.0 ratio
  },
  "china": {
    nuclearWarheads: 600,      // 600 warheads (2025 data)
    powerProjectionArea: 15000000, // ~15 million km² (BRI countries, South China Sea, allies)
    energyProduction: 8534,    // Estimated from ratio
    energyConsumption: 9276,   // 0.92 ratio
  },
  "germany": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 2000000, // ~2 million km² (EU leadership, economic influence)
    energyProduction: 612,     // Estimated from ratio
    energyConsumption: 688,    // 0.89 ratio
  },
  "india": {
    nuclearWarheads: 180,      // 180 warheads (2025 data)
    powerProjectionArea: 5000000, // ~5 million km² (South Asian influence, Indian Ocean)
    energyProduction: 1844,    // Estimated from ratio
    energyConsumption: 2837,   // 0.65 ratio
  },
  "japan": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 3000000, // ~3 million km² (Pacific allies, economic influence)
    energyProduction: 1029,    // Estimated from ratio
    energyConsumption: 4677,   // 0.22 ratio
  },
  "uk": {
    nuclearWarheads: 225,      // 225 warheads (2025 data)
    powerProjectionArea: 4000000, // ~4 million km² (Commonwealth influence, overseas territories)
    energyProduction: 318,     // Estimated from ratio
    energyConsumption: 418,    // 0.76 ratio
  },
  "france": {
    nuclearWarheads: 290,      // 290 warheads (2025 data)
    powerProjectionArea: 3500000, // ~3.5 million km² (African influence, EU leadership, overseas territories)
    energyProduction: 529,     // Estimated from ratio
    energyConsumption: 430,    // 1.23 ratio
  },
  "italy": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 1000000, // ~1 million km² (EU member, Mediterranean influence)
    energyProduction: 294,     // Estimated from ratio
    energyConsumption: 525,    // 0.56 ratio
  },
  "canada": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 12000000, // ~12 million km² (NATO member, Arctic influence)
    energyProduction: 650,     // Estimated from ratio
    energyConsumption: 399,    // 1.63 ratio
  },
  "brazil": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 12000000, // ~12 million km² (South American leadership, regional influence)
    energyProduction: 650,     // Estimated from ratio
    energyConsumption: 613,    // 1.06 ratio
  },
  "russia": {
    nuclearWarheads: 4309,     // 4,309 warheads (2025 data)
    powerProjectionArea: 20000000, // ~20 million km² (CSTO allies, former Soviet sphere)
    energyProduction: 1699,    // Estimated from ratio
    energyConsumption: 776,    // 2.19 ratio
  },
  "spain": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 1500000, // ~1.5 million km² (EU member, Latin American ties)
    energyProduction: 280,     // Estimated from ratio
    energyConsumption: 384,    // 0.73 ratio
  },
  "southkorea": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 500000, // ~500,000 km² (limited regional influence)
    energyProduction: 676,     // Estimated from ratio
    energyConsumption: 3219,   // 0.21 ratio
  },
  "australia": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 8000000, // ~8 million km² (Pacific influence, Five Eyes)
    energyProduction: 480,     // Estimated from ratio
    energyConsumption: 139,    // 3.45 ratio
  },
  "mexico": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 2000000, // ~2 million km² (Regional influence in Latin America)
    energyProduction: 320,     // Estimated from ratio
    energyConsumption: 281,    // 1.14 ratio
  },
  "indonesia": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 3000000, // ~3 million km² (ASEAN leadership, maritime influence)
    energyProduction: 280,     // Estimated from ratio
    energyConsumption: 181,    // 1.55 ratio
  },
  "turkey": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 1500000, // ~1.5 million km² (NATO member, regional influence)
    energyProduction: 95,      // Estimated from ratio
    energyConsumption: 317,    // 0.3 ratio
  },
  "poland": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 800000, // ~800,000 km² (EU/NATO member)
    energyProduction: 165,     // Estimated from ratio
    energyConsumption: 145,    // 1.14 ratio
  },
  "saudiarabia": {
    nuclearWarheads: 0,        // No nuclear weapons
    powerProjectionArea: 4000000, // ~4 million km² (Gulf leadership, oil influence)
    energyProduction: 380,     // Estimated from ratio
    energyConsumption: 131,    // 2.89 ratio
  },
  "iran": {
    nuclearWarheads: 0,        // No nuclear weapons (nuclear program)
    powerProjectionArea: 3000000, // ~3 million km² (Regional influence, proxy networks)
    energyProduction: 350,     // Estimated from ratio
    energyConsumption: 174,    // 2.01 ratio
  },
  "israel": {
    nuclearWarheads: 90,       // 90 warheads (2025 data)
    powerProjectionArea: 200000, // ~200,000 km² (Limited but strategic influence)
    energyProduction: 70,      // Estimated from ratio
    energyConsumption: 194,    // 0.36 ratio
  },
  "pakistan": {
    nuclearWarheads: 170,      // 170 warheads (2025 data)
    powerProjectionArea: 1000000, // ~1 million km² (Regional South Asian influence)
    energyProduction: 140,     // Estimated from ratio
    energyConsumption: 194,    // 0.72 ratio
  },
  "ukraine": {
    nuclearWarheads: 0,        // No nuclear weapons (gave up Soviet arsenal)
    powerProjectionArea: 500000, // ~500,000 km² (Limited due to war)
    energyProduction: 160,     // Estimated from ratio
    energyConsumption: 88,     // 1.81 ratio
  },
  "northkorea": {
    nuclearWarheads: 50,       // 50 warheads (2025 data)
    powerProjectionArea: 150000, // ~150,000 km² (Very limited influence)
    energyProduction: 25,      // Estimated from ratio
    energyConsumption: 37,     // 0.67 ratio
  },
};

export function getCountryExtendedData(countryId: string): CountryExtendedData {
  return COUNTRY_EXTENDED_DATA[countryId] || {
    nuclearWarheads: 0,
    powerProjectionArea: 0,
    energyProduction: 0,
    energyConsumption: 1, // Avoid division by zero
  };
}

export function getAllExtendedData(): Record<string, CountryExtendedData> {
  return COUNTRY_EXTENDED_DATA;
}

// Global totals for reference
export const GLOBAL_NUCLEAR_WARHEADS = 13080; // Total global nuclear warheads (2024)
export const GLOBAL_ENERGY_PRODUCTION = 29000; // ~29,000 TWh globally (approximate)
