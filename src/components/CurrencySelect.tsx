'use client';
import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import currencies from "../constants/currencies.json";
import {currencyAtom} from "@/lib/atoms";
import {useAtom} from "jotai";

type CurrencySelectProps = {
    children: React.ReactNode
}

const CurrencySelect = ({children} : CurrencySelectProps) => {
    return (
        <>
            {children}
        </>
    )
};

function CurrencySelectList(){
    return (
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Currencies</SelectLabel>
                {currencies.map((currency) => {
                    return (
                        <SelectItem key={currency.code} value={currency.code}>
                            <p className="flex items-center gap-1">
                                <span>{currency.name}</span>
                                <span>({currency.symbol})</span>
                            </p>
                        </SelectItem>
                    );
                })}
            </SelectGroup>
        </SelectContent>
    )
}

export function CurrencySelectFrom () {
    const [currencySelection, setCurrencySelection] = useAtom(currencyAtom)
    return (
        <Select defaultValue={currencySelection.from} onValueChange={val => setCurrencySelection(prev => ({...prev, from: val}))}>
            <SelectTrigger>
                <SelectValue/>
            </SelectTrigger>
            <CurrencySelectList />
        </Select>
    );
}

export function CurrencySelectTo () {
    const [currencySelection, setCurrencySelection] = useAtom(currencyAtom)
    return (
        <Select defaultValue={currencySelection.to} onValueChange={val => setCurrencySelection(prev => ({...prev, to: val}))}>
            <SelectTrigger>
                <SelectValue/>
            </SelectTrigger>
            <CurrencySelectList />
        </Select>
    );
}

export default CurrencySelect;