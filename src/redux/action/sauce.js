import axios from 'axios';


export const fetchSauce = () => (dispatch)  => {
    axios.get('/sauce/').then (({data}) => {
        dispatch(setSauce(data));
    });
};

export const setSauce = (items) => ({
    type: 'SET_SAUCE',
    payload: items,
});