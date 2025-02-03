// import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const Footer = (props) => {
    const location = useLocation();

    return <div className="FooterBg">
        <footer className={classNames('', { "d-none": props.authenticatedRoute.includes(location.pathname) })}>

        <h1 className="text-5xl font-bold text-black">Footer</h1>

        </footer>
    </div>
};

export default Footer;