import '../css/navbar.css'
import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {token, logout} = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo center">Чернівецький ліцей №1</Link>
                {token ? <ul id="nav-mobile" className="right" style={{height: '100%'}}>
                    <li style={{height: '100%'}}>
                        <a className="nav-btn">
                            <img
                                className="circle responsive-img profile-pic"
                                src={'test/photo_2022-01-17_23-00-41.jpg'}
                                alt={"0"}
                                // style={{marginRight: '10px'}}
                            /><span>Зеленько Олександр</span>
                        </a>
                    </li>
                    <li className="li-active">
                        <a onClick={logout}>
                            <i className="material-icons">exit_to_app</i>
                        </a>
                    </li>
                </ul> : <></>}
            </div>
        </nav>
    )
}

export default Navbar;