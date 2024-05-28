export const chartOptions = {
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