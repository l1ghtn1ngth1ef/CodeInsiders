import { useState } from 'react';
import { HydrationProvider, Server, Client } from "react-hydration-provider";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <HydrationProvider>

    <main>
      <h1>App</h1>
      <p>Lorem Ipsum</p>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </main>
  );
};

export default App;
