import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RepeatCustomersChart: React.FC = () => {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [{
            label: 'Repeat Customers',
            data: [] as number[],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
        }]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dashboard-job-task.onrender.com/repeat_customers?interval=monthly');
                const data = response.data;

                const labels = data.map((entry: any) => `${entry._id.year}-${String(entry._id.month).padStart(2, '0')}`);
                const repeatCustomers = data.map((entry: any) => entry.repeatCustomers);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Repeat Customers',
                        data: repeatCustomers,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
          
            {chartData.labels.length > 0 && chartData.datasets[0].data.length > 0 ? (
                <Line data={chartData} />
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default RepeatCustomersChart;
