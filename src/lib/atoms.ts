import {atom} from "jotai";
import {ConversionState} from "@/constants/ConversionState";

export const currencyAtom = atom<ConversionState>({
    from: 'USD',
    to: 'EUR',
    amount: 1,
    convertedAmount: 0
})

export const amountAtom = atom<number>(1)
export const convertedAmountAtom = atom<number>(0)