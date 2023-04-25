import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({
  value, styled, id,
}) => (
  <div id={id} className={styled}>
    {value}
  </div>
);

Btn.propTypes = {
  value: PropTypes.symbol.isRequired,
  id: PropTypes.string.isRequired,
  styled: PropTypes.string.isRequired,
};

export default Btn;
