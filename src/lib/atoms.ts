import {atom} from "jotai";
import {ConversionState} from "@/constants/ConversionState";
import {Currency} from "@/constants/Currency";

export const currencyConversionAtom = atom<ConversionState>({
    from: {name: 'US Dollar', symbol: '$', code: 'USD'} as Currency,
    to: {name: 'Euro', symbol: '€', code: 'EUR'} as Currency,
    amount: 1,
    convertedAmount: 0,
    historicalData: []
})