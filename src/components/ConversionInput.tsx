'use client';
import React from 'react';
import {Input} from "@/components/ui/input";
import {useAtom} from "jotai";
import {currencyConversionAtom} from "@/lib/atoms";

type ConversionInputProps = {
    children: React.ReactNode
}

const ConversionInput = ({children} : ConversionInputProps) => {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    );
};

export function ConversionInputAmount ({children} : ConversionInputProps){
    const [currencies,setCurrencies] = useAtom(currencyConversionAtom)
    return(
        <>
            {children}
            <Input value={currencies.amount} onChange={e => setCurrencies(
                prev => ({...prev, amount:parseFloat(e.target.value)})
            )} type="number" placeholder="Amount"/>
        </>
    )
}

export function ConversionInputConvertedAmount ({children} : ConversionInputProps){
    const [currencies,setCurrencies] = useAtom(currencyConversionAtom)
    return(
        <>
            {children}
            <Input value={currencies.convertedAmount} onChange={e => setCurrencies(prev => (
                {...prev, convertedAmount:parseFloat(e.target.value)}
            ))} type="number" placeholder="Amount"/>
        </>
    )
}

export default ConversionInput;