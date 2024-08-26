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
      "SSO - 25%",
      "QQQ - 24%",
      "VOO - 16%",
      "TQQQ - 11%",
      "META - 7%",
      "QLD - 7%",
      "TSLA - 4%",
      "SCHD - 2%",
      "UPRO - 2%",
      "ARKK - 1%",
      "CCL 1%",
    ],
    datasets: [
      {
        label: "Security",
        data: [25, 24, 16, 11, 7, 7, 4, 2, 2, 1, 1],
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
      <Doughnut
        data={data}
        className="PieChart"
      />
    </div>
  );
}
