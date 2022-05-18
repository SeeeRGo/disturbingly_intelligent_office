import React, { useEffect } from "react";
import { getSensorData } from "./api";
import { SensorData } from "./components/SensorData";
import { useAppDispatch } from "./hooks";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSensorData());
  }, [dispatch])
  return (
    <SensorData />
  );
};
