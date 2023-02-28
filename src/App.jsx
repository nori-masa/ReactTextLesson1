import "./styles.css";
import { ColoredMessage } from "./components/ColoredMessage";

export default function App() {
  const onClickButton = () => {
    alert();
  };

  return (
    <div className="App p-3">
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button className="btn btn-primary" onClick={onClickButton}>
        ボタン
      </button>
    </div>
  );
}
