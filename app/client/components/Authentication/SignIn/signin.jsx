import React from 'react'

import './signin.css'

const SignInPage = React.createClass({
    render() {
        return (
            <div className="container">
                <form className="loginForm"
                        method="post"
                        name="loginForm">

                        <ul>
                            <li>
                                <h2>Войти</h2>
                            </li>
                            <li>
                                <label for="email">* Email</label>
                                <input type="email" name="email" required/>
                            </li>
                            <li>
                                <label for="password">* Пароль</label>
                                <input type="password" name="password" required/>
                            </li>
                            <li>
                                <button className="btn btn-success" type="submit">Войти</button>
                            </li>
                        </ul>
                </form>
            </div>
        );
    }
})

export default SignInPage
