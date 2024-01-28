const { createContext, useState } = require("react");

export const UserContext = createContext({});
export function UserContextProvider({childeren}){
    const [username,setusername] = useState({})
   return (
    <UserContext.Provider>
        {childeren};
    </UserContext.Provider>
   );
}