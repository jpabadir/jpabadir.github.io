import { useEffect, useState } from 'react';

export default function InvestmentPortfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.gstatic.com/charts/loader.js';
    scriptTag.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(scriptTag);
  });

  useEffect(() => {
    if (!loaded) return;

    window.google.charts.load('current', { packages: ['corechart'] });
    window.google.charts.setOnLoadCallback(drawPortfolioChart);

    function drawPortfolioChart() {
      var data = window.google.visualization.arrayToDataTable([
        ['Stock', 'Portfolio Percentage'],
        ['TSLA', 10],
        ['VOO', 10],
        ['TQQQ', 10],
        ['CCL', 10],
        ['NOBL', 10],
        ['QQQ', 10],
        ['ARKK', 10],
        ['META', 10],
        ['IJR', 10],
        ['TTCF', 10],
      ]);
      var chart = new window.google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data);
    }
  }, [loaded]);

  return (
    <div>
      <p>I like investing in stocks. Here's a breakdown of my portfolio</p>
      <div id="piechart"></div>
    </div>
  );
}
