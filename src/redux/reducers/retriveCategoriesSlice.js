import { createSlice } from "@reduxjs/toolkit";
import { retrieveCategories } from "../actions/retreiveCategories";

const initialState ={ 
    value: []
};
const retreiveCategoriesSlice = createSlice({
    name: "getAllCategories",
    initialState,
    extraReducers: builder => {
        builder.addCase(retrieveCategories.fulfilled, (state, action )=> {
            state.value = action.payload.categories
        })
    },
});

const { reducer } = retreiveCategoriesSlice
export default reducer;