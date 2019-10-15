import { createSelector } from 'reselect';

const selectedCart = state => state.cart;

const selectUser = state => state.user;

export const selectedCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectedCartItems],
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity, 
        0 
    )
)