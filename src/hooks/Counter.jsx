import React, { useState, Fragment } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
  const [count, setState] = useState(0); // use array destructuring!
  //const count = array[0]; //this.state.count
  //const setState = array[1]; //this.setState()
  const [name, setName] = useState('');

  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <div>
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
