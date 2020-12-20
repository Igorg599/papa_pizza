const initialState = {
    items: [],
    isLoaded: false
};

const combo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMBO':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };
        
        case 'SET_LOADED_COMBO':
            return {
                ...state,
                isLoaded: action.payload
            };
        
        default:
            return state;
    }
};

export default combo;