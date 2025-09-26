import { createContext, useContext, useState } from "react";

export interface FilterState {
  localization: {
    estado: string;
    cidade: string;
  };
  dates: {
    selectedDateType: string;
  };
  status: {
    selectedStatusCampanhas: string[];
  };
  locals: {
    selectedLocals: Record<string, string[]>;
  };
  priority: {
    selectedBloodType: string;
  };
  displayEstado: boolean;
  displayCidade: boolean
}

interface FilterContextType {
  filterState: FilterState;
  clearAllFilters: () => void;
  updateLocalization: (estado: string, cidade: string) => void;
  updateDates: (selectedDateType: string) => void;
  updateStatus: (selectedStatusCampanhas: string[]) => void;
  updateLocals: (selectedLocals: Record<string, string[]>) => void;
  updatePriority: (selectedBloodType: string) => void;
  hasActiveFilters: () => boolean;
  toggleEstadoDisplay: (newDisplay: boolean) => void;
  toggleCidadeDisplay: (newDisplay: boolean) => void;
}

const initialFilterState: FilterState = {
  localization: {
    estado: "",
    cidade: "",
  },
  dates: {
    selectedDateType: "",
  },
  status: {
    selectedStatusCampanhas: [],
  },
  locals: {
    selectedLocals: {},
  },
  priority: {
    selectedBloodType: "",
  },
  displayEstado: false,
  displayCidade: false
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
  children: any;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filterState, setFilterState] =
    useState<FilterState>(initialFilterState);

  const clearAllFilters = () => {
    setFilterState(initialFilterState);
  };

  const toggleEstadoDisplay = (newDisplay: boolean) => {
    setFilterState((prev) => ({
      ...prev,
      displayEstado: newDisplay
    }));
  };

  const toggleCidadeDisplay = (newDisplay: boolean) => {
    setFilterState((prev) => ({
      ...prev,
      displayCidade: newDisplay
    }));
  };

  const updateLocalization = (estado: string, cidade: string) => {
    setFilterState((prev) => ({
      ...prev,
      localization: { estado, cidade },
    }));
  };

  const updateDates = (selectedDateType: string) => {
    setFilterState((prev) => ({
      ...prev,
      dates: { selectedDateType },
    }));
  };

  const updateStatus = (selectedStatusCampanhas: string[]) => {
    setFilterState((prev) => ({
      ...prev,
      status: { selectedStatusCampanhas },
    }));
  };

  const updateLocals = (selectedLocals: Record<string, string[]>) => {
    setFilterState((prev) => ({
      ...prev,
      locals: { selectedLocals },
    }));
  };

  const updatePriority = (selectedBloodType: string) => {
    setFilterState((prev) => ({
      ...prev,
      priority: { selectedBloodType },
    }));
  };

  const hasActiveFilters = (): boolean => {
    return (
      filterState.localization.estado !== "" ||
      filterState.localization.cidade !== "" ||
      filterState.dates.selectedDateType !== "" ||
      filterState.status.selectedStatusCampanhas.length > 0 ||
      Object.keys(filterState.locals.selectedLocals).some(
        (key) => filterState.locals.selectedLocals[key].length > 0
      ) ||
      filterState.priority.selectedBloodType !== ""
    );
  };

  const value: FilterContextType = {
    filterState,
    clearAllFilters,
    updateLocalization,
    updateDates,
    updateStatus,
    updateLocals,
    updatePriority,
    hasActiveFilters,
    toggleEstadoDisplay,
    toggleCidadeDisplay,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilters = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
