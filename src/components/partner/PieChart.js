import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJs } from "chart.js/auto"


function PieChart({chartData}) {
    return(
        <>
            <Doughnut data={chartData} />
        </>
    )
}

export default PieChart;