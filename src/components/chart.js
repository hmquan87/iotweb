// chart.js
import React, { useState } from 'react';
import LineChart from "./LineChart";
import { UserData } from "./Data";

const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.value),
    datasets: [
      {
        label: "Temperature",
        data: UserData.map((data) => data.Temperature),
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Moisture",
        data: UserData.map((data) => data.Moisture),
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Lights",
        data: UserData.map((data) => data.Lights),
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });

  return <LineChart chartData={userData} />;
};

export default Chart;
