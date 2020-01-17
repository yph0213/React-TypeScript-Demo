import React from "react";
// 引入 container 组件 CountCon
import CountCon from "../../container/CounterCon";

// FC = Functional Component
// 功能组件
// SFC = Stateless Functional Component (已弃用)
// 无状态功能组件(已弃用)

export class Header extends React.Component {
  constructor(parameters: any) {
    super(parameters);
    console.log(parameters);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CountCon />
          {/* <Counter value={0} /> */}
        </header>
      </div>
    );
  }
}

// const Header: React.Component<personalInformation> = (props:personalInformation) => {
//     render(){
//         return (
//             <div className="App">
//               <header className="App-header">App头部</header>
//             </div>
//           );
//     }

// };

// export default Header;
