import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._basketDevices = [];
        makeAutoObservable(this);
    }


    setBasketDevices(basketDevices) {
        this._basketDevices = basketDevices;
    }


    get basketDevices() {
        return this._basketDevices;
    }

}