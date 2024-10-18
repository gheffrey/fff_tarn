import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { VectorMap } from "react-jvectormap";
import flatpickr from "flatpickr";

function Dashboard() {
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = document
      .getElementById("chartjs-dashboard-line")
      .getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
    gradient.addColorStop(1, "rgba(215, 227, 244, 0)");

    // Line chart
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Sales ($)",
            fill: true,
            backgroundColor: gradient,
            borderColor: "primary", // Assuming 'primary' is a valid theme color variable
            data: [
              2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917,
              3327,
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          intersect: false,
        },
        hover: {
          intersect: true,
        },
        plugins: {
          filler: {
            propagate: false,
          },
        },
        scales: {
          xAxes: [
            {
              reverse: true,
              gridLines: {
                color: "rgba(0,0,0,0.0)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 1000,
              },
              display: true,
              borderDash: [3, 3],
              gridLines: {
                color: "rgba(0,0,0,0.0)",
              },
            },
          ],
        },
      },
    });

    // Map initialization
    const markers = [
      { latLng: [31.230391, 121.473701], name: "Shanghai" },
      { latLng: [28.70406, 77.102493], name: "Delhi" },
      { latLng: [6.524379, 3.379206], name: "Lagos" },
      { latLng: [35.689487, 139.691711], name: "Tokyo" },
      { latLng: [23.12911, 113.264381], name: "Guangzhou" },
      { latLng: [40.7127837, -74.0059413], name: "New York" },
      { latLng: [34.052235, -118.243683], name: "Los Angeles" },
      { latLng: [41.878113, -87.629799], name: "Chicago" },
      { latLng: [51.507351, -0.127758], name: "London" },
      { latLng: [40.416775, -3.70379], name: "Madrid" },
    ];

    const mapInstance = new VectorMap({
      map: "world",
      container: mapRef.current,
      markers: markers,
      markerStyle: {
        initial: {
          r: 9,
          strokeWidth: 7,
          stokeOpacity: 0.4,
          fill: "primary", // Assuming 'primary' is a valid theme color variable
        },
        hover: {
          fill: "primary", // Assuming 'primary' is a valid theme color variable
          stroke: "primary", // Assuming 'primary' is a valid theme color variable
        },
      },
      zoomOnScroll: false,
    });

    // Update map size on window resize
    window.addEventListener("resize", () => {
      mapInstance.updateSize();
    });

    const date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    const defaultDate =
      date.getUTCFullYear() +
      "-" +
      (date.getUTCMonth() + 1) +
      "-" +
      date.getUTCDate();
    flatpickr(document.getElementById("datetimepicker-dashboard"), {
      inline: true,
      prevArrow: '<span title="Previous month">&laquo;</span>',
      nextArrow: '<span title="Next month">&raquo;</span>',
      defaultDate: defaultDate,
    });
  }, []);

  return (
    <div>
      <canvas id="chartjs-dashboard-line"></canvas>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
      <input id="datetimepicker-dashboard" />
    </div>
  );
}

export default Dashboard;
