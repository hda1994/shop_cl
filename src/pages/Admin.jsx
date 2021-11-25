import React, {useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import TypeModal from "../components/modals/TypeModal";
import BrandModal from "../components/modals/BrandModal";
import DeviceModal from "../components/modals/DeviceModal";

const Admin = () => {
    const [showDevice, setShowDevice] = useState(false);
    const [showBrand, setShowBrand] = useState(false);
    const [showType, setShowType] = useState(false);
    return (
        <Container className="d-flex flex-column ">
            <Button className="mt-4" variant={"outline-dark"} onClick={() => setShowDevice(true)}>Добавить устройство</Button>
            <Button className="mt-4" variant={"outline-dark"} onClick={() => setShowBrand(true)}>Добавить бренд устройства</Button>
            <Button className="mt-4" variant={"outline-dark"} onClick={() => setShowType(true)}>Добавит тип устройства</Button>


            <DeviceModal show={showDevice} handleClose={() => setShowDevice(false)}/>
            <BrandModal show={showBrand} handleClose={() => setShowBrand(false)}/>
            <TypeModal show={showType} handleClose={() => setShowType(false)}/>
        </Container>
    )
};

export default Admin;
