import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingItem {
    items: string[];
}

const initialState: ShoppingItem = {
    items: [],
};

export const fetchTodo = createAsyncThunk('tasks/fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
    const data = await response.json();
    return data.map((item: { title: string }) => item.title);

});

const shoppingSlice = createSlice({
    name: "Shopping",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.items.push(...action.payload);
        });
    }
});

export const { addItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
