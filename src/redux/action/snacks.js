import axios from 'axios';


export const fetchSnacks = () => (dispatch)  => {
    axios.get('/snacks/').then (({data}) => {
        dispatch(setSnacks(data));
    });
};

export const setSnacks = (items) => ({
    type: 'SET_SNACKS',
    payload: items,
});