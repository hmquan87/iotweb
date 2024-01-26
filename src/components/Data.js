// export const UserData = [
//   {
//     id: 1,
//     value: 1,
//     Temperature: 10,
//     Moisture: 2,
//     Lights: 2,
//   },
//   {
//     id: 2,
//     value: 2,
//     Temperature: 22,
//     Moisture: 4,
//     Lights: 9,
//   },
//   {
//     id: 3,
//     value: 3,
//     Temperature: 33,
//     Moisture: 7,
//     Lights: 5,
//   },
//   {
//     id: 4,
//     value: 4,
//     Temperature: 4,
//     Moisture: 1,
//     Lights: 3,
//   },
//   {
//     id: 5,
//     value: 5,
//     Temperature: 1,
//     Moisture: 9,
//     Lights: 7,
//   },
// ];


//// part2


// const getRandomValue = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const generateRandomUserData = () => {
//   const userData = [];

//   for (let id = 1; id <= 15; id++) {
//     const randomTemperature = getRandomValue(1, 10);
//     const randomMoisture = getRandomValue(1, 10);
//     const randomLights = getRandomValue(1, 10);

//     userData.push({
//       id,
//       temperature: randomTemperature,
//       moisture: randomMoisture,
//       lights: randomLights,
//     });
//   }

//   return userData;
// };

// export const UserData = generateRandomUserData();


const fetchDataFromDatabase = async () => {
  try {
    const response = await fetch('your-api-endpoint'); // Replace with your actual API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    return [];
  }
};

const generateUserDataFromDatabase = async () => {
  const dataFromDatabase = await fetchDataFromDatabase();

  if (dataFromDatabase.length === 0) {
    console.error('No data fetched from the database.');
    return [];
  }

  const userData = dataFromDatabase.map((item, index) => ({
    id: index + 1,
    temperature: item.temperature,
    moisture: item.moisture,
    lights: item.lights,
  }));

  return userData;
};

export const UserData = await generateUserDataFromDatabase();

