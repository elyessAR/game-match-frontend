import React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

import "./SearchTable.css";

export const SearchTable = ({ retrieveData, tableTitle }) => {
  const [rows, setRows] = useState([]);
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await retrieveData(genre, platform);
    if (result) {
      setRows(result.data);
      setError("");
    } else {
      setRows([]);
      setError("No games with such genre/platform");
    }
  };

  return (
    <Paper className="paper-styles" elevation={3}>
      <Typography className="table-label-styles" variant="h6">
        {tableTitle}
      </Typography>
      <form className="table-header" onSubmit={handleSubmit}>
        <TextField
          className="item"
          size="small"
          type="text"
          id="platform"
          platform="platform"
          value={platform}
          onChange={handlePlatformChange}
          placeholder="Platform"
        />

        <TextField
          className="item"
          size="small"
          type="genre"
          id="genre"
          platform="genre"
          value={genre}
          onChange={handleGenreChange}
          placeholder="Genre"
        />

        <Button variant="contained" color="secondary" size="small " type="submit">
          Search
        </Button>
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="search table">
          <TableHead>
            <TableRow>
              <TableCell>userId</TableCell>
              <TableCell align="right">Game</TableCell>
              <TableCell align="right">Play Time</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right"> Platforms</TableCell>
            </TableRow>
          </TableHead>
          {rows && (
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell align="right">{row.game}</TableCell>
                  <TableCell align="right">{row.playTime}</TableCell>
                  <TableCell align="right">{row.genre}</TableCell>
                  <TableCell align="right">{row.platforms.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <p className="error-message">{error}</p>
    </Paper>
  );
};

SearchTable.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  retrieveData: PropTypes.func.isRequired,
};
