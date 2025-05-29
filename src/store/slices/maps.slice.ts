import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertMapsArray } from "../../assets/levelAssets/mapsArray";
import { ConvertMapType } from "../../types";

const convertMaps = convertMapsArray();

export const mapsSlice = createSlice({
  name: "maps",
  initialState: convertMaps,
  reducers: {
    addMap(state, action: PayloadAction<ConvertMapType>) {
      state.unshift(action.payload);
    },
  },
});

export const { addMap } = mapsSlice.actions;
export default mapsSlice.reducer;
