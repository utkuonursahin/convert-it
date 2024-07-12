'use client';
import { useAtom } from 'jotai';
import React from 'react';
import {currencyConversionAtom} from "@/lib/atoms";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {CartesianGrid, Line, LineChart, XAxis} from "recharts";

const Graph = () => {
    const [currencyAtom,setCurrencyAtom] = useAtom(currencyConversionAtom)
    const chartData = currencyAtom.historicalData
    const chartConfig = {
        price: {
            label: 'Price',
            color: 'hsl(var(--chart-1))',
        }
    } satisfies ChartConfig
    return (
        <>
            {chartData.length !== 0 && <ChartContainer config={chartConfig} className="col-start-2 col-end-3">
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
                        dataKey="date"
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(2, 10)}
                        angle={20}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                        dataKey="price"
                        type="basis"
                        stroke="var(--color-price)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>}
        </>
    );
};

export default Graph;