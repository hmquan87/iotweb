import React, { useState } from 'react';
import profile from '../img/img.jpg';
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
            <img src={profile} alt="" />
            <div className="body">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>CardID:</strong> {user.cardid}</p>
            </div>
        </div>
      );


};


export default Profile;