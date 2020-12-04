import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Button } from './component/button';
import { IcalcState } from './redux/reducer/reducer';
import { first, fourth, second, third } from './valueButtonCalc/data';

function App() {
  const arrIcon = [first, second, third, fourth];

  interface IbuttonCalc {
    value?: string;
    color?: string;
    icon: string;
    class?: string;
    press?:
      | ((
          value: string
        ) => {
          type: string;
          number: any;
        })
      | undefined
      | ((
          value: string
        ) => {
          type: string;
        });
  }

  const li = (arr: IbuttonCalc[]) => {
    return arr.map((el: IbuttonCalc) => {
      return (
        <li key={el.icon}>
          <Button
            icon={el.icon}
            color={el.color}
            className={el.class}
            value={el.value}
            press={el.press}
          />
        </li>
      );
    });
  };

  const list = arrIcon.map((el, i: number) => {
    return <ul key={i}>{li(el)}</ul>;
  });

  const num = useSelector(({ calc }: IcalcState) => {
    return calc.viewNumber;
  });

  const size = num.length < 7 ? 'App-input' : 'App-input size';

  return (
    <div className='App'>
      <div className='App-body'>
        <div className='calc'>
          <div className={size}>{num}</div>
          <div className='body-calc'>{list}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
