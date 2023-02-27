import { configureStore } from "@reduxjs/toolkit";

import readSlice from "../features/readSlice";
import writeSlice from "../features/writeSlice";

const store = configureStore({
	reducer: {
		write: writeSlice,
		read: readSlice
	}
})

export { store };