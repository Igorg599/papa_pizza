import React from 'react';
import ComboBlock from '../components/Blocks/ComboBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCombo} from '../redux/action/combo';

function Combo() {
    const dispatch = useDispatch();
    const items = useSelector(({combo}) => combo.items);
    React.useEffect(() => {
      dispatch(fetchCombo());
    }, []);
  
    return (
      <div className="container">
          <div className="content__items">
            {
              items.map(obj => 
              <ComboBlock 
              key={obj.id}
              {...obj}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Combo;