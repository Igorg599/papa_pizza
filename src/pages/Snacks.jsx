import React from 'react';
import SnacksBlock from '../components/Blocks/SnacksBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSnacks} from '../redux/action/snacks';

function Snacks() {
    const dispatch = useDispatch();
    const items = useSelector(({snacks}) => snacks.items);
    React.useEffect(() => {
      dispatch(fetchSnacks());
    }, []);
  
    return (
      <div className="container">
          <div className="content__items">
            {
              items.map(obj => 
              <SnacksBlock 
              key={obj.id}
              {...obj}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Snacks;