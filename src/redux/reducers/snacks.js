const initialState = {
    items: [],
    isLoaded: false
};

const snacks = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SNACKS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED_SNACKS':
            return {
                ...state,
                isLoaded: action.payload
            };    
        
        default:
            return state;
    }
};

export default snacks;