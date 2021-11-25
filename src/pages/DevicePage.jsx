import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/star.png';
import {fetchOneDevice} from "../http/deviceAPI";
import {useParams} from 'react-router-dom';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();
    useEffect(() => {
        fetchOneDevice(id).then(e => {
            setDevice(e)
        })
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>

                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>
                            {device.name}
                        </h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${star}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 50
                            }}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card className="pb-2 d-flex flex-column align-items-center justify-content-around"
                          style={{width: 300, height: 300, fontSize: 30, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="mt-2">
                    <h1>Характеристики</h1>
                </Col>
                {device.info.map((item, index) =>
                    <Col md={12} key={item.id}>
                        <div className="p-2"
                             style={{background: index % 2 ? 'transparent' : 'lightgray'}}>
                            {item.title}: {item.description}</div>
                    </Col>
                )}
            </Row>
        </Container>
    )
};

export default DevicePage;
