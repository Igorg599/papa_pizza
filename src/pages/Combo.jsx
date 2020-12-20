import React from 'react';
import ComboBlock from '../components/Blocks/ComboBlock';
import {useSelector, useDispatch} from 'react-redux';
import LoadingBlock from '../components/Blocks/LoadingBlock';
import {fetchCombo} from '../redux/action/combo';

function Combo() {
    const dispatch = useDispatch();
    const items = useSelector(({combo}) => combo.items);
    const isLoaded = useSelector(({combo}) => combo.isLoaded);
    React.useEffect(() => {
      dispatch(fetchCombo());
    }, []);
  
    return (
      <div className="container">
          <div className="content__items">
            { isLoaded ?
              items.map(obj => 
              <ComboBlock 
              key={obj.id}
              {...obj}/>)
              : Array(4).fill(0).map((_, index) => <LoadingBlock key={index}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Combo;