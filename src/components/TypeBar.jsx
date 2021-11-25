import React, {useContext} from 'react';
import {ListGroup} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={type.id === device.selectedType.id}
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                 >
                    {type.name}
                </ListGroup.Item>
            )}
            <ListGroup.Item
                style={{cursor: "pointer"}}
                onClick={() => device.setSelectedType({})}
            >
                Сбросить
            </ListGroup.Item>
        </ListGroup>
    )
});

export default TypeBar;
