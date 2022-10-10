import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
  name: "cart",
  initialState: { foodItem: [], finalQuantity: 0, finalAmount: 0 },
  reducers: {
    // Adding To Cart
    addItemToCart(state, action) {
      const newAddItem = action.payload;
      const existingItem = state.foodItem.find(
        (item) => item.id === newAddItem
      );
      if (existingItem?.quantity < 5) {
        existingItem.quantity++;
        // state.finalQuantity++;
        // state.finalAmount = state.finalAmount + existingItem.price;
        state.finalAmount = 0;
        state.finalQuantity = 0;
        state.foodItem.forEach((foodMeal) => {
          state.finalAmount =
            state.finalAmount + foodMeal.price * +foodMeal.quantity;
          state.finalQuantity = state.finalQuantity + +foodMeal.quantity;
        });
      }
    },

    // Remove To Cart
    removeItem(state, actions) {
      const newItemId = actions.payload;
      const existingItem = state.foodItem.find(
        (itemId) => itemId.id === newItemId
      );
      if (state.finalAmount < 0) {
        state.finalAmount = 0;
      }
      if (existingItem?.quantity > 0) {
        if (existingItem.quantity === 1) {
          state.foodItem = state.foodItem.filter(
            (itemId) => itemId.id !== newItemId
          );
          state.finalQuantity--;
          state.finalAmount = state.finalAmount - existingItem.price;
        } else {
          existingItem.quantity--;
          state.finalQuantity--;
          state.finalAmount = state.finalAmount - existingItem.price;
        }
      }
    },

    // Adding Food Into the Array
    addFoodToCart(state, actions) {
      state.finalAmount = 0;
      state.finalQuantity = 0;
      const newItem = actions.payload;
      const existingItem = state.foodItem.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.foodItem.push(newItem);
      } else {
        existingItem.quantity = newItem.quantity;
      }
      state.foodItem.forEach((item) => {
        state.finalQuantity = state.finalQuantity + +item.quantity;
        state.finalAmount = state.finalAmount + item.price * +item.quantity;
      });
    },
  },
});
export const cartActions = sliceCart.actions;
export default sliceCart;
