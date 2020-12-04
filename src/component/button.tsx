import React from 'react';
import './button.css';
import { useDispatch } from 'react-redux';
import { clickButton } from '../redux/actions/actions';

interface IButton {
  icon: string,
  color?: string,
  className?: string,
  value?: string,
  press?: (value:string)=>{}
}

const Button = ({
  icon,
  color = '#333',
  className = ' ',
  value,
  press = clickButton,
}: IButton) => {
  const dispatch = useDispatch();

  const click = () => {
    dispatch(press(value ? value : icon));
  };

  return (
    <div
      onClick={click}
      style={{ backgroundColor: color }}
      className={'Button ' + className}
    >
      {icon}
    </div>
  );
};

export { Button };
