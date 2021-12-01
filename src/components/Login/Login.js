import React from 'react';
import logo from '../../logo2.png'
import './Login.css'
const Login = () => {
    return (
        <div className='container'>
            <div className="row ">
                <div className="col-md-12 text-center mt-5">
                    <img src={logo} alt="" className='logo' />
                    <form className='mt-auto '>
                        <div className='custom-signup'>
                            <input type="text" placeholder='Email' class="btn btn-light d-block" />
                            <input type="password" placeholder='Password' class="btn btn-light d-block" />
                            <button type="button" className="btn btn-danger signup">Login In</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;