import {useState} from 'react';
import {removeServer, setupServer} from './data.js';

export default (initialValue) => {
    const [servers, setServers] = useState(initialValue);

    return {
        servers,
        addNewServer: (data) => {
            setServers([...servers, data])
        },
        deleteServer: (id) => {
            const updatedServerList = removeServer(id);
            setServers(updatedServerList);
        },
        setupServer: (id) => {
            const updatedServerList = setupServer(id)
            setServers(setupServer(id));
        }
    }
}