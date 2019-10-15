import { createSelector } from 'reselect';

const selectedCart = state => state.cart;

export const selectedCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectedCartItems],
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity, 
        0 
    )
);