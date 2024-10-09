import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, undoColor } from './colorSlice';

const RandomColor = () => {
  const currentColor = useSelector(state => state.colors.currentColor);
  const colorHistory = useSelector(state => state.colors.colorHistory);
  const dispatch = useDispatch();

  const generateColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    dispatch(changeColor(color));
  };

  return (
    <div>
      <h1>Random Color</h1>
      <button onClick={generateColor}>Change Background Color</button>
      <button onClick={() => dispatch(undoColor())}>Undo</button>
      <div>
        <p>Current Color: {currentColor}</p>
        <p>Color History: {colorHistory.join(', ')}</p>
      </div>
    </div>
  );
};

export default RandomColor;
