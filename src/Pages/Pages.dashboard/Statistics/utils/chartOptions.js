export const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
  };
  