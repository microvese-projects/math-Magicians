import React from 'react';
import PropTypes from 'prop-types';

const Number = ({
  value, styled,
}) => (
  <div className={styled}>
    {value}
  </div>
);

Number.propTypes = {
  value: PropTypes.number.isRequired,
  styled: PropTypes.string.isRequired,
};

export default Number;
