import '../css/dashboard.css'
import '../css/circle.css'
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col m4 s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title center">Розклад на завтра</span>
                            <table className="centered">
                                {/*<thead>*/}
                                {/*  <tr>*/}
                                {/*      <th>#</th>*/}
                                {/*      <th style="width: 60%;">Урок</th>*/}
                                {/*      <th>Каб</th>*/}
                                {/*  </tr>*/}
                                {/*</thead>*/}

                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td style={{width: '60%'}}>Біологія</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>ОЗ</td>
                                    <td>-1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Історія</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </table>
                            <Link to={'/timetable'} className="btn outlined btn-grey">
                                Докладніше
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col m4 s12">
                    <div className="card">
                        <div className="card-content center">
                            <span className="card-title">Дз на завтра</span>
                            <table className="centered">
                                {/*<thead>*/}
                                {/*  <tr>*/}
                                {/*      <th>#</th>*/}
                                {/*      <th style="width: 60%;">Урок</th>*/}
                                {/*      <th>Каб</th>*/}
                                {/*  </tr>*/}
                                {/*</thead>*/}

                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Біологія</td>
                                    <td style={{width: '75%'}}>Tylko jedno w głowie mam Koksu pięć gram odlecieć sam W
                                        krainę za zapomnienia
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>ОЗ</td>
                                    <td>Паугорай от души</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Історія</td>
                                    <td>§20 - §225 + 2 зошита конспекту</td>
                                </tr>
                                </tbody>
                            </table>
                            <Link to={'/timetable'} className="btn outlined btn-grey">
                                Докладніше
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col m4 s12">
                    <div className="card">
                        <div className="card-content center">
                            <span className="card-title">Похвали зауваження пропуски</span>
                            <button className="btn outlined btn-red">
                                <strong>Пропущено: </strong> 10
                            </button>
                            <button className="btn outlined btn-green">
                                <strong>Похвали: </strong> 0
                            </button>
                            <button className="btn outlined btn-yellow">
                                <strong>Зауважень: </strong> 0
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="card">
                    <div className="card-content center">
                        <span className="card-title center">Аналітика</span>
                        <div className="row">
                            <div className="col s12 m4 center">
                                <h6 className="center">Загальний середній бал</h6><br/>
                                <div className="card-holder">
                                    <div className="c100 center p100">
                                        <span>8.87</span>
                                        <div className="slice">
                                            <div className="bar"/>
                                            <div className="fill"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4 center">

                                <h6 className="center">Позиція у класі</h6><br/>
                                <div className="card-holder">
                                    <div className="c100 center p100">
                                        <span>12</span>
                                        <div className="slice">
                                            <div className="bar"/>
                                            <div className="fill"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4 center">
                                <h6 className="center">Позиція серед усіх класів</h6><br/>
                                <div className="card-holder">
                                    <div className="c100 center p100">
                                        <span>29</span>
                                        <div className="slice">
                                            <div className="bar"/>
                                            <div className="fill"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={'/'} className="btn short outlined btn-grey" style={{marginTop: '20px'}}>
                            Докладніше
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;