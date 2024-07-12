import {NextRequest} from "next/server";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const parameters = {
        base: searchParams.get('base'),
        startDate: searchParams.get('start_date'),
        endDate: searchParams.get('end_date'),
        symbols: searchParams.get('symbols')
    };
    const response = await fetch(`https://api.currencybeacon.com/v1/timeseries?api_key=${process.env.API_KEY}&base=${parameters.base}&start_date=${parameters.startDate}&end_date=${parameters.endDate}&symbols=${parameters.symbols}`,{cache: 'no-cache'})
    const data = await response.json()
    return Response.json({
        code: data.meta.code,
        response: data.response
    })
}