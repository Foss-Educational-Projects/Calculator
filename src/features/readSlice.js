import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "0"
}

const readSlice = createSlice({
	name: "read",
	initialState,
	reducers: {
	}
})
// export const {  } = readSlice.actions;
export default readSlice.reducer;