import reducer from '../features/shipping-label-maker/reducer/shippingLabelMakerReducer'
describe('Reducer test',  () => {
    it('It should return  state ', () => {
        const state = {
            shippingOption: 1,
        };
        const action = {
            type: 'shippinginfo',
            payload: {
                weight: 10
            }
        }
        const newState = reducer(state, action);
        expect(typeof newState).toBe('object');
        
    });
    it('Return state should have update valued from payload ', () => {
        const state = {
            shippingOption: 1,
        };
        const action = {
            type: 'shippinginfo',
            payload: {
                weight: 10
            }
        }
        const newState = reducer(state, action);
        expect(newState.weight).toBe(10);
    });
});