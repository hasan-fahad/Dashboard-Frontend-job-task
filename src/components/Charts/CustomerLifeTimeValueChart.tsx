import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CustomerLifetimeValueChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData<'line'>>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dashboard-job-task.onrender.com/lifetime_value');
                const data = response.data;

                const labels = data.map((entry: any) => `${entry.month}/${entry.year}`);
                const lifetimeValue = data.map((entry: any) => entry.cohortLifetimeValue);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Customer Lifetime Value by Cohorts',
                        data: lifetimeValue,
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
    }, []);

    return (
        <div>
            <Line data={chartData} />
        </div>
    );
};

export default CustomerLifetimeValueChart;
