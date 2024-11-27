# Particli

*Tiny state management for React.*

Particli makes managing state in React apps simple and efficient. Create reactive state units called *atoms* and use them across your components.

---

## Installation

bash
npm install particli


---

## Usage

### 1. Create an Atom

Atoms hold state values or derived state.

tsx
import { atom } from "particli";

const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);


---

### 2. Use Atoms in Components

#### Read and Update State

tsx
import { useAtom } from "particli";

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};


#### Read Only

tsx
import { useAtomValue } from "particli";

const DoubleCounter = () => {
  const doubleCount = useAtomValue(doubleCountAtom);

  return <p>Double Count: {doubleCount}</p>;
};


---

## API

- **atom(initialValue)**: Create an atom.
- **useAtom(atom)**: Read and update atom state. Returns [value, setValue].
- **useAtomValue(atom)**: Read atom value. Returns value.

---

## License

MIT © 2024 Raju Sarkar

---