'use client';
import { useAtom } from 'jotai';
import React from 'react';
import {currencyConversionAtom} from "@/lib/atoms";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";

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
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickFormatter={(value) => value.slice(2, 10)}
                        angle={20}
                    />
                    <YAxis domain={['dataMin', 'dataMax']} hide={true}/>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                        dataKey="price"
                        type="monotone"
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