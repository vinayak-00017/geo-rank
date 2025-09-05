import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import { CountryData } from "@/data/countries";

interface ComparisonChartsProps {
  country1: CountryData;
  country2: CountryData;
}

export function ComparisonCharts({ country1, country2 }: ComparisonChartsProps) {
  const comparisonData = [
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
  ];

  const radarData = [
    {
      subject: "Economy",
      [country1.name]: country1.economy.score,
      [country2.name]: country2.economy.score,
      fullMark: 100,
    },
    {
      subject: "Military",
      [country1.name]: country1.military.score,
      [country2.name]: country2.military.score,
      fullMark: 100,
    },
    {
      subject: "Population",
      [country1.name]: country1.population.score,
      [country2.name]: country2.population.score,
      fullMark: 100,
    },
    {
      subject: "Technology",
      [country1.name]: country1.technology.score,
      [country2.name]: country2.technology.score,
      fullMark: 100,
    },
    {
      subject: "Resources",
      [country1.name]: country1.resources.score,
      [country2.name]: country2.resources.score,
      fullMark: 100,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Bar Chart */}
      <div className="h-96">
        <h3 className="text-lg font-semibold mb-4 text-center">Score Comparison</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
            <YAxis stroke="hsl(var(--foreground))" />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Legend />
            <Bar dataKey={country1.name} fill="hsl(var(--primary))" />
            <Bar dataKey={country2.name} fill="hsl(var(--accent))" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart */}
      <div className="h-96">
        <h3 className="text-lg font-semibold mb-4 text-center">Power Profile</h3>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
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
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name={country2.name}
              dataKey={country2.name}
              stroke="hsl(var(--accent))"
              fill="hsl(var(--accent))"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
