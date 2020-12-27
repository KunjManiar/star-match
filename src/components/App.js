import React, {useState, useEffect} from 'react';

import StarMatch from './StarMatch'






// ReactDOM.render(<StarMatch />, mountNode);	

export function App({ initialData }) {
  // const [count, setCount] = React.useState(0);
  return (
    <StarMatch />
    // <div>
    //   <h1>{initialData.appName}</h1>
    //   This is a sample stateful and server-side rendered React application.
    //   <br />
    //   <br />
    //   Here is a button that will track how many times you click it:
    //   <br />
    //   <br />
    //   <button title="increment" onClick={() => setCount(count + 1)}>
    //     {count}
    //   </button>
    // </div>
  );
}
