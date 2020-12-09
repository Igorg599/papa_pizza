import React from 'react';
import PropTypes from 'prop-types';


const Categories = React.memo(
  function Categories({items}) {

    return (
      <div>
          <div className="categories">
            <ul>
              <li className='active'>Пицца</li>
              {items &&
              items.map((name) => (
                <li className=''>{name}</li>
              ))}
            </ul>
          </div>
      </div>
    )
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Categories.defaultProps = {
  items: []
};

export default Categories;
