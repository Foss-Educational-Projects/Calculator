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
			if (state.writeValue.lastIndexOf(".") !== -1) {
				console.log(". Already Present")
			}
			else {
				state.writeValue = state.writeValue + `${action.payload}`;
			}
		},
		addOperator: (state, action) => {
			var len = state.writeValue.length - 1;
			if (state.writeValue[len] === action.payload.key) {
				console.log("Same thing")
			}
			else {
				if (action.payload.type === "operator") {
					let text = state.writeValue.split("")
					text[text.length - 1] = action.payload.key
					text = text.join("")
					console.log(state.writeValue)
					state.writeValue = text;
				}
				
			}
			
		}, 
		removeStuff: (state) => {
			console.log(typeof (state.writeValue))
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