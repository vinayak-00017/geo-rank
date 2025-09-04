import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountryData } from "@/data/countries";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CountryCardProps {
  country: CountryData;
  showRank?: boolean;
}

export function CountryCard({ country, showRank = true }: CountryCardProps) {
  const getCnpColor = (score: number) => {
    if (score >= 80) return "text-cnp-high";
    if (score >= 60) return "text-cnp-medium";
    return "text-cnp-low";
  };

  const getCnpBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return <TrendingUp className="w-3 h-3 text-cnp-high" />;
    if (growth < 0) return <TrendingDown className="w-3 h-3 text-cnp-low" />;
    return <Minus className="w-3 h-3 text-muted-foreground" />;
  };

  return (
    <Link to={`/country/${country.id}`}>
      <Card className="hover:shadow-card transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              {showRank && (
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-bold text-secondary-foreground">
                    {country.rank}
                  </span>
                </div>
              )}
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{country.flag}</span>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {country.code}
                </p>
              </div>
            </div>
            
            <Badge variant={getCnpBadgeVariant(country.cnpScore)} className="font-mono">
              {country.cnpScore.toFixed(1)}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Economy</p>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium">${country.economy.gdp}T</span>
                {getGrowthIcon(country.economy.gdpGrowth)}
                <span className="text-xs text-muted-foreground">
                  {country.economy.gdpGrowth > 0 ? '+' : ''}{country.economy.gdpGrowth}%
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Military</p>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium">${country.military.spending}B</span>
                <span className="text-xs text-muted-foreground">
                  ({country.military.spendingPercent}%)
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Population</p>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium">{country.population.total}M</span>
                {getGrowthIcon(country.population.growth)}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">R&D</p>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium">${country.technology.rdSpending}B</span>
                <span className="text-xs text-muted-foreground">
                  ({country.technology.rdPercent}%)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border/50">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">CNP Score</span>
              <span className={`font-mono font-bold text-lg ${getCnpColor(country.cnpScore)}`}>
                {country.cnpScore.toFixed(1)}/100
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}