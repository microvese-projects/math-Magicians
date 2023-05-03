import React from 'react';
import PropTypes from 'prop-types';

const Number = ({
  value, styled, onclick,
}) => (
  <button type="button" className={styled} onClick={() => { onclick(value); }}>
    {value}
  </button>
);

Number.propTypes = {
  value: PropTypes.string.isRequired,
  styled: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Number;
