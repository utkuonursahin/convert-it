export type ConversionState = {
    from: string;
    to: string;
    amount: number;
    convertedAmount: number;
    historicalData: {date: string, price: number}[]
}