
import { configureStore, ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "./RootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk, logger],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector 

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Create a type for thunk dispatch
export type AppThunkDispatch<T> = ThunkDispatch<RootState, T, AnyAction>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

