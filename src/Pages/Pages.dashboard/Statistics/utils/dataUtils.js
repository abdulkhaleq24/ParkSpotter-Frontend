export const dummyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    ticketsSold: [650, 590, 800, 810, 560, 550, 400],
    revenueGenerated: [2800, 4800, 4000, 1900, 8600, 2700, 3800],
  }
  
  export const getFilteredData = (
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
  