import React, {useContext} from 'react';
import {Button, InputGroup, FormControl} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import {useHistory} from 'react-router-dom';
import {createBasketDevice, removeBasketDevice} from "../http/basketAPI";
import {Context} from "../index";

const CountBar = observer(({device}) => {
    const history = useHistory();
    const {basket} = useContext(Context);

    const decElem = async (device) => {
        removeBasketDevice(device).then(e => {
            console.log(e);
            basket.setBasketDevices(e.devices);
        })
    };
    const incElem = async (device) => {
        createBasketDevice(device).then(e => {
            console.log(e);
            basket.setBasketDevices(e.devices);
        })
    };

    return (
        <InputGroup className="mb-3">
            <Button
                onClick={() => decElem(device)}
            >-</Button>
            <FormControl
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
                value={device.basket_devices[0].quantity}

            />
            <Button
                onClick={() => incElem(device)}
            >+</Button>
        </InputGroup>
    )
});

export default CountBar;
