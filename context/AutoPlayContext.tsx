"use client";

import React, { createContext, useContext, useState } from "react";

interface AutoPlayContextType {
  AutoPlay: boolean;
  toggleAutoPlay: () => void;
}

const AutoPlayContext = createContext<AutoPlayContextType | undefined>(
  undefined
);

export const useAutoPlay = () => {
  const context = useContext(AutoPlayContext);
  if (!context) {
    throw new Error("useAutoPlay must be used within a AutoPlayProvider");
  }
  return context;
};

interface AutoPlayProviderProps {
  children: React.ReactNode;
}

export const AutoPlayProvider: React.FC<AutoPlayProviderProps> = ({
  children,
}) => {
  const [AutoPlay, setAutoPlay] = useState<boolean>(false);

  const toggleAutoPlay = () => {
    setAutoPlay((prevAutoPlay) => !prevAutoPlay);
  };

  return (
    <AutoPlayContext.Provider value={{ AutoPlay, toggleAutoPlay }}>
      {children}
    </AutoPlayContext.Provider>
  );
};
