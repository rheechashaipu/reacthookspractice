import React from 'react'
import {List, Header} from 'semantic-ui-react'
import moment from 'moment'

const OverDue = (props) => {
    

    return(
        <div className="Overdue-Servers">
            <Header as="h2">Overdue Servers</Header>
            {props.servers.filter(server => (moment().diff(moment(server.deadline).format('l'), 'days') > 0) && server.setup === false).map((server) => <List className="List-Background" key={server.id} relaxed items={[server.hostname, server.ip, `${moment().diff(moment(server.deadline).format('l'), 'days')} days`]}/>)}
        </div>
    )
}

export default OverDue;