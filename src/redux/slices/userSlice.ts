import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

interface InitialStateUser {
    loader: boolean;
    info: null | {};
    userId: null | number;
    is_login: boolean;
}

const initialState: InitialStateUser = {
    loader: false,
    info: null,
    userId: null,
    is_login: false,
};

export const userSlice = createSlice({
    name: "user_controller",
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        }
    },
});


export const { setLoader } = userSlice.actions;

export default userSlice.reducer;