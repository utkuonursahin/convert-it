export const SERVERLESS_URL = 'https://excurrency.netlify.app/.netlify/functions'
export const DAY_TIMESTAMP = 1000 * 60 * 60 * 24
export const CHART_CONFIG_OPTIONS = { //Fixed options
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: { color: "hsl(0, 0%, 97%)"}
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