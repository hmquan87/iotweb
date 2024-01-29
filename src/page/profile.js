import React, { useState } from 'react';
import profile from '../img/img.jpg';
import face from '../img/th.jpg';
import inta from '../img/inta.jpg';
import tiktok from '../img/tik.png';
import '../css/profile.css'

const Profile = () => {

    // return (
    //     <div className="profile">
    //         <div className="left">
    //             <img src={profile} alt="" />
    //             <table class="horizontal-table">
    //                 <thead>
    //                     <tr>
    //                         <th>ID</th>
    //                         <th>Name</th>
    //                         <th>Email</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td>1</td>
    //                         <td>John Doe</td>
    //                         <td>john@example.com</td>
                            
    //                     </tr>
                        
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // )
    const [user, setUser] = useState({
        name: 'Hoàng Minh Quân',
        age: 25,
        email: 'quanhm.872002@gmail.com',
        cardid: 'B20DCPT159',
      });
    return (
      <div className="profile">
          <img id="avt" src={profile} alt="" />
          <div className="body">
              <h1 style={{textAlign:'center', marginLeft:'-30vh', fontSize:'5vh'}}>{user.name}</h1>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>CardID:</strong> {user.cardid}</p>
          </div>
          <div className="link" style={{display:'flex', marginTop:'50px'}}>
            <div className="icon">
              <img id='link1' src={face} alt="" style={{width:'50px', height:'50px'}}/>
              <a href="/">Facebook</a>
            </div>
            <div className="icon">
              <img id='link1' src={inta} alt="" style={{width:'40px', height:'40px', marginRight:'10px', marginTop:'5px'}}/>
              <a href="/">Intagram</a>
            </div>
            <div className="icon">
              <img id='link1' src={tiktok} alt="" style={{width:'50px', height:'50px', marginRight:'10px'}}/>
              <a href="/">Tiktok</a>
            </div>
          </div>
      </div>
    );


};


export default Profile;