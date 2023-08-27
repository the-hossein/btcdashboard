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


// //! this is thunk for user login
// export const fetcherLoginUser = createAsyncThunk(
//     "users/login/",
//     async (userData: UserDataLogin, thunkApi) => {
//         const { username, password } = userData;
//         try {
//             const { data } = await callApi(Login(username, password), false, "{}", "get", false);
//             console.log(data)
//             return data;
//         } catch (error) {
//             return thunkApi.rejectWithValue(error)
//         }

//     }
// )

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