export const API_URL_CURRENT = 'https://api.currencyscoop.com/v1/convert?api_key='
export const API_URL_HISTORICAL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/`
export const DAY_TIMESTAMP = 1000 * 60 * 60 * 24
export const CHART_CONFIG_OPTIONS = { //Fixed options
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: { color: "hsl(0, 0%, 97%)" }
        }
    },
    scales: {
        y: {
            grid: { color: "hsl(120, 100%, 96%)" },
            ticks: { color: "hsl(0, 0%, 97%)" }
        },
        x: {
            grid: { color: "hsl(120, 100%, 96%)" },
            ticks: { color: "hsl(0, 0%, 97%)" }
        }
    }
}