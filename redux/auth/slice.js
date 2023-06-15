import { createSlice } from "@reduxjs/toolkit";
import { registerDB, loginDB } from "./operations";

const initialState = {
    login: null,
    email: null,
    status: "waiting",
    error: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(registerDB.fulfilled, (state, action) => {
            console.log(action.payload);
                state.email = action.payload.email;
                state.status = "isRegistered";
        })
        .addCase(registerDB.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(registerDB.rejected, (state, action) => {
            state.status = 'error';
                state.error = action.payload;
        })
        .addCase(loginDB.fulfilled, (state, action) => {
            console.log(action.payload);
                state.email = action.payload.email;
                state.status = "isLoggedIn";
        })
        .addCase(loginDB.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(loginDB.rejected, (state, action) => {
            state.status = 'error';
                state.error = action.payload;
        })
    }
});

export const authReducer = authSlice.reducer;