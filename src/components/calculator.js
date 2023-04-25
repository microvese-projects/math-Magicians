import React from 'react';
import Btn from './btn';
import Number from './number';

const Calculator = () => (
  <section id="calculator">
    <div id="output">
      <input type="text" readOnly value={123} />
    </div>
    <div id="inputs-container">
      <Btn value="AC" styled="btn normal" id="allClear" />
      <Btn value="+/-" styled="btn normal" id="addSubtract" />
      <Btn value="%" styled="btn normal" id="remainder" />
      <Btn value="÷" styled="btn colored" id="divide" />
      <Number value={7} styled="btn normal" />
      <Number value={8} styled="btn normal" />
      <Number value={9} styled="btn normal" />
      <Btn value="x" styled="btn colored" id="multiply" />
      <Number value={4} styled="btn normal" />
      <Number value={5} styled="btn normal" />
      <Number value={6} styled="btn normal" />
      <Btn value="-" styled="btn colored" id="subtract" />
      <Number value={1} styled="btn normal" />
      <Number value={2} styled="btn normal" />
      <Number value={3} styled="btn normal" />
      <Btn value="+" styled="btn colored" id="add" />
      <Number value={0} styled="btn normal dbl" />
      <Btn value="." styled="btn normal" id="period" />
      <Btn value="=" styled="btn colored" id="equals" />
    </div>
  </section>
);

export default Calculator;
