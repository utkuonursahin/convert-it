const fetch = require("node-fetch")

exports.handler = async(event,context) => {
    const params = event.queryStringParameters
    const {from,amount,to} = params
    const API_KEY = process.env.API_KEY
    const url = `https://api.currencyscoop.com/v1/convert?api_key=${API_KEY}&from=${from}&amount=${amount}&to=${to}`
    try{
        const fetchData = await fetch(url)
        const data = await fetchData.json()
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }catch(err){
        return {statusCode: 422, body: err.stack}
    }
}