import { RootState } from '../store';

export const selectCartModule = (state: RootState) => state.cart;

export const selectTicketAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;

export const selectAllTicketAmount = (state: RootState) => {
    const card = selectCartModule(state);
    let amount = Object.values(card).reduce((prev, curr) => prev + curr, 0);
    return amount;
};
