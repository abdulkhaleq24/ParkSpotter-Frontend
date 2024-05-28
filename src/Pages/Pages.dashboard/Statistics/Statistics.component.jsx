import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {chartOptions} from "./Utils/chartOptions"

import {
  setChartType,
  selectChartType,
} from "../../../store/ChartSlice/chartSlice"
import {
  fetchDashboardData,
  selectDashboardData,
  selectDashboardError,
} from "../../../store/DashBoardSlice/dashBoardSlice"
import {
  setSelectedFilter,
  setStartDate,
  setEndDate,
  setMinPrice,
  setMaxPrice,
  setMinTickets,
  setMaxTickets,
  selectSelectedFilter,
  selectStartDate,
  selectEndDate,
  selectMinPrice,
  selectMaxPrice,
  selectMinTickets,
  selectMaxTickets,
} from "../../../store/FilterSlice/filterSlice"

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

import {
  ChartContainer,
  Container,
  FilterContainer,
  Input,
  MobileFilterContainer,
  MobileFilterInputs,
  Select,
} from "./Statistics.styled"

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

const dummyData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  ticketsSold: [650, 590, 800, 810, 560, 550, 400],
  revenueGenerated: [2800, 4800, 4000, 1900, 8600, 2700, 3800],
}

const getFilteredData = (
  startDate,
  endDate,
  minPrice,
  maxPrice,
  minTickets,
  maxTickets
) => {
  const start = startDate ? new Date(startDate) : null
  const end = endDate ? new Date(endDate) : null

  const filteredData = {
    labels: [],
    ticketsSold: [],
    revenueGenerated: [],
  }

  dummyData.labels.forEach((label, index) => {
    const date = new Date(2021, index)
    const price = dummyData.revenueGenerated[index]
    const tickets = dummyData.ticketsSold[index]

    if (
      (!start || date >= start) &&
      (!end || date <= end) &&
      (!minPrice || price >= minPrice) &&
      (!maxPrice || price <= maxPrice) &&
      (!minTickets || tickets >= minTickets) &&
      (!maxTickets || tickets <= maxTickets)
    ) {
      filteredData.labels.push(label)
      filteredData.ticketsSold.push(tickets)
      filteredData.revenueGenerated.push(price)
    }
  })

  return filteredData
}

const ChartComponent = () => {
  const dispatch = useDispatch()

  const chartType = useSelector(selectChartType)
  const selectedFilter = useSelector(selectSelectedFilter)
  const startDate = useSelector(selectStartDate)
  const endDate = useSelector(selectEndDate)
  const minPrice = useSelector(selectMinPrice)
  const maxPrice = useSelector(selectMaxPrice)
  const minTickets = useSelector(selectMinTickets)
  const maxTickets = useSelector(selectMaxTickets)
  const dashboardData = useSelector(selectDashboardData)
  const error = useSelector(selectDashboardError)

  useEffect(() => {
    dispatch(fetchDashboardData())
  }, [dispatch])

  const handleChartTypeChange = (e) => {
    dispatch(setChartType(e.target.value))
  }

  const handleFilterChange = (e) => {
    dispatch(setSelectedFilter(e.target.value))
  }

  const handleStartDateChange = (e) => {
    dispatch(setStartDate(e.target.value))
  }

  const handleEndDateChange = (e) => {
    dispatch(setEndDate(e.target.value))
  }

  const handleMinPriceChange = (e) => {
    dispatch(setMinPrice(e.target.value))
  }

  const handleMaxPriceChange = (e) => {
    dispatch(setMaxPrice(e.target.value))
  }

  const handleMinTicketsChange = (e) => {
    dispatch(setMinTickets(e.target.value))
  }

  const handleMaxTicketsChange = (e) => {
    dispatch(setMaxTickets(e.target.value))
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
    ],
  }

  const renderFilterInputs = () => {
    switch (selectedFilter) {
      case "date":
        return (
          <>
            <Input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              placeholder="Start Date"
            />
            <Input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              placeholder="End Date"
            />
          </>
        )
      case "price":
        return (
          <>
            <Input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Min Price"
            />
            <Input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Max Price"
            />
          </>
        )
      case "tickets":
        return (
          <>
            <Input
              type="number"
              value={minTickets}
              onChange={handleMinTicketsChange}
              placeholder="Min Tickets Sold"
            />
            <Input
              type="number"
              value={maxTickets}
              onChange={handleMaxTicketsChange}
              placeholder="Max Tickets Sold"
            />
          </>
        )
      default:
        return null
    }
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
      <FilterContainer>
        <Select value={chartType} onChange={handleChartTypeChange}>
          <option value="Line">Line Chart</option>
          <option value="Bar">Bar Chart</option>
          <option value="Pie">Pie Chart</option>
          <option value="Doughnut">Doughnut Chart</option>
          <option value="Radar">Radar Chart</option>
          <option value="PolarArea">Polar Area Chart</option>
        </Select>
        <Select value={selectedFilter} onChange={handleFilterChange}>
          <option value="">Select Filter</option>
          <option value="date">Date Range</option>
          <option value="price">Price Range</option>
          <option value="tickets">Tickets Sold Range</option>
        </Select>
        {renderFilterInputs()}
      </FilterContainer>

      <MobileFilterContainer>
        <Select value={chartType} onChange={handleChartTypeChange}>
          <option value="Line">Line Chart</option>
          <option value="Bar">Bar Chart</option>
          <option value="Pie">Pie Chart</option>
          <option value="Doughnut">Doughnut Chart</option>
          <option value="Radar">Radar Chart</option>
          <option value="PolarArea">Polar Area Chart</option>
        </Select>
        <Select value={selectedFilter} onChange={handleFilterChange}>
          <option value="">Select Filter</option>
          <option value="date">Date Range</option>
          <option value="price">Price Range</option>
          <option value="tickets">Tickets Sold Range</option>
        </Select>
        {selectedFilter && (
          <MobileFilterInputs>{renderFilterInputs()}</MobileFilterInputs>
        )}
      </MobileFilterContainer>

      {error && <div>Error: {error}</div>}
      <DashBoardOverView dashboardData={dashboardData} />
      <ChartContainer>{renderChart()}</ChartContainer>
    </Container>
  )
}

export default ChartComponent
