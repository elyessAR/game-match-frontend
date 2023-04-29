import React from "react";
import { SearchTable } from "./components/SearchTable";
import { selectTopByPlayTime, selectTopByPlayers } from "./api";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl">
      <SearchTable retrieveData={selectTopByPlayTime} tableTitle={"Search for games with the highest playtime"} />
      <SearchTable retrieveData={selectTopByPlayers} tableTitle={"Search for games with the highest unique users"} />
    </Container>
  );
}

export default App;
