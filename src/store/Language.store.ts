import { createSlice, configureStore } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        value: 0
    },
    reducers: {
        set: (state, _action) => {
            state.value = state.value === 1 ? 0 : 1;
        }
    }
});

export const { set } = languageSlice.actions;

const store = configureStore({
    reducer: languageSlice.reducer
});

