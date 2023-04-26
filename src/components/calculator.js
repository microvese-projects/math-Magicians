import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Btn from './btn';
import Number from './number';
// import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  function handleClick(value) {
    console.log(value);
    setState((prev) => {
      const newObj = calculate(prev, value);
      return newObj;
    });
  }

  return (
    <section id="calculator">
      <div id="output">
        <input type="text" readOnly value={state.total ?? 0} />
        <input type="text" readOnly value={state.next ?? 0} />
      </div>
      <div id="inputs-container">
        <Btn value="AC" styled="btn normal" id="allClear" onclick={(value) => handleClick(value)} />
        <Btn value="+/-" styled="btn normal" id="addSubtract" onclick={(value) => handleClick(value)} />
        <Btn value="%" styled="btn normal" id="remainder" onclick={(value) => handleClick(value)} />
        <Btn value="÷" styled="btn colored" id="divide" onclick={(value) => handleClick(value)} />
        <Number value="7" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Number value="8" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Number value="9" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Btn value="x" styled="btn colored" id="multiply" onclick={(value) => handleClick(value)} />
        <Number value="4" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Number value="5" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Number value="6" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Btn value="-" styled="btn colored" id="subtract" onclick={(value) => handleClick(value)} />
        <Number value="1" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Number value="2" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Number value="3" styled="btn normal" onclick={(value) => handleClick(value)} />
        <Btn value="+" styled="btn colored" id="add" onclick={(value) => handleClick(value)} />
        <Number value="0" styled="btn normal dbl" onclick={(value) => handleClick(value)} />
        <Btn value="." styled="btn normal" id="period" onclick={(value) => handleClick(value)} />
        <Btn value="=" styled="btn colored" id="equals" onclick={(value) => handleClick(value)} />
      </div>
    </section>
  );
};

export default Calculator;
