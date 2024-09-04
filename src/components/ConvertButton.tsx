'use client';
import React from 'react';
import {Button} from "@/components/ui/button";
import {useAtom} from "jotai";
import {currencyConversionAtom} from "@/lib/atoms";
import {ConversionResponse} from "@/constants/ConversionResponse";
import {toast} from "sonner";
import {HistoricalResponse} from "@/constants/HistoricalResponse";
import {ConversionState} from "@/constants/ConversionState";

const getConversionData = async (currencyAtom: ConversionState) => {
    const conversionResponse = await fetch(`${window.location.href}api/convert?from=${currencyAtom.from.code}&to=${currencyAtom.to.code}&amount=${currencyAtom.amount}`, {cache: 'no-cache'})
    const conversionData : ConversionResponse = await conversionResponse.json()
    if(conversionData.code !== 200) toast.error('Currency conversion failed')
    toast.success(`Conversion successful! Parity: ${conversionData.parity.toFixed(4)}`)
    return conversionData
}

const getHistoricalData = async (currencyAtom: ConversionState) => {
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(new Date().getDate() - 7)
    const historicalResponse = await fetch(`${window.location.href}api/historical?base=${currencyAtom.from.code}&start_date=${oneWeekAgo.toLocaleDateString('en-CA')}&end_date=${new Date().toLocaleDateString('en-CA')}&symbols=${currencyAtom.to.code}`, {cache: 'no-cache'})
    const historicalData: HistoricalResponse = await historicalResponse.json()
    return historicalData;
}

const getDataParallel = async (currencyAtom: ConversionState) => {
    const conversionData = getConversionData(currencyAtom)
    const historicalData = getHistoricalData(currencyAtom)
    return Promise.all([conversionData, historicalData])
}

const ConvertButton = () => {
    const [currencyAtom,setCurrencyAtom] = useAtom(currencyConversionAtom)
    const handleClick = async () => {
        const [conversionData, historicalData] = await getDataParallel(currencyAtom)
        setCurrencyAtom(prev => ({...prev, convertedAmount: parseFloat(conversionData.response.value.toFixed(4))}))
        setCurrencyAtom(prev => ({...prev, historicalData: Object.entries(historicalData.response).map(([key, value]) => ({'date': key, 'price': value[currencyAtom.to.code]}))}))
    }
    return (
        <Button onClick={handleClick}  className="w-full col-start-2">
            Convert
        </Button>
    );
};

export default ConvertButton;