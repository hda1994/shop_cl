import React, {useContext} from 'react';
import {Row, Card} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import {Context} from "../index";
import BasketItem from "./BasketItem";

const BasketList = observer(() => {
    const {basket} = useContext(Context);
    return (
        <Row>
            {basket.basketDevices
            ?.map(deviceItem =>
                <BasketItem key={deviceItem.id} device={deviceItem}/>
            )}
        </Row>
    )
});

export default BasketList;

