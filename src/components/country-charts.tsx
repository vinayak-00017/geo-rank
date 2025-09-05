import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { CountryData } from "@/data/countries";

interface CountryChartsProps {
  country: CountryData;
}

export function CountryCharts({ country }: CountryChartsProps) {
  const chartData = [
    { name: "Economy", value: country.economy.score },
    { name: "Military", value: country.military.score },
    { name: "Population", value: country.population.score },
    { name: "Technology", value: country.technology.score },
    { name: "Resources", value: country.resources.score },
  ];

  const radarData = [
    {
      subject: "Economy",
      value: country.economy.score,
      fullMark: 100,
    },
    {
      subject: "Military",
      value: country.military.score,
      fullMark: 100,
    },
    {
      subject: "Population",
      value: country.population.score,
      fullMark: 100,
    },
    {
      subject: "Technology",
      value: country.technology.score,
      fullMark: 100,
    },
    {
      subject: "Resources",
      value: country.resources.score,
      fullMark: 100,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="h-80">
        <h3 className="text-lg font-semibold mb-4 text-center">Component Scores</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
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
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart */}
      <div className="h-80">
        <h3 className="text-lg font-semibold mb-4 text-center">Power Profile</h3>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            />
            <Radar
              name={country.name}
              dataKey="value"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
