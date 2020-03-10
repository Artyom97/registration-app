import React from "react";
import ProfileImage from '../img/profile.png';


function Profile({ userData }) {
    return (
      <div>
          <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'dimgrey'}}>
              <div style={{padding: '50px'}}>
                  <div style={{display: 'flex'}}>
                      <div style={{backgroundColor: '#ffffff', padding: '15px'}}>
                          <div>
                              <img src={ ProfileImage } alt="profile"/>
                          </div>
                          <div style={{marginTop: '20px'}}>
                              <ul style={{listStyle: 'none',fontSize: '15px'}}>
                                  <li style={{fontFamily: 'fantasy'}}>FirstName: {userData?.firstName}</li>
                                  <li style={{fontFamily: 'fantasy'}}>LastName:  {userData?.lastName}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Profile;