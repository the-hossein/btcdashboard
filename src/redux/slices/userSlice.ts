import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"
import callApi from "../../utils/api/callApi";
import { LOGIN } from "../../utils/api/apiRoutes";

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

interface UserDataLogin {
    username: string;
    password: string;
}
//! this is thunk for user login
export const fetcherLoginUser = createAsyncThunk(
    "users/login/",
    async (userData: UserDataLogin, thunkApi) => {
        const { username, password } = userData;
        try {
            const { data } = await callApi(LOGIN(username, password), false, "{}", "get", false);
            console.log(data)
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }

    }
)

export const userSlice = createSlice({
    name: "user_controller",
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetcherLoginUser.pending, (state) => {
                state.loader = true;
            })
            .addCase(fetcherLoginUser.fulfilled, (state, action) => {
                state.loader = false;

            })
            .addCase(fetcherLoginUser.rejected, (state, action) => {
                state.loader = false;
                console.log("reject")
            })
    },
});


export const { setLoader } = userSlice.actions;

export default userSlice.reducer;