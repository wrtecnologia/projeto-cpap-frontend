import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

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

const DonutChart = () => {

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
		axios.get(`${BASE_URL}/cpap/media-eventos-mes`)
			.then((response) => {
				const data = response.data as SaleSum[];
				const myLabels = data.map(x => x.data);
				const mySeries = data.map(x => x.eventos_hora);

				setChartData({
					labels: {
					  categories: myLabels,
					},
					series: [
					  {
						name: "IAH médio do mês",
						data: mySeries,
					  },
					],
				  });
			});
	}, []);  
    
	
    const options = {
		legend: {
			show: true
		},

		plotOptions: {
			bar: {
			  horizontal: false,
			},
		  },

		fill: {
			colors: ['#2d3e70']
		  },
	  
	}

	return (
		<Chart
			options={{ ...options, xaxis: chartData.labels }}
			series={chartData.series}
			type="bar"
			height="400"
		/>

	);
}

export default DonutChart;