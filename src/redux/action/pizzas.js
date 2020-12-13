import axios from 'axios';


export const fetchPizzas = () => (dispatch)  => {
    axios.get('/pizzas/').then (({data}) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});