import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: { _id: "", title: "", course: "", description: "", due: "", startDate: "", endDate: "" },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        // addAssignment: (state, action) => {
        //     const newAssignment = { ...action.payload, _id: `A${state.assignments.length + 1}` };
        //     state.assignments.push(newAssignment);
        //     //db.assignments.push(newAssignment);
        // },

        addAssignment: (state, action) => {
            console.log("Before adding assignment:", state.assignments);
            state.assignments = [{ ...action.payload, _id: `A${state.assignments.length + 1}`},
                ...state.assignments];
            console.log("After adding assignment:", state.assignments);
        },

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
            (assignment) => assignment._id !== action.payload);
        },

        updateAssignment: (state, action) => {
            const index = state.assignments.findIndex(
              assignment => assignment._id === action.payload._id
            );
      
            if (index > -1) {
                console.log("Before updateAssignment:", state.assignments[index]);
              state.assignments[index] = { ...state.assignments[index], ...action.payload };
              console.log("After updateAssignment:", state.assignments[index]);
            }
            
        },

        selectAssignment: (state, action) => {
            const assignmentToSelect = state.assignments.find(assignment => assignment._id === action.payload);
            if (assignmentToSelect) {
                state.assignment = assignmentToSelect;
            }
        },

        //setAssignment: (state, action) => {state.assignment = {...state.assignment, ...action.payload};}
        setAssignment: (state, action) => {state.assignment = action.payload;},
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
    setAssignment,
} = assignmentsSlice.actions;
    
export default assignmentsSlice.reducer;