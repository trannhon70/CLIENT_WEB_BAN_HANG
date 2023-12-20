import { createAddress, getListAddresses } from "@/apis/user";
import { IAddress } from "@/interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addNewAddress = createAsyncThunk(
  "user/addNewAddress",
  async (data: IAddress) => {
    try {
      const result = await createAddress(data);

      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const initAddress = createAsyncThunk("user/initAddress", async () => {
  try {
    const result = await getListAddresses();

    return result.data;
  } catch (error: any) {
    console.log(error);
  }
});

interface UserState {
  addresses: IAddress[];
}

const defaultState: UserState = {
  addresses: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initAddress.fulfilled, (state, { payload }) => {
        state.addresses = payload.result || [];
      })
      .addCase(addNewAddress.fulfilled, (state, { payload }) => {
        console.log("addNewAddress", payload);
      });
  },
});

const { reducer: userReducer, actions } = userSlice;

export const {} = actions;

export default userReducer;
