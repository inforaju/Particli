import './App.css'
// import { atom, useAtom, useAtomValue } from "./core";
import { atom, useAtom, useAtomValue } from "particli";
// Define atoms
const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Use atoms in components
function Counter() {
  const [count, setCount] = useAtom(countAtom) as [number, (newValue: number) => void];
  const doubleCount = useAtomValue(doubleCountAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
function App() {


  return (
    <>
      <h1>Atom</h1>
      <Counter />
    </>
  )
}

export default App
