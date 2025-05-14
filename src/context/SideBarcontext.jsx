import { createContext, useState } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  function toggleSidebar() {
    console.log("happy toogle");
    setIsOpen((open) => !open);
  }
  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };
