import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>This is correct and should work because a div is really good for this task.</div>
      <Image src='/vercel.svg' alt='' width='30' height='30'/>
    </div>
  );
};

export default App;
