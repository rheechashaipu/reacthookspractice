import React, {useState} from 'react'
import {Button, Modal, Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import {addServer, getServers} from '../data';


const AddServer = (props) => {

    const {updateData} = props;
    const [open, setOpen] = useState(false);
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        addServer(data)
        updateData(getServers())
        setOpen(false);
    };

    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Add server</Button>}
        >
            <Modal.Header>Add Server</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field>
                        <label>Hostname</label>
                        <input name="hostname" ref={register} />
                    </Form.Field>
                    <Form.Field>
                        <label>IP</label>
                        <input name="ip" ref={register} />
                    </Form.Field>
                    <Form.Field>
                        <label>Deadline</label>
                        <input name="deadline" ref={register} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input name="description" ref={register} />
                    </Form.Field>
                    <Form.Field>
                        <Button type='submit'>Add Server</Button>
                    </Form.Field>

                </Form>
            </Modal.Content>

        </Modal>
    )
}
export default AddServer;