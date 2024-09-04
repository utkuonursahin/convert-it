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
import {currencyConversionAtom} from "@/lib/atoms";
import {useAtom} from "jotai";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import {useState} from "react";

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

type CurrencyComboBoxProps = {
    from?: boolean
}

export function CurrencyComboBox ({from}: CurrencyComboBoxProps) {
    const [currencySelection, setCurrencySelection] = useAtom(currencyConversionAtom)
    const [open, setOpen] = useState(false)

    const selection = from ? currencySelection.from : currencySelection.to
    const selectionType = from ? "from" : "to"
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full"
                >
                    {selection.name + " (" + selection.symbol + ")"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandInput placeholder="Search currency..." />
                    <CommandList>
                        <CommandEmpty>No currency found.</CommandEmpty>
                        <CommandGroup>
                            {currencies.map((currency) => (
                                <CommandItem
                                    key={currency.code}
                                    value={currency.code}
                                    onSelect={() => {
                                        setCurrencySelection(prev => ({...prev, [selectionType]: currency}))
                                        setOpen(false)
                                    }}
                                >
                                    {currency.name} ({currency.symbol})
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default CurrencySelect;