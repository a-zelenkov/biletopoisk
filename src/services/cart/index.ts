import { createSlice } from '@reduxjs/toolkit';

type State = Record<string, number>;
type Action = {
    payload: string;
};

const initialState: State = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, { payload }: Action) => {
            const count = state[payload] || 0;
            state[payload] = count + 1;
        },
        decrement: (state, { payload }: Action) => {
            const count = state[payload];

            if (!count) {
                return;
            }
            if (count === 1) {
                delete state[payload];
            }
            state[payload] = count - 1;
        },
        delete: (state, { payload }: Action) => {
            delete state[payload];
        },
        reset: () => initialState,
    },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
