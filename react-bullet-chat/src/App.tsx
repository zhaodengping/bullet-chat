import React from 'react';
import './App.scss';

function App() {
  const bulletList=['真好看']
  return (
    <div className="App">
        <div className='bullet-list'>
          {
            bulletList.map(item=>{
              return <span>{item}</span>
            })
          }
        </div>
        <div>
          <input type="text"/>
          <button>发送</button>
        </div>
    </div>
  );
}

export default App;
