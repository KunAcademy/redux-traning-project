import { Tabs } from "antd";
import "./App.css";
import Counter from "./example/Counter";
import Todolist from "./example/Todolist";

const App = () => {
  const items = [
    { label: "Todolist", key: "1", children: <Todolist />}, 
    { label: "Counter", key: "2", children: <Counter />}
  ]
  return (
    <div className="App">
      <Tabs items={items}>
      </Tabs>
    </div>
  );
};

export default App;
