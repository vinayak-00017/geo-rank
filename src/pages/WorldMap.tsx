import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { countries } from "@/data/countries";
import { Map, Globe, TrendingUp } from "lucide-react";

export default function WorldMap() {
  // Categorize countries by CNP strength
  const strongPowers = countries.filter(c => c.cnpScore >= 80);
  const mediumPowers = countries.filter(c => c.cnpScore >= 60 && c.cnpScore < 80);
  const emergingPowers = countries.filter(c => c.cnpScore < 60);

  const getCnpColor = (score: number) => {
    if (score >= 80) return "bg-cnp-high";
    if (score >= 60) return "bg-cnp-medium";
    return "bg-cnp-low";
  };

  const getCnpBorderColor = (score: number) => {
    if (score >= 80) return "border-cnp-high";
    if (score >= 60) return "border-cnp-medium";
    return "border-cnp-low";
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Map className="w-4 h-4" />
            <span>Global Power Distribution</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            World Power Map
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualizing global power distribution through CNP scores across major nations.
          </p>
        </div>

        {/* Legend */}
        <Card className="mb-8 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Power Classification</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-cnp-high/10 border border-cnp-high/20 rounded-lg">
                <div className="w-4 h-4 bg-cnp-high rounded-full"></div>
                <div>
                  <div className="font-semibold text-cnp-high">Superpowers</div>
                  <div className="text-sm text-muted-foreground">CNP Score: 80-100</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-cnp-medium/10 border border-cnp-medium/20 rounded-lg">
                <div className="w-4 h-4 bg-cnp-medium rounded-full"></div>
                <div>
                  <div className="font-semibold text-cnp-medium">Major Powers</div>
                  <div className="text-sm text-muted-foreground">CNP Score: 60-79</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-cnp-low/10 border border-cnp-low/20 rounded-lg">
                <div className="w-4 h-4 bg-cnp-low rounded-full"></div>
                <div>
                  <div className="font-semibold text-cnp-low">Regional Powers</div>
                  <div className="text-sm text-muted-foreground">CNP Score: Below 60</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visual Map Representation */}
        <Card className="mb-8 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Global Power Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-to-br from-blue-950/20 to-indigo-950/20 rounded-xl p-8 min-h-96 border-2 border-dashed border-border/50">
              {/* Placeholder for future map integration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Globe className="w-16 h-16 text-muted-foreground mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interactive World Map</h3>
                    <p className="text-muted-foreground max-w-md">
                      Future implementation will include an interactive world map with countries 
                      color-coded by their CNP strength and clickable country details.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Sample positioning for major powers */}
              <div className="relative h-full">
                {/* Simulate global positioning */}
                <div className="absolute top-1/4 left-1/4">
                  <div className="w-8 h-8 bg-cnp-high rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-sm">🇺🇸</span>
                  </div>
                  <div className="text-xs text-center mt-1 font-medium">USA</div>
                </div>
                
                <div className="absolute top-1/3 right-1/3">
                  <div className="w-8 h-8 bg-cnp-high rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-sm">🇨🇳</span>
                  </div>
                  <div className="text-xs text-center mt-1 font-medium">China</div>
                </div>
                
                <div className="absolute top-1/4 right-1/4">
                  <div className="w-8 h-8 bg-cnp-medium rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-sm">🇷🇺</span>
                  </div>
                  <div className="text-xs text-center mt-1 font-medium">Russia</div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/2">
                  <div className="w-8 h-8 bg-cnp-medium rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-sm">🇮🇳</span>
                  </div>
                  <div className="text-xs text-center mt-1 font-medium">India</div>
                </div>
                
                <div className="absolute top-1/3 left-1/2">
                  <div className="w-8 h-8 bg-cnp-medium rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-sm">🇩🇪</span>
                  </div>
                  <div className="text-xs text-center mt-1 font-medium">Germany</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Power Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Superpowers */}
          <Card className="bg-card/80 backdrop-blur-sm border-cnp-high/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-cnp-high">Superpowers</span>
                <Badge variant="outline" className="text-cnp-high border-cnp-high">
                  {strongPowers.length} nations
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {strongPowers.map((country) => (
                <div
                  key={country.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${getCnpBorderColor(country.cnpScore)}/20 bg-gradient-to-r from-transparent to-cnp-high/5`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{country.flag}</span>
                    <div>
                      <div className="font-semibold">{country.name}</div>
                      <div className="text-xs text-muted-foreground">Rank #{country.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-cnp-high">{country.cnpScore.toFixed(1)}</div>
                    <div className="text-xs text-muted-foreground">CNP Score</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Major Powers */}
          <Card className="bg-card/80 backdrop-blur-sm border-cnp-medium/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-cnp-medium">Major Powers</span>
                <Badge variant="outline" className="text-cnp-medium border-cnp-medium">
                  {mediumPowers.length} nations
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mediumPowers.map((country) => (
                <div
                  key={country.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${getCnpBorderColor(country.cnpScore)}/20 bg-gradient-to-r from-transparent to-cnp-medium/5`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{country.flag}</span>
                    <div>
                      <div className="font-semibold">{country.name}</div>
                      <div className="text-xs text-muted-foreground">Rank #{country.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-cnp-medium">{country.cnpScore.toFixed(1)}</div>
                    <div className="text-xs text-muted-foreground">CNP Score</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Regional Powers */}
          <Card className="bg-card/80 backdrop-blur-sm border-cnp-low/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-cnp-low">Regional Powers</span>
                <Badge variant="outline" className="text-cnp-low border-cnp-low">
                  {emergingPowers.length} nations
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergingPowers.map((country) => (
                <div
                  key={country.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${getCnpBorderColor(country.cnpScore)}/20 bg-gradient-to-r from-transparent to-cnp-low/5`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{country.flag}</span>
                    <div>
                      <div className="font-semibold">{country.name}</div>
                      <div className="text-xs text-muted-foreground">Rank #{country.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-cnp-low">{country.cnpScore.toFixed(1)}</div>
                    <div className="text-xs text-muted-foreground">CNP Score</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Global Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {countries.reduce((sum, c) => sum + c.cnpScore, 0) / countries.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Average CNP Score
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-cnp-high">
                {Math.max(...countries.map(c => c.cnpScore)).toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">
                Highest CNP Score
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-cnp-low">
                {Math.min(...countries.map(c => c.cnpScore)).toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">
                Lowest CNP Score
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-accent">
                {strongPowers.length + mediumPowers.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Major Powers
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}