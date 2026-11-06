"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
  branchRunning: boolean;
  setBranchRunning: (running: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  activeSection: "home",
  setActiveSection: () => {},
  branchRunning: true,
  setBranchRunning: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");
  const [branchRunning, setBranchRunning] = useState(true);

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
        branchRunning,
        setBranchRunning,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
