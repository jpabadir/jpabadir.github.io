import { geoPatterson } from "d3";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./Countries.css";

import cities from "./cities.json";

const countries = [... new Set(cities.filter((city) => city.type !== "layover").map((city) => city.country))];

export default function Countries(props) {
  const width = 800;
  const height = 420;

  const typesToColors = {
    visited: "red",
    layover: "blue",
    lived: "green",
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
                fill={
                  countries.includes(geo.properties.name)
                    ? "lightblue"
                    : "#EAEAEC"
                }
                stroke={
                  countries.includes(geo.properties.name)
                    ? "darkblue"
                    : "#D6D6DA"
                }
              />
            ))
          }
        </Geographies>
        {cities.map(({ name, coordinates, markerOffset, type }) => (
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
        <span style={{ color: "red" }}>Red</span> are cities I visited (
        <span style={{ color: "red" }}>
          {cities.filter((marker) => !marker.type).length}
        </span>
        ). <span style={{ color: "blue" }}>Blue</span> are cities I only had a
        layover in (
        <span style={{ color: "blue" }}>
          {cities.filter((marker) => marker.type == "layover").length}
        </span>
        ). <span style={{ color: "green" }}>Green</span> are cities I lived in (
        <span style={{ color: "green" }}>
          {cities.filter((marker) => marker.type == "lived").length}
        </span>
        ).{" "}
        <div>{countries.length} countries visited in total.</div>
      </div>
    </div>
  );
}
