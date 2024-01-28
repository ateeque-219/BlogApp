const { createContext } = require("react");

export const UserContext = createContext({});
export function UserContext.Provider({childeren}){
   return (
    <UserContext.Provider>
        {}
    </UserContext.Provider>
   )
}