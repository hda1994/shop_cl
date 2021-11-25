import './App.css';
import React, {useEffect, useContext, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {observer} from 'mobx-react-lite';


const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then((e) => {
            user.setUser(e);
            user.setIsAuth(true);
        }).finally(() => {
            setLoading(false);
        })
    }, []);
    return <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
});

export default App;
