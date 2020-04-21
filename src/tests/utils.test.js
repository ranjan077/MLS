import {calcShippingCost} from '../utils/utils'

describe('Utils test',  () => {
    it('calcShippingCost ', () => {
        const weight = 10;
        const shippingOption  = 1;

        const result = calcShippingCost(weight, shippingOption);
        expect(result).toBe(4);
    })
});