import { useState } from "react"
import styled from "styled-components"

import { FaTicketAlt } from "react-icons/fa"
import { FaMoneyBillWave } from "react-icons/fa"
import { FaCarAlt } from "react-icons/fa"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { FaCalendarDay } from "react-icons/fa"

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
import { Link } from "react-router-dom"

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

const Container = styled.div`
  // padding: 20px;
  background-color: #ffffff;
  color: #202123;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FilterContainer = styled.div`
  border: 2px solid #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  background: #202123;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px 15px;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileFilterContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }
`

const MobileFilterInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Select = styled.select`
  padding: 8px;
  font-size: 13px;
  border: 3px solid #5f9ea0;
  border-radius: 4px;
  outline: none;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`

const Input = styled.input`
  padding: 8px;
  font-size: 13px;
  border: 3px solid #264348;
  border-radius: 4px;
  outline: none;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`

const ChartContainer = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`

const DashBoardOverViewContainer = styled.div`
  background-color: #f3f3f9;
  padding: 30px 20px;
  width: 100%;
`
const DashBoardOverViewTopSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const DashBoardOverViewContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const DashBoardOverViewContainerHeader = styled.h1`
  font-size: 22px;
  font-weight: blod;
  color: #495057;
  margin-bottom: 10px;
`
const DashBoardOverViewContainerBody = styled.h1`
  font-size: 16px;
  font-weight: blod;
  margin-bottom: 20px;
  color: #878a99;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const TopSectionDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const TopSectionDateBox = styled.div`
  color: #202123;
  padding: 10px 35px;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 14px;
`
const TopSectionDateIcon = styled.div`
  background-color: #405189;
  padding: 10px 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    margin-bottom: 40px;
  }
`

const Card = styled.div`
  width: 24%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const CardTitle = styled.p`
  color: #777;
  font-size: 14px;
`

const CardValue = styled.h2`
  font-weight: bold;
  font-size: 22px;
  color: #404143;
  display: flex;
  align-items: baseline;
  flex-direction: row;
`
const CardFooter = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
const CardFooterText = styled(Link)`
  font-weight: bold;
  color: #333;
  font-size: 14px;
`

const CardFooterTextUnderLine = styled.hr`
  color: #0000cf;
  border: 1px solid #87cefa;
`
const CardFooterIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #daf4f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

const CardFooterIconEmployee = styled(CardFooterIcon)`
  background-color: #fef4e4;
`
const CardFooterIconRevenue = styled(CardFooterIcon)`
  background-color: #daf4f0;
`
const CardFooterIconTickets = styled(CardFooterIcon)`
  background-color: #dff0fa;
`
const CardFooterIconBookings = styled(CardFooterIcon)`
  background-color: #e2e5ed;
`

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

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#202123",
          font: {
            family:
              "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 14,
            style: "italic",
            weight: "bold",
          },
          padding: 20,
          boxWidth: 20,
        },
      },
      title: {
        display: true,
        text: "Sales and Revenue Chart",
        font: {
          family:
            "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 24,
          weight: "bold",
        },
        color: "#202123",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      subtitle: {
        display: true,
        text: "Tickets sold and revenue generated over the months",
        font: {
          family:
            "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 18,
          style: "italic",
        },
        color: "#505050",
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: {
          family:
            "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 16,
          weight: "bold",
        },
        bodyFont: {
          family:
            "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 14,
        },
        footerFont: {
          family:
            "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: "italic",
        },
        padding: 10,
        boxPadding: 5,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        caretSize: 5,
        cornerRadius: 4,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#202123",
          font: {
            family:
              "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            weight: "bold",
          },
          padding: 10,
        },
        grid: {
          color: "rgba(200,200,200,0.2)",
          lineWidth: 1,
        },
        title: {
          display: true,
          text: "Months",
          color: "#202123",
          font: {
            family:
              "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 14,
            weight: "bold",
          },
          padding: {
            top: 10,
          },
        },
      },
      y: {
        ticks: {
          color: "#202123",
          font: {
            family:
              "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            weight: "bold",
          },
          padding: 10,
        },
        grid: {
          color: "rgba(200,200,200,0.2)",
          lineWidth: 1,
        },
        title: {
          display: true,
          text: "Values",
          color: "#202123",
          font: {
            family:
              "'Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 14,
            weight: "bold",
          },
          padding: {
            bottom: 10,
          },
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
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

      <DashBoardOverViewContainer>
        <DashBoardOverViewTopSectionContainer>
          <DashBoardOverViewContainerTitle>
            <DashBoardOverViewContainerHeader>
              Good Morning, User!
            </DashBoardOverViewContainerHeader>
            <DashBoardOverViewContainerBody>
              Here&apos;s what&apos;s happening with your parking-lot today.
            </DashBoardOverViewContainerBody>
          </DashBoardOverViewContainerTitle>
          <TopSectionDateContainer>
            <TopSectionDateBox>
              <span style={{ fontWeight: "600" }}>01 Jan, 2024</span>
              <span style={{ fontWeight: "bold", color: "#405189" }}>
                &nbsp;&nbsp;To&nbsp;&nbsp;
              </span>
              <span style={{ fontWeight: "600" }}>30 Jan, 2024</span>
            </TopSectionDateBox>
            <TopSectionDateIcon>
              <FaCalendarDay
                color="#fff"
                style={{ width: "130%", height: "130%" }}
              />
            </TopSectionDateIcon>
          </TopSectionDateContainer>
        </DashBoardOverViewTopSectionContainer>
        <CardContainer>
          <Card>
            <CardTitle>Tickets Sold:&nbsp;&nbsp;</CardTitle>
            <CardValue>
              3265<p style={{ fontSize: "16px" }}></p>
            </CardValue>
            <CardFooter>
              <CardFooterText>
                View Paid Tickets
                <CardFooterTextUnderLine />
              </CardFooterText>
              <CardFooterIconTickets>
                <FaTicketAlt
                  color="#299cdb"
                  style={{ width: "60%", height: "60%" }}
                />
              </CardFooterIconTickets>
            </CardFooter>
          </Card>

          <Card>
            <CardTitle>Total Revenue:&nbsp;&nbsp;</CardTitle>
            <CardValue>
              54380<p style={{ fontSize: "16px" }}>৳</p>
            </CardValue>
            <CardFooter>
              <CardFooterText>
                View Transactions
                <CardFooterTextUnderLine />
              </CardFooterText>
              <CardFooterIconRevenue>
                <FaMoneyBillWave
                  color="#0ab39c"
                  style={{ width: "60%", height: "60%" }}
                />
              </CardFooterIconRevenue>
            </CardFooter>
          </Card>
          <Card>
            <CardTitle>Total Bookings:&nbsp;&nbsp;</CardTitle>
            <CardValue>
              7921<p style={{ fontSize: "16px" }}></p>
            </CardValue>
            <CardFooter>
              <CardFooterText>
                View Bookings
                <CardFooterTextUnderLine />
              </CardFooterText>
              <CardFooterIconBookings>
                <FaCarAlt
                  color="#405189"
                  style={{ width: "60%", height: "60%" }}
                />
              </CardFooterIconBookings>
            </CardFooter>
          </Card>
          <Card>
            <CardTitle>Employee Expenses:&nbsp;&nbsp;</CardTitle>
            <CardValue>
              35000<p style={{ fontSize: "16px" }}>৳</p>
            </CardValue>
            <CardFooter>
              <CardFooterText>
                View Salaries
                <CardFooterTextUnderLine />
              </CardFooterText>
              <CardFooterIconEmployee>
                <FaMoneyCheckAlt
                  color="#f7b84b"
                  style={{ width: "60%", height: "60%" }}
                />
              </CardFooterIconEmployee>
            </CardFooter>
          </Card>
        </CardContainer>
      </DashBoardOverViewContainer>
      <ChartContainer>{renderChart()}</ChartContainer>
    </Container>
  )
}

export default ChartComponent
// original
