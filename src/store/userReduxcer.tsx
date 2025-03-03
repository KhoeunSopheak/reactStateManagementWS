import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserName {
    users: string[];
}

const initialState: UserName = {
    users: [],
};

const userSlice = createSlice({
    name: "Username",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {
            const newUser: string = action.payload
            state.users.push(newUser);
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;