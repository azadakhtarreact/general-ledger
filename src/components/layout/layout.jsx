import { useState } from "react";
import classNames from "classnames";

// Custom Component
import Header from "./Header";
import Footer from "./Footer";
  
// Custom Hook
// import useWindowSize from "../Hook/windowSize";

const Layout = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    // const windowSize = useWindowSize();

    const authenticatedRoute = ['/login', '/organizer-login', '/register', '/forget-password', '/reset-password', '/about-us', '/contact-us', '/privacy-policy', '/terms-and-condition']
    
    /**
         * @function toggle
         * @params
         * @description set the visibility of sidebar menu
         */
  
    return <div className="App">
        {/* <div className="d-flex flex-grow-1">
            {windowSize?.width >= 992 ?
                <Sidebar toggle={toggle} isOpen={true} authenticatedRoute={authenticatedRoute} />
                :
                <Sidebar toggle={toggle} isOpen={isOpen} authenticatedRoute={authenticatedRoute} />
            }
            <Container fluid className={classNames("content overflow-hidden", { "is-open": isOpen })}
            >
                <Navbar toggle={toggle} authenticatedRoute={authenticatedRoute} />
                {props.children}
            </Container>
        </div> */}
        <div className={classNames("d-block", { "d-none d-lg-block": isOpen })}>
            <Header authenticatedRoute={authenticatedRoute} />
        </div>
        <main>{props.children}</main>
        <div className={classNames("d-block", { "d-none d-lg-block": isOpen })}>
            <Footer authenticatedRoute={authenticatedRoute} />
        </div>
    </div>
}

export default Layout;