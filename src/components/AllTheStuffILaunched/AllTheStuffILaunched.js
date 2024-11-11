import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function AllTheStuffILaunched() {
  const projects = [
    {
      dates: "Summer 2018",
      project: "Tried marketing art for a friend's painting hobby.",
      outcome:
        "Ran Facebook ads, sold a bunch one-shot to a woman, earned $100 CAD commission, couldn't make another sale.",
    },
    {
      dates: "Summer 2019",
      project:
        "Started a software development consultancy called Antimatter with my friend.",
      outcome: "Lost around CAD $2K",
    },
    {
      dates: "2021-ongoing",
      project:
        "Started another software development consultancy called North P&D, alone this time.",
      outcome: "Grew to 220K CAD in revenue in 2024, still growing.",
    },
  ];

  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Dates
              </TableCell>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Project
              </TableCell>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Outcome
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((row) => (
              <TableRow
                key={row.dates}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Dates"
                >
                  {row.dates}
                </TableCell>
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Project"
                >
                  {row.project}
                </TableCell>
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Outcome"
                >
                  {row.outcome}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
