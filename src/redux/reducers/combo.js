const initialState = {
    items: []
};

const combo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMBO':
            return {
                ...state,
                items: action.payload,
            };
        
        default:
            return state;
    }
};

export default combo;