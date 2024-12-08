# Particli  

**Particli** is a lightweight and efficient React state management library designed to simplify application state handling. Built with TypeScript, Rollup, and React, it provides developers with a robust, type-safe, and intuitive API for managing global and local state.  

## Features  
- 🌟 **Lightweight**: Minimal performance overhead and optimized for modern applications.  
- 💻 **TypeScript Support**: Ensures type safety and enhanced developer experience.  
- 🔄 **Global and Local State**: Manage both app-wide state and component-specific state with ease.  
- 📦 **Rollup Bundled**: Delivers an optimized, production-ready package.  
- 🎯 **Custom Hooks**: Offers intuitive hooks for state updates and consumption.  
- ⚡ **React Integration**: Seamlessly integrates with React's component-based architecture.  
- 📚 **Well-Documented**: Includes clear and concise documentation for easy adoption.  

---

## Installation  

Install Particli via npm:  

```bash  
npm install particli  
```  

Or with yarn:  

```bash  
yarn add particli  
```  

---

## Getting Started  

### Basic Example  

```tsx  
import React from 'react';  
import { ParticliProvider, useParticliState } from 'particli';  

// Define your initial state  
const initialState = { count: 0 };  

const App = () => {  
  return (  
    <ParticliProvider initialState={initialState}>  
      <Counter />  
    </ParticliProvider>  
  );  
};  

const Counter = () => {  
  const [state, setState] = useParticliState();  

  const increment = () => setState({ count: state.count + 1 });  
  const decrement = () => setState({ count: state.count - 1 });  

  return (  
    <div>  
      <h1>Count: {state.count}</h1>  
      <button onClick={increment}>Increment</button>  
      <button onClick={decrement}>Decrement</button>  
    </div>  
  );  
};  

export default App;  
```  

---

## API  

### `ParticliProvider`  
Wrap your app with `ParticliProvider` to initialize and share state across components.  
- **Props**:  
  - `initialState` (required): The initial state object for your application.  

### `useParticliState()`  
A custom hook to access and update the global state.  
- **Returns**:  
  - `state`: The current global state.  
  - `setState`: A function to update the global state.  

---

## Development  

### Scripts  
- **Build**:  
  ```bash  
  npm run build  
  ```  

- **Test**:  
  ```bash  
  npm test  
  ```  

- **Lint**:  
  ```bash  
  npm run lint  
  ```  

---

## Contributing  

We welcome contributions! Please follow our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.  

---

## License  

Particli is licensed under the [MIT License](LICENSE).  

---  

Enjoy using **Particli**? Give it a ⭐ on [GitHub](https://github.com/your-repo-link)!  
