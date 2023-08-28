import { useEffect, useState } from "react";
import Map from './Countries.svg';

export default function Countries() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.gstatic.com/charts/loader.js';
    scriptTag.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    window.google.charts.load('current', {
      packages: ['geochart'],
    });
    window.google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = window.google.visualization.arrayToDataTable([
        ['Country', 'Whether Ive been'],
        ['France', 1],
        ['United States', 1],
        ['Canada', 1],
        ['France', 1],
        ['Morocco', 1],
        ['Tunisia', 1],
        ['Egypt', 1],
        ['Switzerland', 1],
        ['Germany', 1],
        ['United Kingdom', 1],
        ['Spain', 1],
        ['Portugal', 1],
        ['Italy', 1],
        ['Ireland', 1],
        ['Netherlands', 1],
      ]);

      var options = {
        colorAxis: { colors: ['#e31b23'] },
        legend: 'none',
        enableRegionInteractivity: false,
      };

      var chart = new window.google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data, options);
    }
  }, [loaded]);

  return (
    <div>
      <div id="regions_div" />
      {/* <img src={Map} alt="A map of the countries I've been to" style={{ width: '100%', height: '100%' }} /> */}
      Layovers don't count, and neither does merely driving / passing through a country on one's way to another.
    </div>
  );
}
