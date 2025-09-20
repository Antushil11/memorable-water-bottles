/**
 * 
 * 1. to go something from local stroage 
 */



const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
        const stroedCart = JSON.parse(storedCartString)
        return stroedCart;
    }

    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStrigiFind = JSON.stringify(cart);
    localStorage.setItem("cart", cartStrigiFind)
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];



    saveCartToLocalStorage(newCart)
}
const removeFromLocalStorage = id=>{
    const stroedCart = getCartFromLocalStorage()
    const remaningCart = stroedCart.filter(storeId => storeId !==id)

    saveCartToLocalStorage(remaningCart)
}

export {
    getCartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addToSoreCart,
    removeFromLocalStorage as removeFromCart
}