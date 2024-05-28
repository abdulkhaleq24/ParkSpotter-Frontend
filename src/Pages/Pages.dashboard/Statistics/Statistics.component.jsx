import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { chartOptions } from "./Utils/chartOptions"
import { getFilteredData } from "./Utils/dataUtils"

import {
  setChartType,
  selectChartType,
} from "../../../store/ChartSlice/chartSlice"
import {
  fetchDashboardData,
  selectDashboardData,
  selectDashboardError,
} from "../../../store/DashBoardSlice/dashBoardSlice"

import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import DashBoardOverView from "./DashboardOverView/DashBoardOverView.component"
import FilterComponent from "./Filters/Filters.component"

import { ChartContainer, Container, Select } from "./Statistics.styled"
import {
  selectEndDate,
  selectMaxPrice,
  selectMaxTickets,
  selectMinPrice,
  selectMinTickets,
  selectStartDate,
} from "../../../store/FilterSlice/filterSlice"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
)

const ChartComponent = () => {
  const dispatch = useDispatch()

  const chartType = useSelector(selectChartType)
  const dashboardData = useSelector(selectDashboardData)
  const error = useSelector(selectDashboardError)

  const startDate = useSelector(selectStartDate)
  const endDate = useSelector(selectEndDate)
  const minPrice = useSelector(selectMinPrice)
  const maxPrice = useSelector(selectMaxPrice)
  const minTickets = useSelector(selectMinTickets)
  const maxTickets = useSelector(selectMaxTickets)

  useEffect(() => {
    dispatch(fetchDashboardData())
  }, [dispatch])

  const handleChartTypeChange = (e) => {
    dispatch(setChartType(e.target.value))
  }

  const filteredData = getFilteredData(
    startDate,
    endDate,
    minPrice,
    maxPrice,
    minTickets,
    maxTickets
  )

  const data = {
    labels: filteredData.labels,
    datasets: [
      {
        label: "Tickets Sold",
        data: filteredData.ticketsSold,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
      {
        label: "Revenue Generated",
        data: filteredData.revenueGenerated,
        backgroundColor: "rgba(153,102,255,0.2)",
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 1,
      },
      {
        label: "Employee Expenses",
        data: filteredData.employeeExpenses, // Added employee expenses
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  }

  const renderChart = () => {
    switch (chartType) {
      case "Line":
        return <Line data={data} options={chartOptions} />
      case "Bar":
        return <Bar data={data} options={chartOptions} />
      case "Pie":
        return <Pie data={data} options={chartOptions} />
      case "Doughnut":
        return <Doughnut data={data} options={chartOptions} />
      case "Radar":
        return <Radar data={data} options={chartOptions} />
      case "PolarArea":
        return <PolarArea data={data} options={chartOptions} />
      default:
        return null
    }
  }

  return (
    <Container>
      <FilterComponent>
        <Select value={chartType} onChange={handleChartTypeChange}>
          <option value="Line">Line Chart</option>
          <option value="Bar">Bar Chart</option>
          <option value="Pie">Pie Chart</option>
          <option value="Doughnut">Doughnut Chart</option>
          <option value="Radar">Radar Chart</option>
          <option value="PolarArea">Polar Area Chart</option>
        </Select>
      </FilterComponent>

      {error && <div>Error: {error}</div>}
      <DashBoardOverView dashboardData={dashboardData} />
      <ChartContainer>{renderChart()}</ChartContainer>
    </Container>
  )
}

export default ChartComponent
