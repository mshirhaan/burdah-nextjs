"use client";

import React, { createContext, useContext, useState } from "react";

interface AutoPlayContextType {
  autoPlay: boolean;
  isLastPlaying: boolean;
  toggleAutoPlay: () => void;
  setLastPlaying: (flag: boolean) => void;
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
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const [isLastPlaying, setIsLastPlaying] = useState<boolean>(false);
  const toggleAutoPlay = () => {
    setAutoPlay((prevAutoPlay) => !prevAutoPlay);
  };

  const setLastPlaying = (flag: boolean) => {
    setIsLastPlaying(flag);
  };

  return (
    <AutoPlayContext.Provider
      value={{ autoPlay, isLastPlaying, setLastPlaying, toggleAutoPlay }}
    >
      {children}
    </AutoPlayContext.Provider>
  );
};
