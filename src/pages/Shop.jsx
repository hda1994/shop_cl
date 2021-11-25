import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from 'mobx-react-lite';
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context);
    useEffect(() => {
        fetchTypes().then(e => {
            device.setTypes(e);
            }
        );
        fetchBrands().then(e => {
                device.setBrands(e);
            }
        );
        fetchDevices(null, null, 1, 3).then(e => {
                device.setDevices(e.rows);
                device.setTotalCount(e.count);
            }
        );
    }, []);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(e => {
                device.setDevices(e.rows);
                device.setTotalCount(e.count);
            }
        );
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
});

export default Shop;
