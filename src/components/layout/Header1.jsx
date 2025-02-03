
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { HiOutlineUser } from "react-icons/hi";
// import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
// import { FiSearch, FiLock } from "react-icons/fi";
// import { IoMdLogOut } from "react-icons/io";
import classNames from "classnames";
import React, { Fragment, useState, forwardRef, useEffect } from 'react'
import { Button, Badge, Stack, Container, Row, Col } from 'react-bootstrap'

// Images
// import { userPic } from "../../assets/images/index";

// Redux-Functions
import { selectToken, selectUser, setUser, setToken } from "../../redux/slices/userSlice"
// Utility Service
import { setUserSession, removeUserSession, getToken } from '../../utils/AuthService';

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedLanguage, setLanguage] = useState()
    const isToken = useSelector(selectToken)
    const token = getToken();
    const userDetail = useSelector(selectUser)

    const languages = [{ label: 'English', value: 'en' }, { label: 'Malay', value: 'ml' }]

    // console.log('isToken', isToken, userDetail)
    const handleLanguage = (e) => {
        const myLang = e?.value
        // console.log(e?.value)
        setLanguage(myLang)
    }


    useEffect(() => {
    }, [])

    return <div>
        <header className={classNames('', { "d-none": props.authenticatedRoute.includes(location.pathname) })}>
            <div className="my-8">
                <Container>
                    <Row>
                        <Col>
                        <div className="container mx-auto">
                    <div className="header">

                    </div>
                    <h1 className="text-5xl font-bold text-black">FOODI</h1>
                    <Button as="a" variant="primary">
                        Button as link
                    </Button>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="primary">Primary</Badge>
                        <Badge bg="secondary">Secondary</Badge>
                        <Badge bg="success">Success</Badge>
                        <Badge bg="danger">Danger</Badge>
                        <Badge bg="warning" text="dark">
                            Warning
                        </Badge>
                        <Badge bg="info">Info</Badge>
                        <Badge bg="light" text="dark">
                            Light
                        </Badge>
                        <Badge bg="dark">Dark</Badge>
                    </Stack>
                </div></Col>
                    </Row>
                </Container>
            </div>

        </header>

    </div>

};

export default Header;