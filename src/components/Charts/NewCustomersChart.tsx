import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const NewCustomersChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData<'line'>>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dashboard-job-task.onrender.com/new_customers?interval=monthly');
                const data = response.data;

                const labels = data.map((entry: any) => `${entry._id.month}/${entry._id.year}`);
                const newCustomers = data.map((entry: any) => entry.newCustomers);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'New Customers',
                        data: newCustomers,
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
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
            
            {chartData && chartData.datasets.length > 0 && <Line data={chartData} />}
        </div>
    );
};

export default NewCustomersChart;
