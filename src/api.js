import axios from "axios";

export const selectTopByPlayTime = async (genre, platform) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_ADDRESS}/games/select_top_by_playtime?genre=${genre}&platform=${platform}`
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const selectTopByPlayers = async (genre, platform) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_ADDRESS}/games/select_top_by_players?genre=${genre}&platform=${platform}`
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
