import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Profile = () => {
  const { user,isAuthenticated } = useAuth0();
  
  return(

  <div className="user">
     <h5>User info</h5>
     <div className="profile">
        <img src={isAuthenticated && user.picture} alt="" className="profilepic" />
        <div className="info">
            <div className="field">
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="name" value={isAuthenticated && user.name} readonly/>
            </div>
            <div className="field">
                <label htmlFor="nickname">NickName</label>
                <br />
                <input type="text" name="nickname" value={isAuthenticated && user.nickname} readonly/>
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" value={isAuthenticated && user.email} readonly/>
            </div>
        </div>
     </div>
    {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
  </div>
  )
};
