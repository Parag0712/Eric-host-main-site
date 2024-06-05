import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
    currencyCode: string;
    currencyRate: number;
    currencySymbol: string;
}

interface UpdateCurrencyPayload {
    currencyCode: string;
    currencyRate: number;
    currencySymbol: string;
}

const initialState: CurrencyState = {
    currencyCode: "INR",
    currencyRate: 1,
    currencySymbol: "₹"
};

export const currencySlice = createSlice({
    name: 'currencySlice',
    initialState,
    reducers: {
        updateCurrencyRate: (state, action: PayloadAction<UpdateCurrencyPayload>) => {
            state.currencyRate = action.payload.currencyRate;
            state.currencyCode = action.payload.currencyCode;
            state.currencySymbol = action.payload.currencySymbol;
        },
    },
});

export const { updateCurrencyRate } = currencySlice.actions;

export default currencySlice.reducer;
