import { createContext, useContext, useState } from "react";

const userContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
