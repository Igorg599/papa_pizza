const initialState = {
    items: []
};

const drink = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DRINK':
            return {
                ...state,
                items: action.payload,
            };
        
        default:
            return state;
    }
};

export default drink;