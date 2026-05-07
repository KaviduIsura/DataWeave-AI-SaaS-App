import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ViewType } from '../../pages/ChatWorkspace';

export interface UiState {
  isDarkMode: boolean;
  activeView: ViewType;
  layoutState: number;
}

const getInitialDarkMode = () => {
  if (typeof window !== 'undefined') {
    return document.documentElement.classList.contains('dark');
  }
  return false;
};

const initialState: UiState = {
  isDarkMode: getInitialDarkMode(),
  activeView: 'new_chat',
  layoutState: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    setActiveView: (state, action: PayloadAction<ViewType>) => {
      state.activeView = action.payload;
    },
    toggleLayoutState: (state) => {
      state.layoutState = (state.layoutState + 1) % 3;
    },
    setLayoutState: (state, action: PayloadAction<number>) => {
      state.layoutState = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  setActiveView,
  toggleLayoutState,
  setLayoutState,
} = uiSlice.actions;

export default uiSlice.reducer;
