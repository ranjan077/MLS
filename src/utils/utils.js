export const shippingOptions = {
    'ground': 1,
    'priority': 2
}

export const calcShippingCost = (weight = 0, shippingOption = 1) => {
    const shippingRate = 0.40;
    const shippingCost = weight * shippingRate *
    (shippingOption === shippingOptions.ground ? 1 : 1.5);
    return shippingCost;
};