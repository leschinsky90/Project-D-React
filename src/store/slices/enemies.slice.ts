import { createSlice } from "@reduxjs/toolkit";
import enemiesArray from "../../assets/levelAssets/enemiesArray";

export const enemiesSlice = createSlice({
  name: "enemies",
  initialState: enemiesArray,
  reducers: {},
});

export default enemiesSlice.reducer;
