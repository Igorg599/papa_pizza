const initialState = {
    items: [],
    isLoaded: false
};

const sauce = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SAUCE':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED_SAUCE':
            return {
                ...state,
                isLoaded: action.payload
            };    
        
        default:
            return state;
    }
};

export default sauce;