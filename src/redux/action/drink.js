import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADING_DRINK',
    payload: false
});


export const fetchDrink = () => (dispatch)  => {
    dispatch(setLoaded(false));
    axios.get('/drink/').then (({data}) => {
        dispatch(setDrink(data));
    });
};

export const setDrink = (items) => ({
    type: 'SET_DRINK',
    payload: items,
});