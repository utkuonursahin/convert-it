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
        const response = await fetch(`${window.location.href}api/convert?from=${currencyAtom.from.code}&to=${currencyAtom.to.code}&amount=${currencyAtom.amount}`, {cache: 'no-cache'})
        const data : ConversionResponse = await response.json()
        if(data.code !== 200) toast.error('Currency conversion failed')
        toast.success(`Conversion successful! Parity: ${data.parity.toFixed(4)}`)
        setCurrencyAtom(prev => ({...prev, convertedAmount: parseFloat(data.response.value.toFixed(4))}))
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(new Date().getDate() - 7)
        const historicalResponse = await fetch(`${window.location.href}api/historical?base=${currencyAtom.from.code}&start_date=${oneWeekAgo.toLocaleDateString('en-CA')}&end_date=${new Date().toLocaleDateString('en-CA')}&symbols=${currencyAtom.to.code}`, {cache: 'no-cache'})
        const historicalData : HistoricalResponse = await historicalResponse.json()
        setCurrencyAtom(prev => ({...prev, historicalData: Object.entries(historicalData.response).map(([key, value]) => ({'date': key, 'price': value[currencyAtom.to.code]}))}))
    }
    return (
        <Button onClick={handleClick}  className="w-full col-start-2">
            Convert
        </Button>
    );
};

export default ConvertButton;