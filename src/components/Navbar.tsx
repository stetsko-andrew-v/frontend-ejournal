import '../css/navbar.css'
import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {token} = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo center">Чернівецький ліцей №1</Link>
                {token ? <ul id="nav-mobile" className="right" style={{height: '100%'}}>
                    <li style={{height: '100%'}}>
                        {window.innerWidth >= 600 ? <Link to={'/'} className="nav-btn">
                            <img
                                className="circle responsive-img left profile-pic"
                                src="http://192.168.3.3:5500/photo_2022-01-17_23-00-41.jpg"
                                alt={"АПІ НАКРИЛОСЬ, стучіться Стецьку"}
                                style={{marginRight: '10px'}}
                            />Зеленько Олександр</Link>: <Link to={'/'} style={{height: '100%'}} className="nav-btn">
                            <img
                                className="circle responsive-img profile-pic"
                                src="http://192.168.3.3:5500/photo_2022-01-17_23-00-41.jpg"
                                alt={"АПІ НАКРИЛОСЬ, стучіться Стецьку"}
                            />
                        </Link>}
                    </li>
                </ul> : <></>}
            </div>
        </nav>
    )
}

export default Navbar;