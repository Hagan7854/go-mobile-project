// SidebarContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define the type for the context value
interface SidebarContextValue {
  toggle: boolean;
  sidebarToggle: () => void;
}

// Create the context
const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

interface Props {
    children: ReactNode;
}

// Create the SidebarProvider component
export const SidebarProvider: React.FC<Props> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const sidebarToggle = () => {
    setToggle(prevValue => !prevValue);
  };

  const value: SidebarContextValue = {
    toggle,
    sidebarToggle
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

// Create a custom hook to use the context
export const useSidebar = (): SidebarContextValue => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
