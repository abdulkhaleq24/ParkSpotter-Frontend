import { useEffect, useRef } from "react"
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2"
import { chartOptions } from "../utils/chartOptions"
import styled from "styled-components"

const ChartContainer = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`

const ChartRender = ({ chartType, filteredData }) => {
  const chartRef = useRef(null)

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
    ],
  }

  const renderChart = () => {
    switch (chartType) {
      case "Line":
        return <Line ref={chartRef} data={data} options={chartOptions} />
      case "Bar":
        return <Bar ref={chartRef} data={data} options={chartOptions} />
      case "Pie":
        return <Pie ref={chartRef} data={data} options={chartOptions} />
      case "Doughnut":
        return <Doughnut ref={chartRef} data={data} options={chartOptions} />
      case "Radar":
        return <Radar ref={chartRef} data={data} options={chartOptions} />
      case "PolarArea":
        return <PolarArea ref={chartRef} data={data} options={chartOptions} />
      default:
        return null
    }
  }

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy()
      }
    }
  }, [chartType, filteredData])

  return <ChartContainer>{renderChart()}</ChartContainer>
}

export default ChartRender
