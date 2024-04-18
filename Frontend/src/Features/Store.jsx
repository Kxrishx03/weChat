import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';

export const store = configureStore({
    reducer : {
        themeKey : themeSlice,
    }
});
