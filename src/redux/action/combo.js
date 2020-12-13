import axios from 'axios';


export const fetchCombo = () => (dispatch)  => {
    axios.get('/combo/').then (({data}) => {
        dispatch(setCombo(data));
    });
};

export const setCombo = (items) => ({
    type: 'SET_COMBO',
    payload: items,
});