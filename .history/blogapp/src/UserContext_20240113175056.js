const { createContext } = require("react");

export const UserContext = createContext({});
export function UserContextProvider({childeren}){
   return (
    <UserContext.Provider>
        {childeren};
    </UserContext.Provider>
   );
}