import React from 'react';
import SauceBlock from '../components/Blocks/SauceBlock';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSauce} from '../redux/action/sauce';

function Sauce() {
    const dispatch = useDispatch();
    const items = useSelector(({sauce}) => sauce.items);
    React.useEffect(() => {
      dispatch(fetchSauce());
    }, []);
  
    return (
      <div className="container">
          <div className="content__items">
            {
              items.map(obj => 
              <SauceBlock 
              key={obj.id}
              {...obj}/>)
            }
          </div>
      </div>
    )
  }
  
  export default Sauce;