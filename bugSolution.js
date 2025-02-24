```javascript
import { useState, useEffect } from 'react';
import useUnmount from 'use-unmount'; // Install this hook: npm install use-unmount

function MyComponent() {
  const [count, setCount] = useState(0);
  const isUnmounting = useUnmount();

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    return () => {
      if (!isUnmounting) {
        console.log('Unmounted!');
      }
    };
  }, []);

  useEffect(() => {
    // This effect runs after every render
    console.log('Updated!');
    return () => {
      if (!isUnmounting) {
        console.log('Unmounted!');
      }
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```