import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

const reducers = {
  setIsSidebarCollapsed: (
    state: initialStateTypes,
    action: PayloadAction<boolean>,
  ) => {
    state.isSidebarCollapsed = action.payload;
  },
  setIsDarkMode: (state: initialStateTypes, action: PayloadAction<boolean>) => {
    state.isDarkMode = action.payload;
  },
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers,
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
