import './App.css';
import ServerTable from './Components/ServerTable.js';
import OverDue from './Components/OverDue.js';
import AddServer from './Components/AddServer.js'
import {useState} from 'react';
import {getServers} from './data';


function App() {

  const [serverData, set_ServerData] = useState(getServers())

  const updateData = (data) => {
    set_ServerData(data)
    // console.log(serverData)
  }

  return (
    <div className="App">
      <AddServer  updateData={updateData} />
      <ServerTable servers={serverData} updateData={updateData} />
      <OverDue servers={serverData} />
    </div>
  );
}

export default App;
