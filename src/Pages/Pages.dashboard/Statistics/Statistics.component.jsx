import { useEffect, useState } from "react"

import { chartOptions } from "./Utils/chartOptions"

import {
  ChartContainer,
  Container,
  FilterContainer,
  Input,
  MobileFilterContainer,
  MobileFilterInputs,
  Select,
} from "./Statistics.styled"

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
  const [chartType, setChartType] = useState("Doughnut")
  const [selectedFilter, setSelectedFilter] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [minTickets, setMinTickets] = useState("")
  const [maxTickets, setMaxTickets] = useState("")
  const [dashboardData, setDashboardData] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    const token = localStorage.getItem("token")

    if (userId && token) {
      fetch(
        "https://parkspotter-backened.onrender.com/accounts/park_owner_dashboard/",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          setDashboardData(data)
        })
        .catch((error) => {
          setError(error)
          console.error("Error fetching dashboard data:", error)
        })
    } else {
      console.error("User ID or token not found in local storage.")
    }
  }, [])

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value)
  }

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value)
  }

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
  }

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value)
  }

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value)
  }

  const handleMinTicketsChange = (e) => {
    setMinTickets(e.target.value)
  }

  const handleMaxTicketsChange = (e) => {
    setMaxTickets(e.target.value)
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

      <DashBoardOverView dashboardData={dashboardData} />
      <ChartContainer>{renderChart()}</ChartContainer>
    </Container>
  )
}

export default ChartComponent
// original
