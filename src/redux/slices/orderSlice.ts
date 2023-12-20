import {
  createCartItem,
  getListCart,
  updateQuantityCartItem as updateQuantityCart,
  createDraftOrder as addDraftOrder,
  placeOrderById,
} from "@/apis/order";
import {
  IAddCartItem,
  ICartItem,
  ICategory,
  ICreateDraftOrder,
  IPromotion,
  ITransport,
} from "@/interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getInitListCart = createAsyncThunk(
  "order/getInitListCart",
  async () => {
    try {
      const result = await getListCart();

      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const addCartItem = createAsyncThunk(
  "order/addCartItem",
  async (data: IAddCartItem[]) => {
    try {
      const result = await createCartItem(data);

      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const updateQuantityCartItem = createAsyncThunk(
  "order/updateQuantityCartItem",
  async (data: any) => {
    try {
      const result = await updateQuantityCart(
        data?.cartItem || "",
        data?.body || {}
      );

      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const createDraftOrder = createAsyncThunk(
  "order/createDraftOrder",
  async (data: ICreateDraftOrder) => {
    try {
      const result = await addDraftOrder(data);

      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (data: any) => {
    try {
      const result = await placeOrderById(data?.id, data?.body);

      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

interface OrderState {
  isLoadingCart: boolean;
  listCart: ICartItem[];
  infoCart: {
    note: string;
    date: any;
    time: any;
  };
  promotion?: IPromotion;
  transport?: ITransport;
}

const defaultState: OrderState = {
  isLoadingCart: true,
  listCart: [],
  infoCart: {
    note: "",
    date: null,
    time: null,
  },
  promotion: undefined,
  transport: undefined,
};

const orderSlice = createSlice({
  name: "order",
  initialState: defaultState,
  reducers: {
    updateInfoCart: (state, { payload }) => {
      state.infoCart = {
        ...payload,
      };
    },
    updatePromotion: (state, { payload }) => {
      state.promotion = payload;
    },
    updateTransport: (state, { payload }) => {
      state.transport = payload;
    },
    updateListCart: (state, { payload }) => {
      state.listCart = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitListCart.fulfilled, (state, { payload }) => {
        state.isLoadingCart = false;
        state.listCart = payload?.result || [];
      })
      .addCase(getInitListCart.rejected, (state) => {
        state.isLoadingCart = false;
        state.listCart = [];
      })
      .addCase(addCartItem.fulfilled, (state, { payload }) => {
        const data = state.listCart?.filter(
          (item) => !payload?.result?.find((e: ICartItem) => e?.id === item?.id)
        );
        state.listCart = [...data, ...(payload?.result || [])];
      })
      .addCase(updateQuantityCartItem.fulfilled, (state, { payload }) => {
        const { result } = payload;
        if (result?.type === "delete") {
          state.listCart = state.listCart?.filter(
            (item) => item?.id !== result?.data?.id
          );
        } else {
          const newState = [...state.listCart];
          const index = newState?.findIndex(
            (item) => item.id === result?.data?.id
          );
          newState.splice(index, 1, result?.data);
          state.listCart = newState;
        }
      });
  },
});

const { reducer: orderReducer, actions } = orderSlice;

export const {
  updateInfoCart,
  updatePromotion,
  updateTransport,
  updateListCart,
} = actions;

export default orderReducer;
