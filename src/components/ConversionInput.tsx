'use client';
import React from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useAtom} from "jotai";
import {amountAtom, convertedAmountAtom} from "@/lib/atoms";

const ConversionInput = () => {
    return (
        <div className="col-start-2 flex w-full items-center space-x-2">
            <ConversionInput.Amount/>
            <Button type="submit">Convert</Button>
            <ConversionInput.ConvertedAmount/>
        </div>
    );
};

ConversionInput.Amount = function (){
    const [amount, setAmount] = useAtom(amountAtom)
    return(
        <Input value={amount} onChange={e => setAmount(parseFloat(e.target.value))} type="number" placeholder="Amount"/>
    )
}

ConversionInput.ConvertedAmount = function (){
    const [convertedAmount, setConvertedAmount] = useAtom(convertedAmountAtom)
    return(
        <Input value={convertedAmount} onChange={e => setConvertedAmount(parseFloat(e.target.value))} type="number" placeholder="Converted Amount"/>
    )
}

export default ConversionInput;