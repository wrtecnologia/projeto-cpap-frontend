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
    axios.get(`${BASE_URL}/cpap/eventos-mes`).then((response) => {
      const data = response.data as SaleSuccess[];
      const myLabels = data.map((x) => x.data);
      const mySeries = data.map((x) => x.eventos_hora);

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: "Eventos/hora",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },

    fill: {
      colors: ['#004762']
    },
    
    dataLabels: {
      style: {
        colors: ['#ffffff']
      }
    }
  };
  

  return (
    <Chart 
      options={{...options, xaxis: chartData.labels}}
      series={chartData.series}
      type="bar"
      height="800"
    />
  );
};

export default BarChart;
