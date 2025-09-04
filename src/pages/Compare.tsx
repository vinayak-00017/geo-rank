import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { countries, CountryData } from "@/data/countries";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import { ArrowRight, GitCompare } from "lucide-react";

export default function Compare() {
  const [country1, setCountry1] = useState<CountryData | null>(null);
  const [country2, setCountry2] = useState<CountryData | null>(null);

  const comparisonData = country1 && country2 ? [
    {
      name: "Economy",
      [country1.name]: country1.economy.score,
      [country2.name]: country2.economy.score,
    },
    {
      name: "Military",
      [country1.name]: country1.military.score,
      [country2.name]: country2.military.score,
    },
    {
      name: "Population",
      [country1.name]: country1.population.score,
      [country2.name]: country2.population.score,
    },
    {
      name: "Technology",
      [country1.name]: country1.technology.score,
      [country2.name]: country2.technology.score,
    },
    {
      name: "Resources",
      [country1.name]: country1.resources.score,
      [country2.name]: country2.resources.score,
    },
  ] : [];

  const radarData = country1 && country2 ? [
    {
      subject: "Economy",
      [country1.name]: country1.economy.score,
      [country2.name]: country2.economy.score,
    },
    {
      subject: "Military",
      [country1.name]: country1.military.score,
      [country2.name]: country2.military.score,
    },
    {
      subject: "Population",
      [country1.name]: country1.population.score,
      [country2.name]: country2.population.score,
    },
    {
      subject: "Technology",
      [country1.name]: country1.technology.score,
      [country2.name]: country2.technology.score,
    },
    {
      subject: "Resources",
      [country1.name]: country1.resources.score,
      [country2.name]: country2.resources.score,
    },
  ] : [];

  const availableCountries1 = countries.filter(c => c.id !== country2?.id);
  const availableCountries2 = countries.filter(c => c.id !== country1?.id);

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            <GitCompare className="w-4 h-4" />
            <span>Country Comparison</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Compare Nations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select two countries to compare their Composite National Power scores across all metrics.
          </p>
        </div>

        {/* Country Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">First Country</CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={(value) => setCountry1(countries.find(c => c.id === value) || null)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {availableCountries1.map((country) => (
                    <SelectItem key={country.id} value={country.id}>
                      <div className="flex items-center space-x-2">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {country1 && (
                <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{country1.flag}</span>
                      <span className="font-semibold">{country1.name}</span>
                    </div>
                    <Badge variant="outline">#{country1.rank}</Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      {country1.cnpScore.toFixed(1)}
                    </div>
                    <div className="text-sm text-muted-foreground">CNP Score</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <GitCompare className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">Second Country</CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={(value) => setCountry2(countries.find(c => c.id === value) || null)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {availableCountries2.map((country) => (
                    <SelectItem key={country.id} value={country.id}>
                      <div className="flex items-center space-x-2">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {country2 && (
                <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{country2.flag}</span>
                      <span className="font-semibold">{country2.name}</span>
                    </div>
                    <Badge variant="outline">#{country2.rank}</Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">
                      {country2.cnpScore.toFixed(1)}
                    </div>
                    <div className="text-sm text-muted-foreground">CNP Score</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Comparison Results */}
        {country1 && country2 && (
          <div className="space-y-8 animate-slide-up">
            {/* Overall Comparison */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Overall CNP Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {country1.cnpScore.toFixed(1)}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">{country1.flag}</span>
                      <span className="font-semibold">{country1.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Rank #{country1.rank}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-4xl font-bold">
                      {country1.cnpScore > country2.cnpScore ? (
                        <span className="text-primary">{country1.flag}</span>
                      ) : country2.cnpScore > country1.cnpScore ? (
                        <span className="text-accent">{country2.flag}</span>
                      ) : (
                        <span className="text-muted-foreground">=</span>
                      )}
                    </div>
                  </div>

                  <div className="text-center p-6 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">
                      {country2.cnpScore.toFixed(1)}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">{country2.flag}</span>
                      <span className="font-semibold">{country2.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Rank #{country2.rank}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bar Chart Comparison */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Component Scores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={comparisonData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis 
                          dataKey="name" 
                          stroke="hsl(var(--muted-foreground))"
                          fontSize={12}
                        />
                        <YAxis 
                          stroke="hsl(var(--muted-foreground))"
                          fontSize={12}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px"
                          }}
                        />
                        <Legend />
                        <Bar 
                          dataKey={country1.name} 
                          fill="hsl(var(--primary))"
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar 
                          dataKey={country2.name} 
                          fill="hsl(var(--accent))"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Radar Chart */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Power Profile Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="hsl(var(--border))" />
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        />
                        <PolarRadiusAxis 
                          angle={90} 
                          domain={[0, 100]}
                          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                        />
                        <Radar
                          name={country1.name}
                          dataKey={country1.name}
                          stroke="hsl(var(--primary))"
                          fill="hsl(var(--primary))"
                          fillOpacity={0.1}
                          strokeWidth={2}
                        />
                        <Radar
                          name={country2.name}
                          dataKey={country2.name}
                          stroke="hsl(var(--accent))"
                          fill="hsl(var(--accent))"
                          fillOpacity={0.1}
                          strokeWidth={2}
                        />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Metrics Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { 
                  title: "Economy", 
                  country1Value: `$${country1.economy.gdp}T`, 
                  country2Value: `$${country2.economy.gdp}T`,
                  country1Growth: country1.economy.gdpGrowth,
                  country2Growth: country2.economy.gdpGrowth,
                  unit: "GDP Growth"
                },
                { 
                  title: "Military", 
                  country1Value: `$${country1.military.spending}B`, 
                  country2Value: `$${country2.military.spending}B`,
                  country1Growth: country1.military.spendingPercent,
                  country2Growth: country2.military.spendingPercent,
                  unit: "% of GDP"
                },
                { 
                  title: "Population", 
                  country1Value: `${country1.population.total}M`, 
                  country2Value: `${country2.population.total}M`,
                  country1Growth: country1.population.growth,
                  country2Growth: country2.population.growth,
                  unit: "Growth Rate"
                },
                { 
                  title: "Technology", 
                  country1Value: `$${country1.technology.rdSpending}B`, 
                  country2Value: `$${country2.technology.rdSpending}B`,
                  country1Growth: country1.technology.rdPercent,
                  country2Growth: country2.technology.rdPercent,
                  unit: "% of GDP"
                },
                { 
                  title: "Energy", 
                  country1Value: `${country1.resources.energyProduction}`, 
                  country2Value: `${country2.resources.energyProduction}`,
                  country1Growth: country1.resources.energyScore,
                  country2Growth: country2.resources.energyScore,
                  unit: "TWh/year"
                },
              ].map((metric, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-center mb-4">{metric.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                        <span className="text-xs">{country1.flag}</span>
                        <span className="font-mono font-bold text-primary">
                          {metric.country1Value}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-accent/10 rounded">
                        <span className="text-xs">{country2.flag}</span>
                        <span className="font-mono font-bold text-accent">
                          {metric.country2Value}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {!country1 && !country2 && (
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="py-16 text-center">
              <GitCompare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Select Countries to Compare</h3>
              <p className="text-muted-foreground">
                Choose two countries above to see their detailed CNP comparison.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}