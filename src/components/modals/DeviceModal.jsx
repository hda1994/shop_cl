import React, {useState, useEffect} from 'react';
import {Button, Col, Container, Dropdown, Form, Modal, Row} from 'react-bootstrap';
import {Context} from "../../index";
import {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {Autocomplete, TextField} from "@mui/material";

const DeviceModal = observer(({show, handleClose}) => {
    const {device} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState(null);
    const [type, setType] = useState(null);
    const [brand, setBrand] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(e => {
                device.setTypes(e);
            }
        );
        fetchBrands().then(e => {
                device.setBrands(e);
            }
        );
    }, []);

    const handleSave = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', img);
        formData.append('brandId', brand.id);
        formData.append('typeId', type.id);
        formData.append('info', JSON.stringify(info));

        createDevice(formData).then(() => {
            setName('');
            setPrice(0);
            setImg(null);
            setType(null);
            setBrand(null);
            setInfo([]);
            handleClose();
        });
    };

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    };
    const removeInfo = (number) => {
        setInfo(info.filter(elem => elem.number !== number));
    };
    const changeInfo = (key, value, number) => {
        setInfo(info.map(item => item.number === number ? {...item, [key]: value} : item))
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Новое устройство</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{brand?.name || 'Выбрать бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(item =>
                                <Dropdown.Item
                                    onClick={() => setBrand(item)}
                                    key={item.id}>{item.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{type?.name || 'Выбрать тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(item =>
                                <Dropdown.Item
                                    onClick={() => setType(item)}
                                    key={item.id}>{item.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder={'Название устройства...'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        type="number"
                        placeholder={'Стоимость устройства...'}
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={e => setImg(e.target.files[0])}
                    />
                    <hr/>
                    <Button
                        className="mb-2"
                        variant={"outline-dark"}
                        onClick={() => addInfo()}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(elem =>
                        <Row key={elem.number}>
                            <Col md={4}>
                                <Form.Control
                                    className="mb-2"
                                    placeholder={'Название свойства...'}
                                    value={elem.title}
                                    onChange={(e) => changeInfo('title', e.target.value, elem.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    className="mb-2"
                                    placeholder={'Описание свойства...'}
                                    value={elem.description}
                                    onChange={(e) => changeInfo('description', e.target.value, elem.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    className="mb-2"
                                    variant={"outline-danger"}
                                    onClick={() => removeInfo(elem.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}

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
});

export default DeviceModal;

