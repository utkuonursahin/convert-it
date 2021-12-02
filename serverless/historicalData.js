const fetch = require("node-fetch")

exports.handler = async(event,context) => {
    const params = event.queryStringParameters
    const {date,from,to} = params
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${from}/${to}.json`
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