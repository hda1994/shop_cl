import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    };

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <NavLink to={SHOP_ROUTE}
                         style={{color: 'white'}}>Магазин</NavLink>
                {user.isAuth ? <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button key={1} variant={"outline-light"}
                                onClick={() => history.push(BASKET_ROUTE)}>Корзина</Button>
                        <Button key={2} variant={"outline-light"}
                                className="ms-2"
                                onClick={() => history.push(ADMIN_ROUTE)}>Панель администратора</Button>
                        <Button key={3} variant={"outline-light"}
                                className="ms-2"
                                onClick={() => logOut()}
                        >Выход</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button key={3} variant={"outline-light"}
                                onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
});

export default NavBar;
