import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { BASE_URL } from "utils/requests";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/logs`).then((response) => {
      const data = response.data as SaleSuccess[];
      const myLabels = data.map((x) => x.data);
      const mySeries = data.map((x) => x.eventos_hora);

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: "Eventos",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="300"
    />
  );
};

export default BarChart;
