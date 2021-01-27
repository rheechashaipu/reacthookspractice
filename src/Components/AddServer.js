import React, {useState} from 'react'
import {Button, Modal, Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import _ from 'lodash';
import moment from 'moment';

const AddServer = (props) => {

    const {addNewServer} = props;
    const [open, setOpen] = useState(false);
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        addNewServer(data)
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
                        <input name="hostname" placeholder="Please enter a hostname." ref={register({ 
                            required: true})}/>
                        {errors.hostname && <p className={'errorMessage'}>⚠ This is required.</p>}
                    </Form.Field>
                    <Form.Field>
                        <label>IP</label>
                        <input name="ip" placeholder="Please enter a valid ipv4 address." ref={register({
                            required: true,
                            pattern: /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/
                        })} />
                        {errors.ip && <p className={'errorMessage'}>⚠ Please enter a valid ipv4 address.</p>}
                    </Form.Field>
                    <Form.Field>
                        <label>Deadline</label>
                        <input name="deadline" 
                        placeholder={"Please enter a valid date in MM/DD/YYYY format"} 
                        ref={register({
                            validate: value => moment(value, 'MM/DD/YYYY', true).isValid()
                        })} />
                        {errors.deadline && <p className={'errorMessage'} >⚠ Please enter a valid date in MM/DD/YYYY format.</p>}
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input name="description" placeholder="Please enter a description." ref={register({
                            required: true
                        })} />
                        {errors.description && <p className={'errorMessage'}>⚠ This is required.</p>}

                    </Form.Field>
                    <Form.Field>
                        <Button type='submit' className='Add-Server' >Add Server</Button>
                    </Form.Field>

                </Form>
            </Modal.Content>

        </Modal>
    )
}
export default AddServer;
