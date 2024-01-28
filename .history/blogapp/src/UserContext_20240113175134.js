const { createContext, useState } = require("react");

export const UserContext = createContext({});
export function UserContextProvider({childeren}){
    const [userinfo,setuserinfo] = useState({});
   return (
    <UserContext.Provider>
        {childeren};
    </UserContext.Provider>
   );
}