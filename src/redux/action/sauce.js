import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADING_SAUCE',
    payload: false
});

export const fetchSauce = () => (dispatch)  => {
    dispatch(setLoaded(false));
    axios.get('/sauce/').then (({data}) => {
        dispatch(setSauce(data));
    });
};

export const setSauce = (items) => ({
    type: 'SET_SAUCE',
    payload: items,
});