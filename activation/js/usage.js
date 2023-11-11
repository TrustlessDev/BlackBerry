var data = {
    labels: [
        "Total Data",
        "Top-up Data",
        "Remains Data"
    ],
    datasets: [{
            data: [ 5.00, 1.00, (6 - 0.45)],
            backgroundColor: [
                "#36A2EB",
               "#36A2EB",
                "#ddd"
            ],
            hoverBackgroundColor: [
                "#f7a66b",
              "#f7a66b",
                "#f7a66b"
            ],
            borderWidth: 1,
            percentageInnerCutout: 40,
        }]
};

var ctx = document.getElementById("charts_container");

// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      cutoutPercentage: 70,
    	rotation: -1.55 ,
      circumference: 4.68,
      responsive: true,
      legend: {
        display: false
      },
  },

});