import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  quantity: number;
  price: number;
  totalPrice: number;
  productId: number;
  productTitle: string;
  productThumnail: string;
};

type CartSliceState = {
  items: CartItem[];
  totalPrice: number;
  show: boolean;
};

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  show: false,
};

const findIndex = (id: number, items: CartItem[]) => {
  return items.findIndex((item) => item.productId === id);
};

const incrementQuantity = (item: CartItem) => {
  item.quantity = item.quantity + 1;
  item.totalPrice = item.quantity * item.price;
  return item;
};

const decrimentQuantity = (item: CartItem) => {
  if (item.quantity < 2) return item;
  item.quantity = item.quantity - 1;
  item.totalPrice = item.quantity * item.price;
  return item;
};

const setQuantity = (item: CartItem, quantity: number) => {
  if (quantity < 1) return item;
  item.quantity = quantity;
  item.totalPrice = item.quantity * item.price;
  return item;
};

const cartTotalPrice = (items: CartItem[]): number => {
  return items.reduce((prev, current) => {
    return prev + current.totalPrice;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ item: CartItem }>) {
      const { item } = action.payload;
      const index = findIndex(item.productId, state.items);
      console.log("index", index);
      if (index >= 0) {
        state.items = state.items.map((arrayItem) => {
          if (arrayItem.productId === item.productId) {
            return incrementQuantity(arrayItem);
          }
          return arrayItem;
        });
      } else {
        state.items = [...state.items, item];
      }
      state.totalPrice = cartTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<{ productId: number }>) {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      state.totalPrice = cartTotalPrice(state.items);
    },
    incrementItemQuantity(state, action: PayloadAction<{ productId: number }>) {
      const { productId } = action.payload;
      state.items = state.items.map((item) => {
        if (item.productId === productId) {
          return incrementQuantity(item);
        }
        return item;
      });
      state.totalPrice = cartTotalPrice(state.items);
    },
    decrimentItemQuantity(state, action: PayloadAction<{ productId: number }>) {
      const { productId } = action.payload;
      state.items = state.items.map((item) => {
        if (item.productId === productId) {
          return decrimentQuantity(item);
        }
        return item;
      });
      state.totalPrice = cartTotalPrice(state.items);
    },
    setItemQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      state.items = state.items.map((item) => {
        if (item.productId === productId) {
          return setQuantity(item, quantity);
        }
        return item;
      });
      state.totalPrice = cartTotalPrice(state.items);
    },
    showCart(state, action: PayloadAction) {
      state.show = true;
    },
    hideCart(state, action: PayloadAction) {
      state.show = false;
    },
    toggleCart(state, action: PayloadAction) {
      state.show = !state.show;
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementItemQuantity,
  decrimentItemQuantity,
  setItemQuantity,
  showCart,
  hideCart,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
