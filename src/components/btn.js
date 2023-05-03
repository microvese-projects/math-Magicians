import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({
  value, styled, id, onclick,
}) => (
  <button type="button" id={id} className={styled} onClick={() => { onclick(value); }}>
    {value}
  </button>
);

Btn.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  styled: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Btn;
