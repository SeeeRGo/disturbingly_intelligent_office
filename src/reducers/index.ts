import { createSlice } from "@reduxjs/toolkit";
import { getSensorData } from "../api";
import { SensorData } from "../api/types";
import { RootState } from "../store";

const initialState: SensorData[] = [];

const sensorsSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSensorData.fulfilled, (_, action) => action.payload)
  },
});

export const selectRoot = (state: RootState) => state.sensors

export default sensorsSlice.reducer
