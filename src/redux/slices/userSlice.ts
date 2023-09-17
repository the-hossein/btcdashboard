import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"
import { IProfileUser } from "../../viewModel/types/IProfile";

export interface InitialStateUser {
    loader: boolean;
    info: null | {};
    userId: null | number;
    is_login: boolean;
    userProfile: null | IProfileUser;
}

const initialState: InitialStateUser = {
    loader: false,
    info: null,
    userId: null,
    is_login: false,
    userProfile: null,
};

export const userSlice = createSlice({
    name: "user_controller",
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        },
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
        }
    },
});


export const { setLoader, setUserProfile } = userSlice.actions;

export default userSlice.reducer;