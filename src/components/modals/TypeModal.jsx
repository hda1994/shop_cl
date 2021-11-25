import React, {useState} from 'react';
import {Button, Container, Form, Modal} from 'react-bootstrap';
import {createType} from "../../http/deviceAPI";

const TypeModal = ({show, handleClose}) => {
    const [value, setValue] = useState('');
    const handleSave = () => {
        createType({name: value}).then(() => {
            setValue('');
            handleClose();
        });
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Тип устройства</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Введите тип..."
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant={"outline-success"} onClick={handleSave}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default TypeModal;

