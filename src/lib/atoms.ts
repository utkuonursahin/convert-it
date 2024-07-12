import {atom} from "jotai";
import {ConversionState} from "@/constants/ConversionState";

export const currencyConversionAtom = atom<ConversionState>({
    from: 'USD',
    to: 'EUR',
    amount: 1,
    convertedAmount: 0,
    historicalData: []
})