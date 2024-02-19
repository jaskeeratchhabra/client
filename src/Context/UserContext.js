import React from 'react'

const UserContext=React.createContext([{
    userName:"user",
    setUser:()=>{}
}]);

export default UserContext;