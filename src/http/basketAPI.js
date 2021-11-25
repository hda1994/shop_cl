import {$authHost, $host} from "./index";

const createBasketDevice = async (device) => {
    const {data} = await $authHost.post('api/basket', device);
    localStorage.setItem('token', data.token);
    return data;
};

const removeBasketDevice = async (device) => {
    const {data} = await $authHost.post('api/basket/remove', device);
    localStorage.setItem('token', data.token);
    return data;
};


const fetchBasketDevices = async () => {
    const {data} = await $authHost.get('api/basket');
    localStorage.setItem('token', data.token);
    return data;
};



export {
    createBasketDevice,
    removeBasketDevice,
    fetchBasketDevices

}