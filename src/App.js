import "./styles.css";
import Left from "./Left.js";
import Right from "./Right.js";
export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Left />
        <Right />
      </div>
    </div>
  );
}
