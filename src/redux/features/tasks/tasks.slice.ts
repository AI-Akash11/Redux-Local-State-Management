import { createSlice } from "@reduxjs/toolkit";


interface InitialStage {
    name: string;
    description: string;
    priority: string;
    status: string;
}


const initialState : InitialStage = {
    name: "",
    description: "",
    priority: "medium",
    status: "pending"
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

    }
})


export default tasksSlice.reducer;