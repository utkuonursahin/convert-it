'use client';
import React from 'react';
import {Input} from "@/components/ui/input";
import {useAtom} from "jotai";
import {amountAtom, convertedAmountAtom} from "@/lib/atoms";

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
    const [amount,setAmount] = useAtom(amountAtom)
    return(
        <>
            {children}
            <Input value={amount} onChange={e => setAmount(parseFloat(e.target.value))} type="number" placeholder="Amount"/>
        </>
    )
}

export function ConversionInputConvertedAmount ({children} : ConversionInputProps){
    const [amount, setAmount] = useAtom(convertedAmountAtom)
    return(
        <>
            {children}
            <Input value={amount} onChange={e => setAmount(parseFloat(e.target.value))} type="number" placeholder="Amount"/>
        </>
    )
}

export default ConversionInput;