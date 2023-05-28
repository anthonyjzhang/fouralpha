import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./App.css";

export default function ArbTable({ arbData }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, background: "#000" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <h4>Percent</h4>
              </TableCell>
              <TableCell align="left">
                <h4>Event Date</h4>
              </TableCell>
              <TableCell align="left">
                <h4>Event</h4>
              </TableCell>
              <TableCell align="left">
                <h4>Bets</h4>
              </TableCell>
              <TableCell align="left">
                <h4>Books</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arbData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  <h4>{row.percent}</h4>
                </TableCell>
                <TableCell align="left">
                  <h4>{row.timestamp}</h4>
                </TableCell>
                <TableCell align="left">
                  <h4>{row.market}</h4>
                </TableCell>
                <TableCell align="left">
                  <h4>{row.team_1}</h4>
                  <h4>{row.team_2}</h4>
                </TableCell>
                <TableCell align="left">
                  <h4>
                    {row.price_1} {row.bookmaker_1}
                  </h4>
                  <h4>
                    {row.price_2} {row.bookmaker_2}
                  </h4>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
