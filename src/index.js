import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
import './styles/global.scss';
import { Provider } from 'react-redux'
import store from '../src/redux/store/store'
import 'react-beautiful-dnd/dist/react-beautiful-dnd'
// import 'dist/react-beautiful-dnd.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

