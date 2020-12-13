import {combineReducers} from 'redux';

import filters from './filters';
import pizzas from './pizzas';
import drink from './drink';
import sauce from './sauce';
import snacks from './snacks';
import combo from './combo';


const rootReducer = combineReducers({
    filters,
    pizzas,
    drink,
    sauce,
    snacks,
    combo
});

export default rootReducer ;