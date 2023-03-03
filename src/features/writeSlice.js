import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from 'mathjs'
const initialState = {
	writeValue: "0",
	readValue: null
}

const writeSlice = createSlice({
	name: 'read',
	initialState,
	reducers: {
		addNumbers: (state, action) => {
			if (parseInt(state.writeValue) === 0) {
				state.writeValue = `${action.payload}`;
			}
			else {
				state.writeValue = state.writeValue + `${action.payload}`;
			}
		},
		addDecimal: (state, action) => {
			if (state.writeValue.split(" ").reduce) {
				console.log(". Already Present")
			}
			else {
				state.writeValue = state.writeValue + `${action.payload}`;
			}
		},
		addOperator: (state, action) => {
			// if(action.payload ===)

		}, 
		removeStuff: (state) => {
			console.log(typeof(state.writeValue))
			if (state.writeValue.toString().includes(" ")) {
				state.writeValue = `${state.writeValue.slice(state.writeValue[state.writeValue.length], state.writeValue.length - 1)}`
			}
			else {
				state.writeValue = `${state.writeValue.slice(0, state.writeValue.length - 1)}`
				console.log("No space")
			}

		},
		clearStuff: (state) => {
			state.writeValue = "0"
		},
		getResult: (state) => {
			state.writeValue = `${evaluate(state.writeValue)}`
		},
		setReadValue: (state) => {
			state.readValue = state.writeValue;
		}
	}
})
export const { addNumbers, addOperator, removeStuff, clearStuff, getResult, addDecimal, setReadValue } = writeSlice.actions;
export default writeSlice.reducer;