'use client';
import React from 'react';
import {Button} from "@/components/ui/button";
import {useAtom} from "jotai";
import {currencyConversionAtom} from "@/lib/atoms";
import {ConversionResponse} from "@/constants/ConversionResponse";
import {toast} from "sonner";
import {HistoricalResponse} from "@/constants/HistoricalResponse";

const ConvertButton = () => {
    const [currencyAtom,setCurrencyAtom] = useAtom(currencyConversionAtom)
    const handleClick = async () => {
        const response = await fetch(`http://localhost:3000/api/convert?from=${currencyAtom.from}&to=${currencyAtom.to}&amount=${currencyAtom.amount}`, {cache: 'no-cache'})
        const data : ConversionResponse = await response.json()
        if(data.code !== 200) toast.error('Currency conversion failed')
        toast.success(`Conversion successful! Parity: ${data.parity.toFixed(4)}`)
        setCurrencyAtom(prev => ({...prev, convertedAmount: parseFloat(data.response.value.toFixed(4))}))
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(new Date().getDate() - 7)
        const historicalResponse = await fetch(`http://localhost:3000/api/historical?base=${currencyAtom.from}&start_date=${oneWeekAgo.toLocaleDateString('en-CA')}&end_date=${new Date().toLocaleDateString('en-CA')}&symbols=${currencyAtom.to}`, {cache: 'no-cache'})
        const historicalData : HistoricalResponse = await historicalResponse.json()
        setCurrencyAtom(prev => ({...prev, historicalData: Object.entries(historicalData.response).map(([key, value]) => ({'date': key, 'price': value[currencyAtom.to]}))}))
    }
    return (
        <Button onClick={handleClick}  className="col-start-2">
            Convert
        </Button>
    );
};

export default ConvertButton;