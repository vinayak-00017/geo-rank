import { useParams, Link } from "react-router-dom";
import { getCountryById } from "@/data/countries";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSign, Shield, Users, Cpu, Zap, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

export default function CountryDetail() {
  const { id } = useParams<{ id: string }>();
  const country = id ? getCountryById(id) : null;

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Country Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Rankings
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const scoreData = [
    { name: "Economy", score: country.economy.score, color: "#3b82f6" },
    { name: "Military", score: country.military.score, color: "#ef4444" },
    { name: "Population", score: country.population.score, color: "#22c55e" },
    { name: "Technology", score: country.technology.score, color: "#a855f7" },
    { name: "Resources", score: country.resources.score, color: "#f59e0b" },
  ];

  const radarData = [
    { subject: "Economy", score: country.economy.score, fullMark: 100 },
    { subject: "Military", score: country.military.score, fullMark: 100 },
    { subject: "Population", score: country.population.score, fullMark: 100 },
    { subject: "Technology", score: country.technology.score, fullMark: 100 },
    { subject: "Resources", score: country.resources.score, fullMark: 100 },
  ];

  const getCnpBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Rankings</span>
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <h1 className="text-3xl font-bold">{country.name}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline">Rank #{country.rank}</Badge>
                <Badge variant={getCnpBadgeVariant(country.cnpScore)}>
                  CNP: {country.cnpScore.toFixed(1)}/100
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <DollarSign className="w-5 h-5 text-chart-1" />
                <span className="text-sm font-medium text-muted-foreground">Economy</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">${country.economy.gdp}T</p>
                <div className="flex items-center space-x-1">
                  {country.economy.gdpGrowth > 0 ? (
                    <TrendingUp className="w-3 h-3 text-cnp-high" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-cnp-low" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    {country.economy.gdpGrowth > 0 ? '+' : ''}{country.economy.gdpGrowth}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="w-5 h-5 text-chart-4" />
                <span className="text-sm font-medium text-muted-foreground">Military</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">${country.military.spending}B</p>
                <p className="text-sm text-muted-foreground">
                  {country.military.spendingPercent}% of GDP
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-chart-3" />
                <span className="text-sm font-medium text-muted-foreground">Population</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{country.population.total}M</p>
                <div className="flex items-center space-x-1">
                  {country.population.growth > 0 ? (
                    <TrendingUp className="w-3 h-3 text-cnp-high" />
                  ) : country.population.growth < 0 ? (
                    <TrendingDown className="w-3 h-3 text-cnp-low" />
                  ) : null}
                  <span className="text-sm text-muted-foreground">
                    {country.population.growth > 0 ? '+' : ''}{country.population.growth}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Cpu className="w-5 h-5 text-chart-5" />
                <span className="text-sm font-medium text-muted-foreground">Technology</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">${country.technology.rdSpending}B</p>
                <p className="text-sm text-muted-foreground">
                  {country.technology.rdPercent}% of GDP
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="w-5 h-5 text-chart-2" />
                <span className="text-sm font-medium text-muted-foreground">Energy</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{country.resources.energyProduction}</p>
                <p className="text-sm text-muted-foreground">TWh/year</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>CNP Component Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scoreData}>
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
                    <Bar 
                      dataKey="score" 
                      fill="hsl(var(--primary))"
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
              <CardTitle>Power Profile Radar</CardTitle>
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
                      name="Score"
                      dataKey="score"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Economic Indicators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                <span className="text-muted-foreground">GDP (Nominal)</span>
                <span className="font-mono font-semibold">${country.economy.gdp} Trillion</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                <span className="text-muted-foreground">GDP Growth Rate</span>
                <span className="font-mono font-semibold">{country.economy.gdpGrowth}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                <span className="text-muted-foreground">Economy Score</span>
                <Badge variant={getCnpBadgeVariant(country.economy.score)}>
                  {country.economy.score}/100
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Military Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                <span className="text-muted-foreground">Defense Spending</span>
                <span className="font-mono font-semibold">${country.military.spending} Billion</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                <span className="text-muted-foreground">% of GDP</span>
                <span className="font-mono font-semibold">{country.military.spendingPercent}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                <span className="text-muted-foreground">Military Score</span>
                <Badge variant={getCnpBadgeVariant(country.military.score)}>
                  {country.military.score}/100
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}