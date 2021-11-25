import React, {useContext} from 'react';
import {Row, Card} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import {Context} from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row>
            {device.devices
            ?.map(deviceItem =>
                <DeviceItem key={deviceItem.id} device={deviceItem}/>
            )}
        </Row>
    )
});

export default DeviceList;
