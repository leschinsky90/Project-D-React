import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mapsArray from "../../assets/levelAssets/mapsArray";
import { MapType } from "../../types";

export const mapsSlice = createSlice({
  name: "maps",
  initialState: mapsArray,
  reducers: {
    addMap(state, action: PayloadAction<MapType>) {
      state.unshift(action.payload);
    },
  },
});

export const { addMap } = mapsSlice.actions;
export default mapsSlice.reducer;
