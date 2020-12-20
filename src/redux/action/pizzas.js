import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADING',
    payload: false
});


export const fetchPizzas = () => (dispatch)  => {
    dispatch(setLoaded(false));
    axios.get('/pizzas/').then (({data}) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});