import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const TotalSalesChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData<'line', number[]>>({
        labels: [],
        datasets: [{
            label: 'Total Sales',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }],
    });

    const chartRef = useRef<Chart<'line', number[]>>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dashboard-job-task.onrender.com/total_sales?interval=monthly');
                const data = response.data;

                const labels = data.map((entry: any) => `${entry._id.month}/${entry._id.year}`);
                const totalSales = data.map((entry: any) => entry.totalSales);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Total Sales',
                        data: totalSales,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                    }]
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        // Cleanup function to destroy chart instance
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            
            <Line ref={chartRef} data={chartData} />
        </div>
    );
};

export default TotalSalesChart;
