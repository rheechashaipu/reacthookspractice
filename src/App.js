import './App.css';
import ServerTable from './Components/ServerTable.js';
import OverDue from './Components/OverDue.js';
import AddServer from './Components/AddServer.js'
import useServersState from './useServersState.js'
import {getServers} from './data';


function App() {


  const initialServerList = getServers();
  const {servers, addNewServer, deleteServer, setupServer} = useServersState(initialServerList)

  console.log(servers);

  return (
    <div className="App">
      <AddServer  addNewServer={addNewServer} />
      <ServerTable servers={servers} deleteServer={deleteServer} setupServer={setupServer} />
      <OverDue servers={servers} />
    </div>
  );
}

export default App;
