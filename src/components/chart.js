// // chart.js
// import React, { useState, useEffect } from 'react';
// import LineChart from "./LineChart";
// import { UserData } from "./Data";

// const Chart = () => {
//   // const [userData, setUserData] = useState({
//   //   labels: UserData.map((data) => data.value),
//   //   datasets: [
//   //     {
//   //       label: "Temperature",
//   //       data: UserData.map((data) => data.Temperature),
//   //       backgroundColor: "red",
//   //       borderColor: "red",
//   //       borderWidth: 2,
//   //     },
//   //     {
//   //       label: "Moisture",
//   //       data: UserData.map((data) => data.Moisture),
//   //       backgroundColor: "blue",
//   //       borderColor: "blue",
//   //       borderWidth: 2,
//   //     },
//   //     {
//   //       label: "Lights",
//   //       data: UserData.map((data) => data.Lights),
//   //       backgroundColor: "green",
//   //       borderColor: "green",
//   //       borderWidth: 2,
//   //     },
//   //   ],
//   // });
//   const [userData, setUserData] = useState({
//     labels: UserData.map((data) => data.id),
//     datasets: [
//       {
//         label: "Temperature",
//         data: UserData.map((data) => data.temperature),
//         backgroundColor: "red",
//         borderColor: "red",
//         borderWidth: 2,
//       },
//       {
//         label: "Moisture",
//         data: UserData.map((data) => data.moisture),
//         backgroundColor: "blue",
//         borderColor: "blue",
//         borderWidth: 2,
//       },
//       {
//         label: "Lights",
//         data: UserData.map((data) => data.lights),
//         backgroundColor: "green",
//         borderColor: "green",
//         borderWidth: 2,
//       },
//     ],
//   });

//   useEffect(() => {
//     // Simulate data update every 5 seconds
//     const intervalId = setInterval(() => {
//       setUserData((prevData) => {
//         // Generate new random data for simulation
//         const updatedData = {
//           labels: prevData.labels,
//           datasets: [
//             {
//               label: "Temperature",
//               data: prevData.labels.map(() => Math.floor(Math.random() * 100) + 1),
//               backgroundColor: "red",
//               borderColor: "red",
//               borderWidth: 2,
//             },
//             {
//               label: "Moisture",
//               data: prevData.labels.map(() => Math.floor(Math.random() * 10) + 1),
//               backgroundColor: "blue",
//               borderColor: "blue",
//               borderWidth: 2,
//             },
//             {
//               label: "Lights",
//               data: prevData.labels.map(() => Math.floor(Math.random() * 10) + 1),
//               backgroundColor: "green",
//               borderColor: "green",
//               borderWidth: 2,
//             },
//           ],
//         };

//         return updatedData;
//       });
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return <LineChart chartData={userData} className= "line" />;
// };

// export default Chart;


// chart.js
import React, { useState, useEffect } from 'react';
import LineChart from "./LineChart";
import { UserData } from "./Data";

const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: "Temperature",
        data: UserData.map((data) => data.temperature),
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Moisture",
        data: UserData.map((data) => data.moisture),
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Lights",
        data: UserData.map((data) => data.lights),
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    // Simulate data update every 5 seconds
    const intervalId = setInterval(() => {
      setUserData((prevData) => {
        // Generate new random data for simulation
        const updatedData = {
          labels: prevData.labels,
          datasets: [
            {
              label: "Temperature",
              data: prevData.labels.map(() => Math.floor(Math.random() * 10) + 1),
              backgroundColor: "red",
              borderColor: "red",
              borderWidth: 2,
            },
            {
              label: "Moisture",
              data: prevData.labels.map(() => Math.floor(Math.random() * 10) + 1),
              backgroundColor: "blue",
              borderColor: "blue",
              borderWidth: 2,
            },
            {
              label: "Lights",
              data: prevData.labels.map(() => Math.floor(Math.random() * 10) + 1),
              backgroundColor: "green",
              borderColor: "green",
              borderWidth: 2,
            },
          ],
        };

        return updatedData;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return <LineChart chartData={userData} />;
};

export default Chart;
