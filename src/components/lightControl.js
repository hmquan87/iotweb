import loff from '../img/lightOff.png';
import lon from '../img/lightOn.png';


function changeColor(){
    var imgLight = document.getElementById('imgLight');
    var currentSrc = imgLight.src;
    imgLight.src = currentSrc.includes(loff) ? lon : loff;
}

export {changeColor};
