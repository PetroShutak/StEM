const calculateTotalPrice = (price, quantity) => {
    const totalPrice = price * quantity;
    return Number(totalPrice.toFixed(2));
};

export default calculateTotalPrice;
