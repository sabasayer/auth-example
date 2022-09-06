import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "",
    error: false,
    success: false,
  },
  reducers: {
    set(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload;
    },
  },
});

export const { set, setError, setSuccess } = userSlice.actions;
export default userSlice.reducer;
