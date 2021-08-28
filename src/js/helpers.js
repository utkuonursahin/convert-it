import {DAY_TIMESTAMP} from "./config";
export const getJSON = async function(url){
    try{
        const response = await fetch(url)
        if(!response.ok) throw new Error(`Something went wrong: ${response.statusText || 'Server problem'} (${response.status || 408})`)
        return await response.json()
    }catch (error){throw error}
}
export const dateFormatter = function (day=1){ //Returns a date string in YYYY-MM-DD format
    const now = Date.now()
    return new Date(now - (day*DAY_TIMESTAMP)).toISOString().split('T')[0]
}