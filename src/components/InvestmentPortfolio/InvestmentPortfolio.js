import {
  Chart as ChartJS,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./InvestmentPortfolio.css";
ChartJS.register(
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

export default function InvestmentPortfolio() {
  const data = {
    labels: [
      "SSO - 24.44%",
      "QQQ - 23.45%",
      "VOO - 15.59%",
      "TQQQ - 10.78%",
      "META - 7.99%",
      "QLD - 6.67%",
      "SCHD - 4.17%",
      "TSLA - 3.71%",
      "UPRO - 1.67%",
      "ARKK - 0.92%",
      "CCL - 0.61%",
    ],
    datasets: [
      {
        label: "Security",
        data: [
          24.64, 23.49, 15.68, 10.91, 7.76, 6.7, 3.8, 3.73, 1.69, 0.94, 0.65,
        ],
        backgroundColor: [
          "RGB(255, 99, 71)",
          "RGB(135, 206, 250)",
          "RGB(60, 179, 113)",
          "RGB(255, 215, 0)",
          "RGB(147, 112, 219)",
          "RGB(255, 69, 0)",
          "RGB(70, 130, 180)",
          "RGB(154, 205, 50)",
          "RGB(255, 20, 147)",
          "RGB(0, 191, 255)",
          "RGB(244, 164, 96)",
        ],
        borderWidTableCell: 1,
      },
    ],
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="mb-3">Hover for exact percentages</div>
      <Doughnut data={data} className="PieChart" />
    </div>
  );
}
