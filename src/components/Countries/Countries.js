import { geoPatterson } from "d3";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./Countries.css";

import markers from "./cities.json";

// const countries = [
//   "France",
//   "United States",
//   "Canada",
//   "France",
//   "Morocco",
//   "Tunisia",
//   "Egypt",
//   "Switzerland",
//   "Germany",
//   "United Kingdom",
//   "Spain",
//   "Portugal",
//   "Italy",
//   "Ireland",
//   "Netherlands",
//   "Taiwan",
// ];

export default function Countries(props) {
  const width = 800;
  const height = 420;

  const typesToColors = {
    visited: "red",
    layover: "blue",
    lived: "green",
    wannaGo: "purple",
  };

  return (
    <div>
      <ComposableMap
        style={{
          default: { outline: "none" },
          hover: { outline: "none" },
          pressed: { outline: "none" },
        }}
        projection="geoMercator"
        projectionConfig={{
          center: [0, 45],
          scale: 100,
        }}
        width={width}
        height={height}
      >
        <Geographies geography="./map.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset, type }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke={typesToColors[type ?? "visited"]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              // transform="translate(-12, -24)"
            >
              <circle cx="0" cy="0" r="1" />
              {/* <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /> */}
            </g>

            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fill: "#094E47", fontSize: "10px" }}
              className="heading4Med"
            >
              {/* {name} */}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      <div>
        <span style={{ color: "red" }}>Red</span> are cities I visited.{" "}
        <span style={{ color: "blue" }}>Blue</span> are cities I only had a layover
        in. <span style={{ color: "green" }}>Green</span> are cities I lived in.{" "}
        {/* <span style={{ color: "purple" }}>purple</span> are cities I want to
        visit. */}
      </div>
    </div>
  );
}
