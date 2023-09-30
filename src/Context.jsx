import { createContext, useContext, useState } from "react";

export const DropdownContext = createContext();

const Context = ({ children }) => {
  const [linkActive, setLinkActive] = useState(false);
  return (
    <DropdownContext.Provider value={{ linkActive, setLinkActive }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default Context;

export const useDropdownContext = () => {
  return useContext(DropdownContext);
};
