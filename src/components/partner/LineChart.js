import { Line } from "react-chartjs-2"
import { Chart as ChartJs } from "chart.js/auto"


function LineChart({chartData}) {
    return(
        <>
            <Line data={chartData} />
        </>
    )
}

export default LineChart;