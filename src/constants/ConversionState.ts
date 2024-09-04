import {Currency} from "@/constants/Currency";

export type ConversionState = {
    from: Currency;
    to: Currency;
    amount: number;
    convertedAmount: number;
    historicalData: {date: string, price: number}[]
}