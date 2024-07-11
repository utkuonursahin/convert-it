'use client';
import React from 'react';
import {Button} from "@/components/ui/button";
import {useAtom} from "jotai";
import {currencyAtom} from "@/lib/atoms";
import {ConversionResponse} from "@/constants/ConversionResponse";
import {toast} from "sonner";

const ConvertButton = () => {
    const [currencies,setCurrencies] = useAtom(currencyAtom)
    const handleClick = async () => {
        const response = await fetch(
            `http://localhost:3000/api/convert?from=${currencies.from}&to=${currencies.to}&amount=${currencies.amount}`,
            {cache: 'no-cache', method: 'POST'}
        )
        const data : ConversionResponse = await response.json()
        if(data.code !== 200) toast.error('Currency conversion failed')
        toast.success(`Conversion successful! Parity: ${data.parity.toFixed(4)}`)
        setCurrencies(prev => ({
            ...prev,
            convertedAmount: parseFloat(data.response.value.toFixed(4))
        }))
    }
    return (
        <Button onClick={handleClick}  className="col-start-2">
            Convert
        </Button>
    );
};

export default ConvertButton;