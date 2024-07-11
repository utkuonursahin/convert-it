import {NextRequest} from "next/server";

export async function POST(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const parameters = {
        from: searchParams.get('from'),
        to: searchParams.get('to'),
        amount: searchParams.get('amount'),
    };
    const response = await fetch(`https://api.currencybeacon.com/v1/convert?api_key=${process.env.API_KEY}&from=${parameters.from}&to=${parameters.to}&amount=${parameters.amount}`,{
        cache: 'no-cache',
    })
    const data = await response.json()
    return Response.json({
        code: data.meta.code,
        response: data.response,
        parity: data.response.value / data.response.amount
    })
}