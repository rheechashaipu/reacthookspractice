/*
    The incomplete skeleton of a mock API.
    Modify, extend or ignore this file to meet your needs.
*/

var data = [
    {
        "id":101,
        "hostname":"core",
        "description":"The central devices we rely on and scan regularly.",
        "ip": "1.2.3.4",
        "deadline": "2020-04-23T18:30:00.000Z",
        "setup": false
    },
    {
        "id":102,
        "hostname":"backup",
        "description":"Lorem ipsum backup.",
        "ip": "255.255.255.255",
        "deadline": "2018-07-23T18:30:00.000Z",
        "setup": false
    },
    {
        "id":103,
        "hostname":"external",
        "description":"Lorem ipsum external.",
        "ip": "1.0.0.0",
        "deadline": "2021-07-23T12:30:00.000Z",
        "setup": false
    }
];

function getServers() {
    return data;
}

function addServer(server){
    server.id = data[data.length-1].id + 1;  // Naive unique ID
    server.setup = false;
    data = [...data, server];
    return data;
}

function removeServer(id){
    data = data.filter( s => s.id !== id);
    return data;
}

function setupServer(id){
    data.filter(s => s.id === id)[0].setup = true;
    return data;
}

export {
    getServers,
    removeServer,
    addServer,
    setupServer
}