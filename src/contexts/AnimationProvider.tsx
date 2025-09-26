import React, { createContext, useContext, ReactNode } from 'react';
import { SharedValue, useSharedValue } from 'react-native-reanimated';

interface AnimationContextType {
  cardVisibility: SharedValue<number>;
  toggleCard: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const cardVisibility = useSharedValue(0);

  const toggleCard = () => {
    cardVisibility.value = cardVisibility.value === 0 ? 1 : 0;
  };

  const value: AnimationContextType = {
    cardVisibility,
    toggleCard,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}