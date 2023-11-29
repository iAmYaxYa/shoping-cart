const getTotal = (carts)=>{
    let totalAmount = 0, totalCost = 0;

    for (let [key, {amount, price}] of carts) {
        totalAmount += amount;
        totalCost += amount * price;
    }
    return {totalAmount, totalCost}
}

export default getTotal;