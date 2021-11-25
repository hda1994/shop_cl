import React, {useContext} from 'react';
import {Col, Card, Image, Button} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import star from '../assets/star.png';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";
import {createBasketDevice, removeBasketDevice} from "../http/basketAPI";
import {Context} from "../index";
import CountBar from "./CountBar";

const BasketItem = observer(({device}) => {
    const history = useHistory();
    const {basket} = useContext(Context);

    return (
        <Col md={3} className="mb-3">
            <Card
                style={{width: 150, cursor: 'pointer'}}
                border={'light'}
                onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
            >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="d-flex justify-content-between mt-1">
                    <div className="text-black-50">
                        type and brand
                    </div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
                <div>
                    {device.basket_devices[0].quantity}
                </div>
            </Card>
            <CountBar device={device}/>
        </Col>
    )
});

export default BasketItem;
