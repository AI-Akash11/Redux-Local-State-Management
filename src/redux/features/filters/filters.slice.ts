import { createSlice } from "@reduxjs/toolkit";


interface InitialStage {
    priority: string;
    status: string;
}


const initialState : InitialStage = {
    priority: "medium",
    status: "pending"
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {

    }
})


export default filtersSlice.reducer;