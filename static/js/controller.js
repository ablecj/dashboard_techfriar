
// toggle navbar function defintion



      const ctx = document.getElementById("doughnutChart").getContext("2d");
      const doughnutChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Incomplete", "Pending approval", "Approved"],
          datasets: [
            {
              data: [5, 3, 13], // Replace with dynamic values
              backgroundColor: ["#FFA500", "#FF6347", "#32CD32"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "70%",
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      // Function to update chart data
      function updateChart(incomplete, pending, approved) {
        doughnutChart.data.datasets[0].data = [incomplete, pending, approved];
        doughnutChart.update();
      }

      // Example: Update chart with new data
      updateChart(7, 5, 9);

      const orderItems = document.querySelectorAll('.order-item');

      orderItems.forEach(item => {
          item.querySelector('.toggle-icon').addEventListener('click', () => {
              item.classList.toggle('expanded');
          });
      });














