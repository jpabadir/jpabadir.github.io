import { Chart as ChartJS, ArcElement, PointElement, LineElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import './InvestmentPortfolio.css';
ChartJS.register(ArcElement, PointElement, LineElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function InvestmentPortfolio() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Security',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  };
  const lineData = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <h2>I like investing in stocks. Here's a breakdown of my portfolio</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 d-flex justify-content-center">
          <Doughnut data={data} className="PieChart" />
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <Line data={lineData} className="PieChart" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <table>
            <thead>
              <tr>
                <th>Security</th>
                <th>Number of Shares</th>
                <th>Cost Basis</th>
                <th>Price</th>
                <th>Total Percentage Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TSLA</td>
                <td>5</td>
                <td>240</td>
                <td>150</td>
                <td>-50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
