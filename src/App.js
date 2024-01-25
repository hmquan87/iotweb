import React, {useState} from 'react';
import './css/App.css';
import loff from './img/lightOff.png';
import fan from './img/fan.png';
import { WiThermometer, WiHumidity } from "react-icons/wi";
import { IoSparklesOutline } from "react-icons/io5";
import { toggleRotation } from './components/fanControl';
import { changeColor } from './components/lightControl';
import { updateTemperature } from './components/updateTemperature';
import useRandomNumber from './components/testRandomNumber';
import 'bootstrap/dist/css/bootstrap.css';
import LineChart from "./components/LineChart";
import { UserData } from "./components/Data";



function App() {

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

  const randomNumber = useRandomNumber();
 
  return (
    <div className="main" >
        <div className="top">
            <div className="pic" style={customColor1}>              
                <p id="text1" className="col-6 mt-3 my-4" >{randomNumber}°C</p>                
                <WiThermometer className="col-6" id="thermometer" style={customSizeImgIcons} onLoadCapture={updateTemperature}/>
            </div>
            <div className="pic" style={customColor2}>
              <p className="col-6 mt-3 my-4">{randomNumber} %</p>
              <WiHumidity id="humidity" style={customSizeImgIcons2}/>
            </div>
            <div className="pic" style={customColor3}>
              <p className="col-6 mt-3 my-4">{randomNumber} cd</p>
              <IoSparklesOutline id="sparkles" style={customSizeImgIcons1}/>
            </div>
        </div>
        <div className="botton">
            <div className="botton-left">
              <LineChart chartData={userData} />
            </div>
            <div className="botton-right" >
              <div className="pic1" style={customPic1}>
                <img id= "imgLight" src={loff} alt="" style={customSizeImg}/>
                <div id="wrapper">
                  <input type="checkbox" className="switch-toggle" id="light-dark" onClick={changeColor}/>
                </div>
              </div>
              <div className="pic1" style={customPic2}>
                <img id= "imgFan" src={fan} alt="" style={customSizeImg}/>
                <div id="wrapper">
                  <input type="checkbox" className="switch-toggle" id="fan" onClick={toggleRotation}/>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

const customSizeImg ={
  width: '150px',
  height: '150px',
  Right: '1vh',
};
const customSizeImgIcons ={
  width: '150px',
  height: '150px',
  marginTop: '30px',
};
const customSizeImgIcons1 ={
  width: '100px',
  height: '100px',
  marginTop: '45px',
  marginLeft: '30px',
};
const customSizeImgIcons2 ={
  width: '150px',
  height: '150px',
  marginTop: '15px',
  marginLeft: '',
};
const customPic1 ={
  marginLeft: '25px',
  marginTop: '15px',
};
const customPic2 ={
  marginLeft: '25px',
  marginTop: '25px',
};

const customColor1 = {
  background: 'linear-gradient(to bottom, #D45769, #E69D45)',
  marginLeft: '25px', 
};
const customColor2 = {
  background: 'linear-gradient(to bottom, #1CA7EC, #4ADEDE)',
  marginLeft: '50px',
};
const customColor3 = {
  background: 'linear-gradient(to bottom, #FFDD94, #FA897B)',
  marginLeft: '50px',
};

export default App;

