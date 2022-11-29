import { createSlice } from "@reduxjs/toolkit";

type ThemeState = boolean;

const themeFromLocaleStorage = !!localStorage.getItem("movies-theme");

const initialState: ThemeState = themeFromLocaleStorage;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state) {
        localStorage.removeItem("movies-theme");
      } else {
        localStorage.setItem("movies-theme", "_");
      }
      return (state = !state);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
