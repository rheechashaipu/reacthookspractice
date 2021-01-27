import {useState} from 'react';
import {removeServer, setupServer, addServer} from './data.js';

export default (initialValue) => {
    const [servers, setServers] = useState(initialValue);

    return {
        servers,
        addNewServer: (data) => {
            const updatedServerList = addServer(data)
            setServers(updatedServerList);
        },
        deleteServer: (id) => {
            const updatedServerList = removeServer(id);
            setServers(updatedServerList);
        },
        setupServer: (id) => {
            const updatedServerList = [...setupServer(id)]
            setServers(updatedServerList);
        }
    }
}