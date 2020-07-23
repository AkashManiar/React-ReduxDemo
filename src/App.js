import React from 'react';
import ParentItemContainer from './components'
import { Provider } from 'react-redux'
import store from "./redux/store"

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ParentItemContainer />
      </div>
    </Provider>
    
  );
}

export default App;
