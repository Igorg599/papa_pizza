const initialState = {
    items: []
};

const sauce = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SAUCE':
            return {
                ...state,
                items: action.payload,
            };
        
        default:
            return state;
    }
};

export default sauce;