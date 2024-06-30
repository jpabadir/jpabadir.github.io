import books from "./books.json";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Books.css";

export default function Books() {
  return (
    <div>
      <div>
        Only books read from beginning to end count. We've all started books and
        never finished them.
      </div>
      <div style={{ fontSize: "15px", color: "grey" }}>
        <span style={{ color: "blue" }}>Light blue</span> books are being read
        right now. As we speak. There's{" "}
        <span style={{ color: "blue" }}>
          {books.filter((book) => !book.dateFinished).length}
        </span>{" "}
        of them.
      </div>
      <TableContainer className="mt-4">
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
                Language
              </TableCell>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Author
              </TableCell>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Date Started
              </TableCell>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Date Finished
              </TableCell>
              <TableCell
                sx={{
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                }}
              >
                Format
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row) => (
              <TableRow
                key={row.title}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                style={{ backgroundColor: row.dateFinished ? "" : "lightblue" }}
              >
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Language"
                >
                  {row.language}
                </TableCell>
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Author"
                >
                  {row.author}
                </TableCell>
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Title"
                >
                  {row.title}
                </TableCell>
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Date Started"
                >
                  {row.dateStarted}
                </TableCell>
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Date Finished"
                >
                  {row.dateFinished}
                </TableCell>
                <TableCell
                  sx={{ color: "inherit", fontSize: "inherit" }}
                  label="Format"
                >
                  {row.formats ? (
                    row.formats.map((format) => (
                      <div className={"pill pill-" + format.toLowerCase()}>
                        {format}
                      </div>
                    ))
                  ) : (
                    <div className="pill pill-written">Written</div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
