import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import star from '../assets/star.png';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";
import {createBasketDevice} from "../http/basketAPI";
import {Context} from "../index";
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";


const DeviceItem = observer(({device}) => {
    const history = useHistory();
    const {basket} = useContext(Context);

    const handleClick = async (device) => {
        createBasketDevice(device).then(e => {
            console.log(e);
            basket.setBasketDevices(e.devices);
        })
    };

    return (
            <Card sx={{maxWidth: 340}}
                  style={{cursor: 'pointer'}}
                  onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <CardMedia
                    component="img"
                    image={process.env.REACT_APP_API_URL + device.img}
                    alt={`${device.name}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {device.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica, <span>{device.rating}</span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={() => handleClick(device)}
                    >Добавить в корзину</Button>
                </CardActions>
            </Card>
    )
});


// const DeviceItem = observer(({device}) => {
//     const history = useHistory();
//     const {basket} = useContext(Context);
//
//     const handleClick = async (device) => {
//         createBasketDevice(device).then(e => {
//             console.log(e);
//             basket.setBasketDevices(e.devices);
//         })
//     };
//
//     return (
//         <Col md={3} className="mb-3">
//             <Card
//                 style={{width: 150, cursor: 'pointer'}}
//                 border={'light'}
//                 onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
//             >
//                 <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
//                 <div className="d-flex justify-content-between mt-1">
//                     <div className="text-black-50">
//                         type and brand
//                     </div>
//                     <div className="d-flex align-items-center">
//                         <div>{device.rating}</div>
//                         <Image width={18} height={18} src={star}/>
//                     </div>
//                 </div>
//                 <div>
//                     {device.name}
//                 </div>
//
//             </Card>
//             <Button
//                 variant={"outline-dark"}
//                 className="ms-2"
//                 onClick={() => handleClick(device)}
//             >Добавить в корзину</Button>
//         </Col>
//     )
// });

export default DeviceItem;
