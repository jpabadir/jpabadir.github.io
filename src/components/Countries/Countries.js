import { useEffect, useState } from "react";
import Map from "./Countries.svg";

export default function Countries() {
  const [loaded, setLoaded] = useState(false);
  const countries = [
    "France",
    "United States",
    "Canada",
    "France",
    "Morocco",
    "Tunisia",
    "Egypt",
    "Switzerland",
    "Germany",
    "United Kingdom",
    "Spain",
    "Portugal",
    "Italy",
    "Ireland",
    "Netherlands",
    "Taiwan",
  ];

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.gstatic.com/charts/loader.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    window.google.charts.load("current", {
      packages: ["geochart"],
    });
    window.google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = window.google.visualization.arrayToDataTable([
        ["Country", "Whether Ive been"],
        ...countries.map((country) => [country, 1]),
      ]);

      var options = {
        colorAxis: { colors: ["#e31b23"] },
        legend: "none",
        enableRegionInteractivity: false,
      };

      var chart = new window.google.visualization.GeoChart(
        document.getElementById("regions_div")
      );

      chart.draw(data, options);
    }
  }, [loaded]);

  return (
    <div>
      <div className="mb-3">
        <span style={{ color: "red" }}>{countries.length}</span> countries so
        far. There are 195 countries in the world, so that's <span style={{ color: "red" }}>{Math.round((countries.length / 195) * 100)}%</span> done, <span style={{ color: "red" }}>{195 - countries.length}</span> to go.
      </div>
      <div id="regions_div" />
      {/* <img src={Map} alt="A map of the countries I've been to" style={{ width: '100%', height: '100%' }} /> */}
      Layovers don't count, and neither does merely driving / passing through a
      country on one's way to another.
    </div>
  );
}
