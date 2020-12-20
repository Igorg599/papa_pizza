import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADING_SNACKS',
    payload: false
});

export const fetchSnacks = () => (dispatch)  => {
    dispatch(setLoaded(false));
    axios.get('/snacks/').then (({data}) => {
        dispatch(setSnacks(data));
    });
};

export const setSnacks = (items) => ({
    type: 'SET_SNACKS',
    payload: items,
});