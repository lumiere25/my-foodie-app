import { useState } from 'react';

function ButtonCounter() {
  const [ count, setCount ] = useState(0)
  return (
    <div>
    <button onClick={() => setCount(count + 1)}>
    click Me!
    </button>
    <p>You clicked{count} times!</p>
  </div>


  )
}

export default ButtonCounter