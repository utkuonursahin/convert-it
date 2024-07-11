export type ConversionResponse = {
    code: number;
    response: {
        timestamp: number;
        date: string;
        from: string;
        to: string;
        amount: number;
        value: number;
    };
    parity: number;
}