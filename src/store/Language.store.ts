import { createSlice, configureStore } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        value: 0
    },
    reducers: {
        toggle: state => {
            state.value = state.value === 1 ? 0 : 1;
        }
    }
});

export const { toggle } = languageSlice.actions;

const store = configureStore({
    reducer: languageSlice.reducer
});

