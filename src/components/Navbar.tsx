import '../css/navbar.css'
import {useContext, useEffect} from "react";
import AuthContext from "../context/AuthContext";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    const {token, logout} = useContext(AuthContext);

    useEffect(() => {
        const elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem!, {
            edge: "left",
            inDuration: 100,
            outDuration: 100
        }).close()
    })

    const location = useLocation();

    useEffect(() => {
        const elem = document.querySelector(".sidenav");

        M.Sidenav.getInstance(elem!).close()
    }, [location]);

    const toggleSideNav = () => {
        const elem = document.querySelector(".sidenav");

        const inst = M.Sidenav.getInstance(elem!)
        if (inst.isOpen) inst.close()
        else inst.open()
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo center">Чернівецький ліцей №1</Link>

                <ul id="slide-out" className="sidenav">
                    {token ? <li>
                        <div className="user-view">
                            <div className="background"/>
                            <Link to={'/profile'}><img className="circle" src={'test/vsk.jpg'}/></Link>
                            <Link to={'/profile'}><span className="name">VSK aka Кроконей 500</span></Link>
                            <Link to={'/profile'}><span className="email">kirik_grom@gmail.com</span></Link>
                        </div>
                    </li> : <></>}
                    <li><Link to={'/'}>Головна</Link></li>
                    {token ? <>
                        <li><Link to={'/timetable'}>Щоденник</Link></li>
                        <li><Link to={'/'}>Аналітика</Link></li>
                        <li><Link to={'/blog'}>Блог Андрійка Всеволодовича</Link></li>
                    </>: <></>}
                    <li>
                        <div className="divider"/>
                    </li>
                    {/*<li><a className="subheader">Subheader</a></li>*/}
                    {token ? <li>
                        <a onClick={logout}><i className="material-icons">exit_to_app</i>Logout</a>
                    </li> : <li>
                        <Link to={'/login'}><i className="material-icons">account_box</i>Login</Link>
                    </li>}
                </ul>

                <ul className="left">
                    <li>
                        <a onClick={toggleSideNav}><i className="material-icons">menu</i></a>
                    </li>
                </ul>

                {token ? <ul id="nav-mobile" className="right" style={{height: '100%'}}>
                    <li style={{height: '100%'}} className="profile-btn">
                        <Link to={'/profile'} className="nav-btn">
                            <img
                                className="circle responsive-img profile-pic"
                                src={'test/vsk.jpg'}
                                alt={"0"}
                                // style={{marginRight: '10px'}}
                            /><span>Кирилл Кирпич</span>
                        </Link>
                    </li>
                    <li className="li-active">
                        <a onClick={logout}>
                            <i className="material-icons">exit_to_app</i>
                        </a>
                    </li>
                </ul> : <ul id="nav-mobile" className="right" style={{height: '100%'}}>
                    <li className="li-active">
                        <Link to={'/login'} className="login-btn">
                            <i className="material-icons">account_box</i>
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>}
            </div>
        </nav>
    )
}

export default Navbar;