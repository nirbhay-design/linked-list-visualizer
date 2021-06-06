import Linked_list_show from './Linked_list_show.js'
import './App.css';
import Actions from './Actions.js';
import {useState} from 'react'

function App() {
  const [listnodes,setListnodes] = useState([1,2,3,4,5,6]);
  return (
    <div className="app">
      <h1>Stack Using LinkedList</h1>
      <div className="container">
        {/* <h1>Lets start building guys</h1> */}
        <Linked_list_show lister={listnodes}/>
        {/* adding someting here */}
      </div>
      <div className="actions">
        <Actions lister={listnodes} setListN = {setListnodes}/>
      </div>
    </div>
  );
}

export default App;
