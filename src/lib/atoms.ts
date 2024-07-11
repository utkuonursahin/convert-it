import {atom} from "jotai";
import {ConversionSelection} from "@/constants/ConversionSelection";

export const currencyAtom = atom<ConversionSelection>({
    from: 'USD',
    to: 'EUR'
})

export const amountAtom = atom<number>(1)
export const convertedAmountAtom = atom<number>(0)