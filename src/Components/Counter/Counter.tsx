import * as React from "react";

// 创建类型接口
export interface Iprops {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

// 使用接口代替 PropTypes 进行类型校验
// const Counter = ({ value }: Iprops) => {
//   return <p>Clicked: {value} times</p>;
// };

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<Iprops> {
  public render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        <br />
        <br />
       <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
        <button onClick={onDecrement}> - </button>
      </p>
    );
  }
}

// export default Counter;
