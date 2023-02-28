// import "./styles.css";
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export default function App() {
  console.log("レンダリング");

  // Stateの定義
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div className="App p-3">
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button className="btn btn-primary" onClick={onClickButton}>
        ボタン
      </button>
      <p>{num}</p>
    </div>
  );
}
