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
import {ArrowLeftRight} from "lucide-react";

const CurrencySelect = () => {
    return (
        <div className="col-start-2 flex items-center gap-8 ">
            <CurrencySelect.From/>
            <ArrowLeftRight color="#fff" size={48}/>
            <CurrencySelect.To/>
        </div>
    )
};

CurrencySelect.From = function () {
    const [currencySelection, setCurrencySelection] = useAtom(currencyAtom)
    return (
        <Select defaultValue={currencySelection.from} onValueChange={val => setCurrencySelection(prev => ({...prev, from: val}))}>
            <SelectTrigger>
                <SelectValue placeholder="From" />
            </SelectTrigger>
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
        </Select>
    );
}

CurrencySelect.To = function () {
    const [currencySelection, setCurrencySelection] = useAtom(currencyAtom)
    return (
        <Select defaultValue={currencySelection.to} onValueChange={val => setCurrencySelection(prev => ({...prev, to: val}))}>
            <SelectTrigger>
                <SelectValue placeholder="From" />
            </SelectTrigger>
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
        </Select>
    );
}

export default CurrencySelect;