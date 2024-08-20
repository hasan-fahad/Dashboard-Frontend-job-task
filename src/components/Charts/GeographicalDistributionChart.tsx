import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const GeographicalDistributionChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData<'bar'>>({
        labels: [],
        datasets: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dashboard-job-task.onrender.com/geo_distribution'); // Ensure this is the correct API route
                const data = response.data;

                if (data && Array.isArray(data) && data.length > 0) {
                    const labels = data.map((entry: any) => entry._id || 'Unknown');
                    const customerCount = data.map((entry: any) => entry.count);

                    setChartData({
                        labels: labels,
                        datasets: [{
                            label: 'Customer Distribution by Country',
                            data: customerCount,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        }]
                    });
                } else {
                    setError('No data available');
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message || 'Unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                chartData && chartData.datasets.length > 0 && <Bar data={chartData} />
            )}
        </div>
    );
};

export default GeographicalDistributionChart;
