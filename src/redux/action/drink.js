import axios from 'axios';


export const fetchDrink = () => (dispatch)  => {
    axios.get('/drink/').then (({data}) => {
        dispatch(setDrink(data));
    });
};

export const setDrink = (items) => ({
    type: 'SET_DRINK',
    payload: items,
});