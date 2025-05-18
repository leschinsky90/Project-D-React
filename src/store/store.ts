import { configureStore } from "@reduxjs/toolkit";
import playerParamsReducer from "./slices/playerParams.slice";
import gameParamsReducer from "./slices/gameParams.slice";
import mapsReducer from "./slices/maps.slice";
import enemiesReducer from "./slices/enemies.slice";

export const store = configureStore({
  reducer: {
    playerParamsReducer,
    gameParamsReducer,
    mapsReducer,
    enemiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
