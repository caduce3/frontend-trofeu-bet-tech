"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useQuery } from "@tanstack/react-query"
import { GraficoLtvBody } from "@/api/charts/dashboard/grafico-ltv"
import { Loader2 } from "lucide-react"

export const description = "An interactive line chart"



export function GraficoLtv() {

    const date_init = "2024-01-01"
    const date_finish = "2024-02-31"

    const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ] as const;

    const monthToNumber: Record<typeof months[number], string> = {
        Janeiro: "01",
        Fevereiro: "02",
        Março: "03",
        Abril: "04",
        Maio: "05",
        Junho: "06",
        Julho: "07",
        Agosto: "08",
        Setembro: "09",
        Outubro: "10",
        Novembro: "11",
        Dezembro: "12",
    }

    const { data, isLoading } = useQuery({
        queryKey: ["grafico-ltv", date_init, date_finish],
        queryFn: async () => {
            return await GraficoLtvBody({ date_init, date_finish })
        },
        enabled: !!date_init && !!date_finish,
    })

    const totalPlayers = data?.totalCount || 0

    const chartData = months.map(month => {
    const stats = data?.depositCountsPerMonth[month] || { count: 0, percentage: 0 }
    return {
        month,
        count: stats.count,
        percentage: stats.percentage,
        date: `${new Date().getFullYear()}-${monthToNumber[month]}-01`
    }
    })

    const chartConfig = {
    views: {
        label: "Total",
    },
    count: {
        label: "Inteiro",
        color: "hsl(var(--chart-1))",
    },
    percentage: {
        label: "Porcentagem",
        color: "hsl(var(--chart-2))",
    },
    } satisfies ChartConfig
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("count")

  const total = React.useMemo(
    () => ({
      count: chartData.reduce((acc, curr) => acc + curr.count, 0),
      percentage: chartData.reduce((acc, curr) => acc + curr.percentage, 0),
    }),
    [chartData]
  )
  console.log(total)

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Gráfico LTV - Total de Jogadores: {totalPlayers}</CardTitle>
          <CardDescription>
            Mostrando dados de Janeiro a Dezembro
          </CardDescription>
        </div>
        <div className="flex">
          {["count", "percentage"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  
                </span>
                <span className="text-lg font-bold leading-none sm:text-xl">
                    {chartConfig[chart].label}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      { isLoading ? 
          <div className="flex h-[240px] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground"/>
          </div> :
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
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
              minTickGap={32}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    }
    </Card>
  )
}
