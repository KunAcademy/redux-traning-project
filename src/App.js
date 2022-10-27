import { Button, Tabs } from 'antd';
import './App.css';
import Counter from './example/Counter';

function App() {
  
  return (
    <div className="App">
      <Tabs>
        <Tabs.TabPane tab="Counter" key="1">
          <Counter />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
