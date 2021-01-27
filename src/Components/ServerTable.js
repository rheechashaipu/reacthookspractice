import React from 'react';
import { Popup, Table, Select } from 'semantic-ui-react';
import _ from 'lodash';
import moment from 'moment';

const ServerTable = (props) => {

    const {servers, deleteServer, setupServer} = props; 

    const tableheaders = ["Hostname", "IP", "Deadline", "Status"];
    const actionOptions = [
        {
            key: 1,
            value: 'Remove',
            text: 'Remove'
        },
        {
            key: 2,
            value: 'Complete',
            text: 'Complete'
        }
    ]

    const handleActionSelect = (e, data) => {
        if (data.value === 'Remove'){
            deleteServer(data.id);
        } else if (data.value === 'Complete') {
            setupServer(data.id)
        }
    }
   
    return(
        <div>
            <h1>Server Tracker</h1>
            {!_.isEmpty(servers) ? <Table celled>
                <Table.Header>
                    <Table.Row>
                        {tableheaders.map((text, index) => <Table.HeaderCell key={index}>{text}</Table.HeaderCell>)}
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {servers.map((server) => (
                        <Table.Row key={server.id}>
                            <Popup content={server.description} trigger={<Table.Cell>{server.hostname}</Table.Cell>}/>
                            <Table.Cell>{server.ip}</Table.Cell>
                            <Table.Cell>{moment(server.deadline).format('l')}</Table.Cell>
                            <Table.Cell>{server.setup ? "Completed" : "Pending"}</Table.Cell>
                            <Table.Cell collapsing>
                                <Select servers={servers} id={server.id} onChange={handleActionSelect} placeholder='Select action' options={actionOptions}/>
                            </Table.Cell>
                        </Table.Row>)
                        )
                    }
                </Table.Body>
            </Table> : <p>No servers available to view.</p>}
        </div>);
}

export default ServerTable;