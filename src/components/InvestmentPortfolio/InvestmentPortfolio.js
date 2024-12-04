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
      "SSO - 24.14%",
      "QQQ - 22.28%",
      "VOO - 14.61%",
      "TQQQ - 11.60%",
      "META - 7.32%",
      "QLD - 6.75%",
      "SCHD - 4.95%",
      "TSLA - 4.75%",
      "UPRO - 1.74%",
      "ARKK - 1.07%",
      "CCL - 0.80%",
    ],
    datasets: [
      {
        label: "Security",
        data: [
          24.14, 22.28, 14.61, 11.6, 7.32, 6.75, 4.95, 4.75, 1.74, 1.07, 0.8,
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
      <Doughnut data={data} className="PieChart" />
    </div>
  );
}
