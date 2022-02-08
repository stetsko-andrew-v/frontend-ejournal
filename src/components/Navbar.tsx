import '../css/navbar.css'

const Navbar = () => {
    console.log(window.innerWidth)

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Чернівецький ліцей №1</a>
                <ul id="nav-mobile" className="right" style={{height: '100%'}}>
                    <li style={{height: '100%'}}>
                        {window.innerWidth >= 600 ? <a className="nav-btn">
                            <img
                                className="circle responsive-img left profile-pic"
                                src="http://192.168.3.3:5500/photo_2022-01-17_23-00-41.jpg"
                                alt={"АПІ НАКРИЛОСЬ, стучіться Стецьку"}
                                style={{marginRight: '10px'}}
                            />Зеленько Олександр</a>: <a style={{height: '100%'}} className="nav-btn">
                            <img
                                className="circle responsive-img profile-pic"
                                src="http://192.168.3.3:5500/photo_2022-01-17_23-00-41.jpg"
                                alt={"АПІ НАКРИЛОСЬ, стучіться Стецьку"}
                            />
                        </a>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;