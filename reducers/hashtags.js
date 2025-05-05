import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const hastagsSlice = createSlice({
    name: 'hastags',
    initialState,
    reducers: {
        addHastagsToStore: (state, action) => {
            state.value.push(action.payload);
        }
    }
});

export const { addHastagsToStore } = hastagsSlice.actions;
export default hastagsSlice.reducer;