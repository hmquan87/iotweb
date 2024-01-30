import React, { useState, useEffect } from 'react';
import LineChart from "./LineChart";
import { UserData } from "./Data";

const createLinearGradient = (context, colors) => {
  const chart = context.chart;
  const { ctx, chartArea } = chart;

  if (!chartArea) {
    return null;
  }

  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);

  colors.forEach((color, index) => {
    gradient.addColorStop(index, color);
  });

  return gradient;
};

const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: "Temperature",
        data: UserData.map((data) => data.temperature),
        backgroundColor: (context) => createLinearGradient(context, ['#FD5A68', '#FC8884']),
        borderColor: (context) => createLinearGradient(context, ['#FD5A68', '#FC8884']),
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Moisture",
        data: UserData.map((data) => data.moisture),
        backgroundColor: (context) => createLinearGradient(context, ['#1CA7EC', '#4ADEDE']),
        borderColor: (context) => createLinearGradient(context, ['#1CA7EC', '#4ADEDE']),
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Lights",
        data: UserData.map((data) => data.lights),
        backgroundColor: (context) => createLinearGradient(context, ['#E5A663', '#FAEE9E']),
        borderColor: (context) => createLinearGradient(context, ['#E5A663', '#FAEE9E']),
        borderWidth: 2,
        tension: 0.4,
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
              backgroundColor: (context) => createLinearGradient(context, ['#FD5A68', '#FC8884']),
              borderColor: (context) => createLinearGradient(context, ['#FD5A68', '#FC8884']),
              borderWidth: 2,
              tension: 0.4,
            },
            {
              label: "Moisture",
              data: prevData.labels.map(() => Math.floor(Math.random() * 10) + 1),
              backgroundColor: (context) => createLinearGradient(context, ['#1CA7EC', '#4ADEDE']),
              borderColor: (context) => createLinearGradient(context, ['#1CA7EC', '#4ADEDE']),
              borderWidth: 2,
              tension: 0.4,
            },
            {
              label: "Lights",
              data: prevData.labels.map(() => Math.floor(Math.random() * 10) + 1),
              backgroundColor: (context) => createLinearGradient(context, ['#E5A663', '#FAEE9E']),
              borderColor: (context) => createLinearGradient(context, ['#E5A663', '#FAEE9E']),
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        };

        return updatedData;
      });
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return <LineChart chartData={userData} />;
};

export default Chart;



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

