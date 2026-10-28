export const getCart = () => {
    const cart = localStorage.getItem('cart');

    if (!cart) {
        return {};
    }

    try {
        return JSON.parse(cart);
    } catch (error) {
        localStorage.removeItem('cart');
        return {};
    }
};

export const storeCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};
