import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react';
const UserProvider=({children})=>{
        const [userName, setUserName] = useState("user");
      
        const setUser = (user) => {
          setUserName(user);
        };
      
        return (
          <UserContext.Provider value={{ userName, setUser }}>
            {children}
          </UserContext.Provider>
        );
      };

export default UserProvider