import {SyntheticEvent, useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import useHttp from "../hooks/http.hook";
import M from "materialize-css";

import '../css/login.css'

const LoginPage = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [fontSize, setFontSize] = useState(14)
    const { loading, error, request } = useHttp();
    const auth = useContext(AuthContext);

    const change = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;

        setForm({...form, [target.name]: target.value});
    }

    const login = async () => {
        try {
            const data = await request('/api/v1/auth/sign-in', 'POST', {...form});

            auth.login(data.token);

        } catch (e) {
            setFontSize(fontSize+2)
        }

        M.updateTextFields()
    }

    if (loading) {
        return (
            <>
                <div className="main">
                    <div className="card">
                        <div className="card-content" style={{padding: '10px 24px !important'}}>
                            <div className="center">
                                <div className="preloader-wrapper small active">
                                    <div className="spinner-layer spinner-blue-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"/>
                                        </div><div className="gap-patch">
                                        <div className="circle"/>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"/>
                                    </div>
                                    </div>
                                </div>
                                <br/>
                                <span className="card-title center">Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="main login-main">
            <div className="card">
                <div className="center" style={{padding: '16px 24px', borderBottom: '1px solid rgba(160,160,160,0.2)'}}>
                    <span className="card-title center">Login</span>
                </div>
                <div className="card-content" style={{padding: '10px 24px !important'}}>
                    {
                        error.message &&
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="card alert">
                                <div className="card-content">
                                    <span className="center">{error.message}</span>
                                </div>
                            </div>
                        </div>
                    }

                    {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div className="card alert">
                                    <div className="card-content">
                                        <span className="center">Invalid Username or Password</span>
                                    </div>
                                </div>
                            </div> */}

                    <div className="input-field">
                        <input id="first_name"
                               type="text"
                               name="username"
                               value={form.username}
                               onChange={change}
                        />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="input-field">
                        <input id="password"
                               type="password"
                               name="password"
                               value={form.password}
                               onChange={change}
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <span style={{color: '#808080', fontSize: fontSize + 'px'}}>* login: admin, password admin</span>

                </div>
                <div className="card-action center">
                    <button className="btn current" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage