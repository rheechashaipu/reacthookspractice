import React from 'react'
import {List, Header} from 'semantic-ui-react'
import moment from 'moment'

const OverDue = (props) => {
    
    const overdueServers = props.servers.filter(server => moment().diff(moment(server.deadline).format('l'), 'days') > 0)

    return(
        <div className="Overdue-Servers">
            <Header as="h2">Overdue Servers</Header>
            {overdueServers.map((server) => <List key={server.id} divided items={[server.hostname, server.ip, `${moment().diff(moment(server.deadline).format('l'), 'days')} days`]}/>)}
        </div>
    )
}

export default OverDue;