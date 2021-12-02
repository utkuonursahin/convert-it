import {API_KEY, API_URL_CURRENT, API_URL_HISTORICAL, CHART_CONFIG_OPTIONS, SERVERLESS_URL} from "./config";
import { dateFormatter, getJSON } from "./helpers";
export const state = {
    currencyFrom: null,
    currencyTo: null,
    currencyAmount: null,
    currencyData : [],
    exchangeRate: null,
    exchangedMoney: null,
    chartData: [],
    chartOptions: {
        type:'line',
        options: CHART_CONFIG_OPTIONS
    }
}

export const setInitials = function (curFrom, curTo, curAmount) {
    state.currencyFrom = curFrom
    state.currencyTo = curTo
    state.currencyAmount = curAmount
}

export const getCurrencyData = async function () {
    try {
        state.currencyData = await Promise.all([
            getJSON(`${SERVERLESS_URL}/convert?from=${state.currencyFrom}&amount=${state.currencyAmount}&to=${state.currencyTo}`),
            getJSON(`${SERVERLESS_URL}/historicalData?date=${dateFormatter(5)}&from=${state.currencyFrom.toLowerCase()}&to=${state.currencyTo.toLowerCase()}`),
            getJSON(`${SERVERLESS_URL}/historicalData?date=${dateFormatter(4)}&from=${state.currencyFrom.toLowerCase()}&to=${state.currencyTo.toLowerCase()}`),
            getJSON(`${SERVERLESS_URL}/historicalData?date=${dateFormatter(3)}&from=${state.currencyFrom.toLowerCase()}&to=${state.currencyTo.toLowerCase()}`),
            getJSON(`${SERVERLESS_URL}/historicalData?date=${dateFormatter(2)}&from=${state.currencyFrom.toLowerCase()}&to=${state.currencyTo.toLowerCase()}`),
            getJSON(`${SERVERLESS_URL}/historicalData?date=${dateFormatter()}&from=${state.currencyFrom.toLowerCase()}&to=${state.currencyTo.toLowerCase()}`),
        ])
    } catch (error) { throw error }
}

export const setCurrencyData = function (){
    const [current, ...fiveDays] = state.currencyData
    state.exchangeRate = (current.response.value / current.response.amount).toFixed(4)
    state.exchangedMoney = current.response.value.toFixed(4)
    /*Historical data which came from 'getJSON' are in {date,usd(or whatever came from endpoint)} format,
    so currency codes should re-formatted and fixed into a constant which is 'cur' property in this case*/
    state.chartData = fiveDays.map(el => {
        return {
            date: el.date,
            cur: el[`${state.currencyTo.toLowerCase()}`]
        }
    })
}

export const setChartOptions = function () { //Flexible options
    //Labels and datasets props should be re-considered on every exchange
    state.chartOptions.data = {
        labels: state.chartData.map(el => el.date),
        datasets: [{
            label: `${state.currencyFrom} / ${state.currencyTo}`,
            data: state.chartData.map(el => el.cur),
            backgroundColor: 'hsl(0, 0%, 20%)',
            borderColor: '#54BE3CFF',
            borderWidth: 2,
            fill: true,
            tension: 0.1
        }]
    }
}



