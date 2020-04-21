const Reducer = (state , action) => {
    switch(action.type) {
        case 'shippinginfo': {
            return {...state, ...action.payload};
        }
        default: {
            return {...state};
        }
    }
};

export default Reducer;