const initialState = {
    items: [],
    isLoaded: false
};

const drink = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DRINK':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED_DRINK':
            return {
                ...state,
                isLoaded: action.payload
            };
        
        default:
            return state;
    }
};

export default drink;