"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
const chartData = [
  { month: "January", withdrawal: 186, deposit: 80 },
  { month: "February", withdrawal: 305, deposit: 200 },
  { month: "March", withdrawal: 237, deposit: 120 },
  { month: "April", withdrawal: 73, deposit: 190 },
  { month: "May", withdrawal: 209, deposit: 130 },
  { month: "June", withdrawal: 214, deposit: 140 },
];

const chartConfig = {
  withdrawal: {
    label: "Withdrawal",
    color: "#FFDB8B",
  },
  deposit: {
    label: "Deposit",
    color: "#FF6600",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value: string) => value.slice(0, 3)}
        />
        <YAxis axisLine={false} tickLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="withdrawal"
          type="monotone"
          stroke="var(--color-withdrawal)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="deposit"
          type="monotone"
          stroke="var(--color-deposit)"
          strokeWidth={2}
          dot={false}
        />
        <ChartLegend
          content={<ChartLegendContent />}
          className="bg-[#F4F4F4] rounded-md py-2 mt-6"
        />
      </LineChart>
    </ChartContainer>
  );
}
