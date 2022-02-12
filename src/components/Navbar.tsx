import '../css/navbar.css'
import {useContext, useEffect} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {token, logout} = useContext(AuthContext);

    useEffect(() => {
        const elem = document.querySelector(".sidenav");
        if (elem == null) return
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 100,
            outDuration: 100
        }).close()
    })

    const toggleSideNav = () => {
        const elem = document.querySelector(".sidenav");
        if (elem == null) return

        const inst = M.Sidenav.getInstance(elem)
        if (inst.isOpen) inst.close()
        else inst.open()
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo center">Чернівецький ліцей №1</Link>

                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background" style={{backgroundColor: '#000'}}/>
                            <a href="#name"><span className="name">Boss of Gym aka VSK</span></a>
                            <a href="#email"><span className="email">kirik_grom@gmail.com</span></a>
                        </div>
                    </li>
                    <li><Link to={'/'}>Головна</Link></li>
                    <li><Link to={'/timetable'}>Щоденник</Link></li>
                    <li><Link to={'/'}>Аналітика</Link></li>
                    <li><Link to={'/blog'}>Блог Андрійка Всеволодовича</Link></li>
                    <li>
                        <div className="divider"/>
                    </li>
                    {/*<li><a className="subheader">Subheader</a></li>*/}
                    <li><a href="#!"><i className="material-icons">exit_to_app</i>Logout</a></li>
                </ul>

                <ul className="left">
                    <li>
                        <a onClick={toggleSideNav}><i className="material-icons">menu</i></a>
                    </li>
                </ul>

                {token ? <ul id="nav-mobile" className="right" style={{height: '100%'}}>
                    <li style={{height: '100%'}} className="profile-btn">
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