import './App.css';
import {Grid, Segment} from 'semantic-ui-react';
import ServerTable from './Components/ServerTable.js';
import OverDue from './Components/OverDue.js';
import AddServer from './Components/AddServer.js'
import useServersState from './useServersState.js'
import {getServers} from './data';


function App() {


  const initialServerList = getServers();
  const {servers, addNewServer, deleteServer, setupServer} = useServersState(initialServerList)

  return (
    <div className="App">
        <Grid divided columns={2} stackable>
            <Grid.Column width={12}>
              <div className='First-Column'>
                <AddServer  addNewServer={addNewServer} />
                <ServerTable servers={servers} deleteServer={deleteServer} setupServer={setupServer} />
              </div>
 
            </Grid.Column>
            <Grid.Column width={4}>
            <OverDue servers={servers} />

            </Grid.Column>
        </Grid>


      {/* <AddServer  addNewServer={addNewServer} />
      <ServerTable servers={servers} deleteServer={deleteServer} setupServer={setupServer} /> */}
      {/* <OverDue servers={servers} /> */}
    </div>
  );
}

export default App;
