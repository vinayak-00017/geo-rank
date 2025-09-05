import { Navigation } from "@/components/ui/navigation";
import { CountryCard } from "@/components/country-card";
import { getCountriesWithCNP } from "@/data/countries";
import { NuclearToggle } from "@/components/nuclear-toggle";
import { Search, Filter, Crown, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Rankings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [includeNuclear, setIncludeNuclear] = useState(true);
  const countries = getCountriesWithCNP(includeNuclear);
  
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const topCountry = countries[0];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
         
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Composite National Power
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyzing and ranking nations based on comprehensive power metrics across economy, military, technology, and resources.
          </p>
        </div>

        {/* Current Leader Highlight */}
        {topCountry && (
          <div className="mb-8 p-6 rounded-xl bg-gradient-primary border border-primary/20 shadow-glow animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Crown className="w-6 h-6 text-primary-foreground" />
                <h2 className="text-xl font-bold text-primary-foreground">
                  Global Leader
                </h2>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Most Powerful Nation</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{topCountry.flag}</span>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">
                  {topCountry.name}
                </h3>
                <p className="text-primary-foreground/80">
                  CNP Score: {topCountry.cnpScore.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/80 border-border/50"
            />
          </div>
          <NuclearToggle 
            includeNuclear={includeNuclear} 
            onToggle={setIncludeNuclear} 
          />
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        </div>

        {/* Rankings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredCountries.map((country, index) => (
            <div
              key={country.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <CountryCard country={country} showRank={true} />
            </div>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No countries found matching "{searchTerm}"</p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <div className="text-2xl font-bold text-primary">
              {countries.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Countries Tracked
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <div className="text-2xl font-bold text-accent">
              5
            </div>
            <div className="text-sm text-muted-foreground">
              Power Metrics
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <div className="text-2xl font-bold text-cnp-high">
              {topCountry?.cnpScore.toFixed(1)}
            </div>
            <div className="text-sm text-muted-foreground">
              Highest CNP
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
            <div className="text-2xl font-bold text-chart-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Updated
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}