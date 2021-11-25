import React, {useState} from 'react';
import {Button, Container, Form, Modal} from 'react-bootstrap';
import {createBrand} from "../../http/deviceAPI";

const BrandModal = ({show, handleClose}) => {
    const [value, setValue] = useState('');
    const handleSave = () => {
        createBrand({name: value}).then(() => {
            setValue('');
            handleClose();
        });
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Бренд устройства</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Введите бренд..."
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

export default BrandModal;

