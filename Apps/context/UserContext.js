import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currtScreen, setcurrtScreen] = useState(null);

  // {
  //   name: "eli",
  //   email: "eli@gmail.com",
  //   password: "123456",
  // }

  const store = {
    user,
    setUser,
    currtScreen,
    setcurrtScreen,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
