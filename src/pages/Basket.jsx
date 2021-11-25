import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from 'mobx-react-lite';
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {fetchBasketDevices} from "../http/basketAPI";
import Pages from "../components/Pages";
import BasketList from "../components/BasketList";

const Basket = observer(() => {
    const {basket} = useContext(Context);
    useEffect(() => {
        fetchBasketDevices().then(e => {
                console.log(e);
                basket.setBasketDevices(e.devices);
            }
        );
    }, []);

    return (
        <Container>
            <BasketList/>
        </Container>
    )
});

export default Basket;
