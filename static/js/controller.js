
// toggle navbar function defintion
// toggle navbar function defintion
function toggleNavbarWidth() {
  const navbar = document.querySelector('.navbar_desk');
  const imgButtonSmall = document.querySelector('.toogle_btn_smallsize');
  const allDivs = navbar.querySelectorAll('div');
  const navbarSectionInner = navbar.querySelector('.navbar_section_inner');
  const dashboardNavTitle = navbar.querySelector('.dashbord_nav_title');
  const logoContainer = navbar.querySelector('.logo_Container')

  if (navbar.style.width === '5%') {
    // Expand the navbar
    navbar.style.width = 'auto';
    imgButtonSmall.style.display = 'none';
    allDivs.forEach(div => {
      div.style.display = 'flex';
      if (div === navbarSectionInner) {
        div.style.flexDirection = 'column';
      }
    });
    dashboardNavTitle.style.display = 'block';
  } else {
    // Collapse the navbar
    navbar.style.width = '5%';
    imgButtonSmall.style.display = 'block';
    allDivs.forEach(div => {
      div.style.display = 'none';
    });
    navbarSectionInner.style.flexDirection = 'column'; // Ensure it is set to column on collapse
    dashboardNavTitle.style.display = 'none';
    logoContainer.style.display = 'none';
  }
}



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














