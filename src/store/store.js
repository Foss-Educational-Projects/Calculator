import { configureStore } from "@reduxjs/toolkit";

import writeSlice from "../features/writeSlice";

const store = configureStore({
	reducer: {
		write: writeSlice
	}
})

export { store };