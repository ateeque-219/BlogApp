const { createContext } = require("react");

export const UserContext = createContext({});
export function UserContextProvider({childeren}){
    const [username,setusername] = uses
   return (
    <UserContext.Provider>
        {childeren};
    </UserContext.Provider>
   );
}