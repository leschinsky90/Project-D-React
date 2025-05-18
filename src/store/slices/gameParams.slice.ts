import { createSlice } from "@reduxjs/toolkit";
import mapsArray from "../../assets/levelAssets/mapsArray";

const gameInitial = {
  selectedLevel: 1,
  debugMode: true,
};

export const gameParamsSlice = createSlice({
  name: "game",
  initialState: gameInitial,
  reducers: {
    nextLevel(state) {
      if (state.selectedLevel < mapsArray.length) state.selectedLevel++;
    },
    prevLevel(state) {
      if (state.selectedLevel > 1) state.selectedLevel--;
    },
    debugModTurnOn(state) {
      state.debugMode = true;
    },
    debugModTurnOff(state) {
      state.debugMode = false;
    },
  },
});

export const { nextLevel, prevLevel } = gameParamsSlice.actions;
export default gameParamsSlice.reducer;
