import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Components/Header/index';
import MenuBar from './Components/MenuBar/index';
import Preview from './Components/Preview/index';
import './App.css';

const App = () => {

  const preview = useSelector((state) => state.preview) || [];

  return (
    <div className="wrapper">
      <Header items={preview} />
      <div className="container menu-builder">
        <div className="row">
          <MenuBar />
          <Preview items={preview} />
        </div>
      </div>
    </div>
  );

}

export default App;
