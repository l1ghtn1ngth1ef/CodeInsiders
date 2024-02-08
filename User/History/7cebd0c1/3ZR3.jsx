import { useState } from 'react';
import { ClientOnly } from 'vite-ssr'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <ClientOnly>
<div>
    <main>
      <h1>App</h1>
      <p>Lorem Ipsum</p>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </main>
    </ClientOnly>
</div>
  );
};

export default App;
