import React, {useState} from 'react'
import {Button, Modal, Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
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
                        <input name="hostname" ref={register({ 
                            required: "⚠ This is required."})}/>
                        <ErrorMessage errors={errors} name="hostname" as="p" className={'errorMessage'} />
                    </Form.Field>
                    <Form.Field>
                        <label>IP</label>
                        <input name="ip" ref={register({
                            required: "Please enter a valid ip address.",
                            pattern: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
                        })} />
                        <ErrorMessage errors={errors} name="ip" as="p" className={'errorMessage'} />
                    </Form.Field>
                    <Form.Field>
                        <label>Deadline</label>
                        <input name="deadline" ref={register({
                            required: "Please enter a valid date in MM/DD/YYYY format.",
                            validate: value => moment(value, 'MM/DD/YYYY', true).isValid()
                        })} />
                        <ErrorMessage errors={errors} name="deadline" as="p" className={'errorMessage'} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input name="description" ref={register({
                            required: "⚠ This is required."
                        })} />
                        <ErrorMessage errors={errors} name="description" as="p" className={'errorMessage'} />
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
