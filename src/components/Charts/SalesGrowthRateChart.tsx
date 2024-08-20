import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const SalesGrowthRateChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData<'line'>>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dashboard-job-task.onrender.com/sales_growth_rate');
                const data = response.data;

                const labels = data.map((entry: any) => `${entry._id.month}/${entry._id.year}`);
                const growthRates = data.map((entry: any) => entry.growthRate * 100);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Sales Growth Rate (%)',
                        data: growthRates,
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        fill: true,
                    }]
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            
            {chartData.labels.length > 0 && chartData.datasets.length > 0 && <Line data={chartData} />}
        </div>
    );
};

export default SalesGrowthRateChart;
