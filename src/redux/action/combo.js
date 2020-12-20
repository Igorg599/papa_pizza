import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADING_COMBO',
    payload: false
});

export const fetchCombo = () => (dispatch)  => {
    dispatch(setLoaded(false));
    axios.get('/combo/').then (({data}) => {
        dispatch(setCombo(data));
    });
};

export const setCombo = (items) => ({
    type: 'SET_COMBO',
    payload: items,
});