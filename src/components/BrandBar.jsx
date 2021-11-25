import React, {useContext} from 'react';
import {Card} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <div className="d-flex flex-wrap justify-content-start">
            {device.brands.map(brand =>
                <Card
                    className="p-3 me-2 mb-2"
                    style={{cursor: "pointer"}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
            <Card
                className="p-3 me-2 mb-2"
                style={{cursor: "pointer"}}
                onClick={() => device.setSelectedBrand({})}
            >
                Сбросить
            </Card>
        </div>
    )
});

export default BrandBar;
